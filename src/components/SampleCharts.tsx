'use client'

import React from 'react';
import {
  LineChart, Line, XAxis,
  YAxis, CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  AreaChart,
  Area,
  TooltipProps,
} from 'recharts';
import { Payload } from 'recharts/types/component/DefaultLegendContent';

interface CustomXAxisTickProps {
  x: number;
  y: number;
  payload: Payload;
}

const SampleChart1 = () => {

  // Sample data
  const data = [
    { x: 1, y: 123, z: 122 },
    { x: 2, y: 113, z: 713 },
    { x: 3, y: 125, z: 312 },
    { x: 4, y: 235, z: 123 },
    { x: 5, y: 145, z: 420 },
    { x: 6, y: 25, z: 529 },
    { x: 7, y: 117, z: 61 },
    { x: 8, y: 32, z: 435 },
    { x: 9, y: 143, z: 93 },
  ];


  return (
    <ResponsiveContainer id='sample-chart-1' width="100%" height={200}>
      <LineChart width={400}
        height={200} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" />
        <YAxis yAxisId="left-axis" />
        <YAxis yAxisId="right-axis"
          orientation="right" />
        <Line yAxisId="left-axis"
          type="natural" dataKey="y"
          stroke="orange" strokeWidth={3} />
        <Line yAxisId="right-axis"
          type="natural" dataKey="z"
          stroke="blue" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
}

const SampleChart2 = () => {

  // Sample data
  const data = [
    { x: 'Sun', y: 123, z: 122 },
    { x: "Mon", y: 113, z: 713 },
    { x: "Tue", y: 125, z: 312 },
    { x: "Wed", y: 235, z: 123 },
    { x: "Thu", y: 145, z: 420 },
    { x: "Fri", y: 25, z: 529 },
    { x: "Sat", y: 117, z: 61 },
  ];

  return (
    <ResponsiveContainer id='sample-chart-2' width="100%" height={200} >
      <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="x" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="natural" dataKey="y" stroke="#8884d8" />
        <Line type="natural" dataKey="z" stroke="#82ca9d" />
        {/* <Line type="monotone" dataKey="amt" stroke="red" /> */}
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
}

const SampleChart3 = () => {

  const generateData = () => {
    const data = [];
    const startTime = new Date('2024-06-14T10:00:00');
    const voltageBase = 30;
    const currentBase = 15;

    for (let i = 0; i < 20; i++) {
      const time = new Date(startTime.getTime() + i * 5 * 60000); // 5 minutes interval
      const voltage = voltageBase + Math.random() * 10 - 5; // Voltage varies between 115 and 125
      const current = currentBase + Math.random() * 4 - 2; // Current varies between 13 and 17

      data.push({
        time: time.toISOString().slice(0, 16).replace('T', ' '), // Format as 'YYYY-MM-DD HH:mm'
        voltage: voltage.toFixed(2),
        current: current.toFixed(2)
      });
    }

    return data;
  };

  const data = generateData();

  const formatTick = (tick:number) => tick.toFixed(1);

  const tooltipStyles = {
    container: {
      backgroundColor: 'var(--primary-color)',
      border: '1px solid #ccc',
      padding: '5px',
      fontSize: '12px', // Smaller font size
      lineHeight: '1.2',
      borderRadius: '10px'
    },
    label: {
      margin: 0,
      fontWeight: '500',
    },
    item: {
      margin: 0,
    },
  };

  const CustomTooltip: React.FC<TooltipProps<number, string>> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip" style={tooltipStyles.container}>
          <p style={tooltipStyles.label}>{`${label}`}</p>
          {payload.map((entry, index) => (
            <p key={`item-${index}`} style={tooltipStyles.item}>
              {`${entry.name}: ${entry.value}`}
            </p>
          ))}
        </div>
      );
    }
  
    return null;
  };

  return (
    <ResponsiveContainer id='sample-chart-3' width="100%" height={200}>
      <LineChart
        data={data}
        margin={{
          top: 10, right: 40, left: 20, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time"/>
        <YAxis yAxisId="left" tickFormatter={formatTick} label={{ value: 'Voltage (V)', angle: 90, position: 'insideTopLeft' }} domain={['dataMin - 10', 'dataMax + 10']} />
        <YAxis yAxisId="right" tickFormatter={formatTick} orientation="right" label={{ value: 'Current (A)', angle: -90, position: 'insideTopRight' }} domain={['dataMin - 1', 'dataMax + 1']} />
        <Tooltip content={<CustomTooltip />}/>
        <Legend />
        <Line yAxisId="left" type="monotone" dataKey="voltage" stroke="#8884d8" dot={false} strokeWidth={2} />
        <Line yAxisId="right" type="monotone" dataKey="current" stroke="#82ca9d" dot={false} strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}

const SampleAreaChart = () => {
   // Sample data
   const data = [
    { x: 1, y: 123, z: 122 },
    { x: 2, y: 113, z: 713 },
    { x: 3, y: 125, z: 312 },
    { x: 4, y: 235, z: 123 },
    { x: 5, y: 145, z: 420 },
    { x: 6, y: 25, z: 529 },
    { x: 7, y: 117, z: 61 },
    { x: 8, y: 32, z: 435 },
    { x: 9, y: 143, z: 93 },
  ];

  return (
    <>
    <ResponsiveContainer id='sample-area-chart' width='100%' height={200}>
      <AreaChart width={500} height={200} data={data}>
        <XAxis dataKey='x'/>
        <YAxis/>


        <Area dataKey='y' type='monotone' fill='yellow' stroke='yellow' stackId='1'/>
        <Area dataKey='z' type='monotone' fill='green' stroke='green' stackId='1'/>
        {/* <Area dataKey='y' type='monotone' fill='yellow' stroke='yellow'/>
        <Area dataKey='z' type='monotone' fill='green' stroke='green'/> */}
      </AreaChart>
    </ResponsiveContainer>
    </>
  )
}

export {
  SampleChart1,
  SampleChart2,
  SampleChart3,
  SampleAreaChart
};