import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [ipAddress, setIpAddress] = useState(null);

  useEffect(() => {
    // Fetch the user's IP address when the component mounts
    // axios.post('http://localhost:4000/record-ip')
    axios.post('https://fusion-chain.onrender.com/record-ip')
      .then(response => {
        setIpAddress(response.data.ipAddress);
        console.log(ipAddress);
      })
      .catch(error => {
        console.error('Error fetching IP address:', error);
      });
  }, []);

  return (
    <div>
      <h1>User's IP Address:</h1>
      {ipAddress ? <p>{ipAddress}</p> : <p>Loading...</p>}
    </div>
  );
}

export default App;
