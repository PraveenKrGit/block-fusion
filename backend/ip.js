const os = require('os');

function getLocalIpAddress() {
  const interfaces = os.networkInterfaces();

  // Iterate over network interfaces
  for (const interfaceName in interfaces) {
    const iface = interfaces[interfaceName];

    // Iterate over interface details
    for (let i = 0; i < iface.length; i++) {
      const { address, family, internal } = iface[i];

      // Filter out internal (loopback) and non-IPv4 addresses
      if (family === 'IPv4' && !internal) {
        return address;
      }
    }
  }

  // Return a default value if no suitable IP address is found
  return '127.0.0.1';
}

const localIpAddress = getLocalIpAddress();
console.log('Local IP Address:', localIpAddress);
