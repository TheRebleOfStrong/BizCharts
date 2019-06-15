import React,{memo} from 'react';
import {Chart,Geom,Legend,Axis,Tooltip} from 'bizcharts';
import DataSet from "@antv/data-set";


export default memo(({chartRes}) => {
  
  if(chartRes.length === 0){
    return null;
  };
  const keys = Object.keys(chartRes[0]);
  keys.shift();
  const ds = new DataSet();
  const dv = ds.createView().source(chartRes);
  dv.transform({
    type:"fold",
    fields: keys,
    key:"key",
    value:"value"
  });
  
  return (
    <>
      <Chart
        width={window.innerWidth}
        height={450}
        scale={{x:{range:[0,1]},value:{type:"linear",min:0,max:0.06}}}
        padding='auto'
        data={dv}
        forceFit
      >
        <Legend position="bottom" />
        <Axis name="x" grid={{
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
          position="x*value"
          size={2}
          color={"key"}
          shape={"hv"}
        />
      </Chart>
    </>
  );
});