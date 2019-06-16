import React,{memo} from 'react';
import {Chart,Axis,Geom,Tooltip,Legend} from 'bizcharts';

const ChartPage = memo(({dataSource}) => {
  return (
    <>
      <Chart
        width={0}
        height={500}
        scale={{time:{range:[0,1]},value:{min:0,max:100}}}
        padding={[10,'auto',60,'auto']}
        data={dataSource}
        forceFit
      >
        <Legend position="bottom" />
        <Tooltip
          crosshairs={{
            type: "y"
          }}
        />
        <Axis name="time" />
        <Axis name="value" />
        <Geom
          type="line"
          position="time*value"
          size={2}
          color={'name'}
          shape={"smooth"}
        />
        <Geom
          type="point"
          position="time*value"
          size={6}
          shape={"circle"}
          color={"name"}
          style={{
            stroke: "#fff",
            lineWidth: 1
          }}
        />
      </Chart>
    </>
  );
});

export default ChartPage;

