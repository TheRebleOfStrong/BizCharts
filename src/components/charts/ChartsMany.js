import React,{memo} from 'react';
import {Chart,Geom,Legend,Axis,Tooltip} from 'bizcharts';
// import DataSet from "@antv/data-set";


export default memo(({chartRes}) => {
 return (
    <>
      <Chart
        width={window.innerWidth}
        height={450}
        scale={{time:{range:[0,1]},value:{type:"linear",min:0,max:0.06}}}
        padding='auto'
        data={chartRes}
        forceFit
      >
        <Legend position="bottom" />
        <Axis name="time" grid={{
          type:'line',
          lineStyle:{
            lineWidth:1,
            stroke:'#ddd',
            lineDash:[3,3],
          }
        }} />
        <Axis name="value" />
        <Tooltip
          crosshairs={{
            type: "y"
          }}
        />
        <Geom
          type="line"
          position="time*value"
          size={2}
          color={"ip"}
          shape={"hv"}
        />
      </Chart>
    </>
  );
});