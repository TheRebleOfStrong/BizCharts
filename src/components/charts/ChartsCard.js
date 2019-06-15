import React,{memo} from 'react';
import {Chart,Geom,Tooltip} from 'bizcharts';

export default memo(({dataSource,color})=> {
  return (
    <>
      <Chart
        width={0}
        height={50}
        data={dataSource}
        padding='0'
        forceFit
      >
        <Tooltip showTitle={false} />
        <Geom
          type="area"
          position="x*y"
          shape="smooth"
          size={0}
          tooltip={['x*y', (x, y)=>{
            return {
              name:x,
              value:y
            }
          }]}
          color={color}
        />
      </Chart>
    </>
  )
});