'use server'
const os = require('os');

interface NetworkInterface {
  family: string;
  address: string;
  internal: boolean;
}

const getServerIPAddress = async () => {
  const ifaces = os.networkInterfaces();
  let ipAddress = '';

  Object.keys(ifaces).forEach(ifname => {
    ifaces[ifname].forEach((iface: NetworkInterface) => {
      if (iface.family === 'IPv4' && !iface.internal) {
        ipAddress = iface.address;
      }
    });
  });

  return ipAddress;
}

export{
    getServerIPAddress
}