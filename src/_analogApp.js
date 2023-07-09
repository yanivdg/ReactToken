import React, { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>Analog Clock</h1>
      <div className="clock">
        <div className="hand hour-hand" style={{ transform: `rotate(${time.getHours() * 30}deg)` }}></div>
        <div className="hand minute-hand" style={{ transform: `rotate(${time.getMinutes() * 6}deg)` }}></div>
        <div className="hand second-hand" style={{ transform: `rotate(${time.getSeconds() * 6}deg)` }}></div>
      </div>
    </div>
  );
}

export default App;
