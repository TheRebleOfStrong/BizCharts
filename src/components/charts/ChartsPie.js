import React,{memo} from 'react';
import {Chart,Geom,Tooltip,Coord,Legend,Label,Guide} from 'bizcharts';

const valToPercent = function (data) {
  let arr = [];
  let all = 0;
  //获取总和
  data.forEach(item => {
    all = all + item.value;
  });
  data.forEach(item => {
    let obj = {};
    obj.x = item.name;
    obj.y = item.value/all;
    obj.v = item.value;
    arr.push(obj);
  });
  return arr;
};

export default memo(({dataSource,options}) => {
  
  const {title,height} = options;
  const content = "<div style=&quot;font-size:20px;text-align:center;&quot;>"+title+"</div>";
  
  return (
    <>
      <Chart
        width={window.innerWidth}
        height={height}
        scale={{y:{formatter: val => {
          val = Math.round(val * 100) + "%";
          return val;
        }}}}
        data={valToPercent(dataSource)}
        padding={[0,0,35,0]}
        forceFit
      >
        <Guide>
          <Guide.Html position={['50%','50%']} html={content} />
        </Guide>
        <Coord type={"theta"} radius={0.75} innerRadius={0.6} />
        <Tooltip showTitle={false} />
        <Legend
          position="bottom"
        />
        <Geom
          type="intervalStack"
          position="y"
          color="x"
          style={{
            lineWidth:2,
            stroke:'#fff'
          }}
        >
          <Label
            content="y"
            formatter={(val, item) => {
              return item.point.x+':'+val;
            }}
          />
        </Geom>
      </Chart>
    </>
  )
});