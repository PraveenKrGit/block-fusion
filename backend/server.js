const express = require('express');
const app = express();
// const PORT = 3005; 
const os = require('os');

var cors = require('cors')


app.use(express.json());
app.use(cors())

// Config
const dotenv = require("dotenv");
dotenv.config();


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

app.post('/record-ip', (req, res) => {
    const userIP = req.ip || req.socket.remoteAddress;
    console.log('User IP Address:', userIP);
    // Save the IP address or perform any other necessary actions
    res.status(200).json({ success: true, ipAddress: userIP });
  });

// app.get('/record-ip', (req, res) => {
//     const userIP = req.ip || req.socket.remoteAddress;
//     console.log('User IP Address:', userIP);

//     // const userIP = getLocalIpAddress();
//     // console.log('User IP Address:', userIP);
//     // Save the IP address or perform any other necessary actions
//     res.status(200).json({ success: true, ipAddress: userIP });
//   });
  

app.listen(4000 || process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
