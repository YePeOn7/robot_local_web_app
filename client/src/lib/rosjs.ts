import ROSLIB from 'roslib';

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

export{
  ros,
  ROSLIB
} 
  