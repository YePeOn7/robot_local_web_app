'use client';

import React, { useEffect, useState } from 'react'
import ROSLIB from 'roslib';

interface Float32Message {
  data: number;
}

const YawSubscriber : React.FC = () => {
  const [yaw, setYaw] = useState<number | null>(null);

  useEffect(() => {
    // Connect to ROS
    const ros = new ROSLIB.Ros({
      url: 'ws://localhost:9090' // Update with your ROS Bridge URL
    });

    // Handle connection and error events
    ros.on('connection', () => {
      console.log('Connected to ROS bridge');
    });

    ros.on('error', (error) => {
      console.error('Error connecting to ROS bridge', error);
    });

    ros.on('close', () => {
      console.log('Connection to ROS bridge closed');
    });

    // Subscribe to the /yaw topic
    const yawListener = new ROSLIB.Topic({
      ros: ros,
      name: '/yaw',
      messageType: 'std_msgs/Float32'
    });

    yawListener.subscribe((message : ROSLIB.Message) => {
      const float32Message = message as Float32Message;
      setYaw(float32Message.data);
    });

    // Cleanup on component unmount
    return () => {
      yawListener.unsubscribe();
      ros.close();
    };
  }, []);

  return (
    <div>
      <p>{yaw !== null ? `Yaw: ${yaw}` : 'Waiting for data...'}</p>
    </div>
  );
}

export default YawSubscriber
