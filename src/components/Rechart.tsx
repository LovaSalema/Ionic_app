import { flag } from 'ionicons/icons';
import React, { PureComponent, useEffect, useState } from 'react';
import { 
    LineChart, 
    Line, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend, 
    ResponsiveContainer 
} from 'recharts';
import { useGlobalContext } from '../context/MineContext';

 const Example=()=> {
  const {data}=useGlobalContext();
  useEffect(()=>{
    console.log('====================================');
    console.log('data is updating! ');
    console.log('====================================');
  },[data])

    return (
      <ResponsiveContainer  width={340} height={350}  >
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 5,
            left: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid horizontal={false} vertical={false} fill='#0E3854'/>
          {/* <XAxis dataKey="name" /> */}
          {/* <YAxis /> */}
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="profit" stroke="#93fd70" activeDot={{ r: 4 }} />
          {/* <Line type="monotone" dataKey="uv" stroke="#82fa9d" /> */}
        </LineChart>
      </ResponsiveContainer>
    );
}
export default Example;