import { ROSLIB, initRos } from "@/lib/rosjs";
import { Message } from "roslib";
import { StdMsgsFloat32 } from "../message_types/ros_msgs";

type CallbackFunction = (message: StdMsgsFloat32) => void;

class YawTopic {
  private yawTopic: ROSLIB.Topic|null = null;

  constructor(ip:string) {
    const ros = initRos(ip);
    if(ros){
      this.yawTopic = new ROSLIB.Topic({
        ros: ros,
        name: "/yaw",
        messageType: "std_msgs/Float32",
      });
    }
  }

  publish(yawData: number) {
    if(this.yawTopic){
      const yaw = new ROSLIB.Message({
        data: yawData,
      });
      this.yawTopic.publish(yaw);
    }
  }

  subscribe(callback: CallbackFunction) {
    if(this.yawTopic){
      this.yawTopic.subscribe((message) => {
        const float32Message = message as StdMsgsFloat32;
        callback(float32Message);
      });
    }
  }

  unsubscribe(){
    if(this.yawTopic) this.yawTopic.unsubscribe();
  }
}

export default YawTopic;
