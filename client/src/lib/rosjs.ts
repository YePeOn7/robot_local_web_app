import ROSLIB from "roslib";

let ros: ROSLIB.Ros | null = null;

const initRos = (ip: string|null) => {
  if(ip){
    ros = new ROSLIB.Ros({
      url: `ws://${ip}:9090`,
    });
    // Handle connection and error events
    ros.on("connection", () => {
      console.log("Connected to ROS bridge");
    });
  
    ros.on("error", (error) => {
      console.error("Error connecting to ROS bridge", error);
    });
  
    ros.on("close", () => {
      console.log("Connection to ROS bridge closed");
    });
  }

  return ros;
};

export { ros, ROSLIB, initRos };
