import React,{PureComponent} from 'react';
import {Card,DatePicker,Button} from 'antd';
import {connect} from 'dva';
import moment from 'moment';
import Pol from '@/components/charts/ChartsPol';

const {RangePicker} = DatePicker;

@connect(({loading,chart}) => {
  return {
    loading:loading.effects['chart/load'],
    chart,
  }
})
class CoachRow extends PureComponent{
  state = {
    currentTime:[],
    dateType:7,
  }
  
  componentDidMount () {
    this.selDate(7);
  }
  
  //7-14-30天筛选
  selDate =(num) => {
    let time = this.getTimeDistance(num);
    this.sendDateResult(time.dateStr);
    this.setState({
      dateType:num,
      currentTime:time.date
    })
  }
  
  //7-14-30转化为moment类型和str类型
  getTimeDistance = (num) => {
    const obj = {};
    const now = new Date();
    const oneDay = 1000 * 60 * 60 * 24;
    
    let day = now.getDay();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    if (day === 0) {
      day = num-1;
    } else {
      day -= 1;
    };
    const beginTime = now.getTime() - day * oneDay;
    obj.date = [moment(beginTime), moment(beginTime + (num * oneDay - 1000))];
    obj.dateStr = [moment(beginTime).format('YYYY-MM-DD'), moment(beginTime + (num * oneDay - 1000)).format('YYYY-MM-DD')];
    return obj;
  }
  
  //日期区间选择器
  timeChange = (date,dateStr) => {
    if(date.length > 0){
      this.sendDateResult(dateStr);
    };
    this.setState({
      currentTime:date,
      dateType:null
    });
  }
  
  //根据日期区间请求数据
  sendDateResult = (dateStr) => {
    const {dispatch} = this.props;
    dispatch({
      type:'chart/fetchDate',
      payload:dateStr
    });
  }
  
  render () {
    const {loading,chart} = this.props;
    const {coachData} = chart;
    const {dateType,currentTime} = this.state;
    return (
      <>
        <Card
          title="训练情况统计"
          loading={loading}
          bordered={false}
          extra={
            <>
              <Button type={dateType === 7 ? 'primary' : 'default'} style={{marginRight:10}} onClick={() => this.selDate(7)}>7天</Button>
              <Button type={dateType === 14 ? 'primary' : 'default'} style={{marginRight:10}} onClick={() => this.selDate(14)}>14天</Button>
              <Button type={dateType === 30 ? 'primary' : 'default'} style={{marginRight:10}} onClick={() => this.selDate(30)}>30天</Button>
              <RangePicker
                format="YYYY-MM-DD"
                value={currentTime}
                onChange={this.timeChange}
              />
            </>
          }
        >
          <Pol dataSource={coachData} />
        </Card>
      </>
    );
  }
}

export default CoachRow;