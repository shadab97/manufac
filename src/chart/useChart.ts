import React, { useState } from 'react'
interface IxyAxis{
    type:string,
    name:string,
    
    data?:Array<string|number>
}



interface Idata{
        data: Array<number | string>,
        type: 'line'|'bar',
        smooth: boolean,
}
export interface IuseChart {
    type:'line'|'bar',
    xAxis:IxyAxis,
    yAxis:IxyAxis,
    series:Array<Idata>
}
const useChart = ({type,xAxis,yAxis,series}:IuseChart) => {
    const [options,setOptions]=useState({
            grid: { top: 8, right: 8, bottom: 24, left: 36 },
            xAxis: xAxis,
            yAxis: yAxis,
            series: series,
            tooltip: {
                trigger: 'axis',
            }
    })
  return {
    options,
  }
}

export default useChart