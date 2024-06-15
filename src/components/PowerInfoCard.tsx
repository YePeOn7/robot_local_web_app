'use client'
import React, { useEffect, useState } from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, TooltipProps, XAxis, YAxis } from 'recharts'

interface PowerInfoProps {
  className?: string
}

interface ChannelData {
  channel: string,
  voltage: number,
  current: number
}

const PowerInfoCard: React.FC<PowerInfoProps> = ({ className }) => {
  const [data, setData] = useState<ChannelData[]>([
    { channel: 'ch1', voltage: 0, current: 0 },
    { channel: 'ch2', voltage: 0, current: 0 },
    { channel: 'ch3', voltage: 0, current: 0 },
    { channel: 'ch4', voltage: 0, current: 0 },
    { channel: 'ch5', voltage: 0, current: 0 },
    { channel: 'ch6', voltage: 0, current: 0 },
    { channel: 'ch7', voltage: 0, current: 0 }
  ]);

  useEffect(() => {
    setData([
      { channel: 'ch1', voltage: 52.1, current: 1.2 },
      { channel: 'ch2', voltage: 5.2, current: 2.1 },
      { channel: 'ch3', voltage: 21.3, current: 1.4 },
      { channel: 'ch4', voltage: 22.3, current: 2.3 },
      { channel: 'ch5', voltage: 12.4, current: 3.2 },
      { channel: 'ch6', voltage: 5.2, current: 1.7 },
      { channel: 'ch7', voltage: 12.3, current: 1.3 }
    ])
  }, [])

  const tooltipStyles = {
    container: {
      backgroundColor: 'hsl(var(--secondary))',
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
    <div className={`power-info flex flex-col h-full p-5 bg-white rounded-xl shadow-xl hover:shadow-none ${className}`}>
      <h1 className='text-xl text-center font-poppins'>Power Measurement</h1>
      <div className='flex-1'>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="channel" />
            <YAxis
              yAxisId="left"
              orientation="left"
              stroke="hsl(var(--secondary-foreground))"
              interval={0}  // This will set the tick interval to every tick
              tickCount={12} // Optional: sets the number of ticks to 12
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="hsl(var(--primary-foreground))"
              interval={0}
              tickCount={12}
            />
            <Tooltip content={<CustomTooltip />}/>
            <Legend />
            <Bar yAxisId="left" dataKey="voltage" fill="hsl(var(--secondary-foreground))" isAnimationActive={false} />
            <Bar yAxisId="right" dataKey="current" fill="hsl(var(--primary-foreground))" isAnimationActive={false} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default PowerInfoCard
