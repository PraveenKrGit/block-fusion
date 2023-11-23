import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [ipAddress, setIpAddress] = useState(null);

  useEffect(() => {
    // Fetch the user's IP address when the component mounts
    axios.get('http://localhost:3005/record-ip')
      .then(response => {
        setIpAddress(response.data.ipAddress);
        console.log(response.data.ipAddress)
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
