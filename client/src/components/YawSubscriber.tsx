'use client';

import React, { useEffect, useState } from 'react'
import YawTopic from '@/ros_topics/yaw';
import { StdMsgsFloat32 } from '@/message_types/ros_msgs';

const YawSubscriber : React.FC = () => {
  const [yaw, setYaw] = useState<number | null>(null);

  useEffect(() => {
    const yawTopic = new YawTopic("");
    yawTopic.subscribe((msg) => {
      setYaw(msg.data);
    })

    return () => {
      yawTopic.unsubscribe();
    };
  }, []);

  return (
    <div>
      <p>{yaw !== null ? `Yaw: ${yaw.toFixed(2)}` : 'Waiting for data...'}</p>
    </div>
  );
}

export default YawSubscriber
