import React, { useState, useEffect } from "react";

const AnalogClock: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const [randomHour, setRandomHour] = useState(Math.floor(Math.random() * 12));
  const [randomMinute, setRandomMinute] = useState(
    Math.floor(Math.random() * 60)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
      setRandomHour(Math.floor(Math.random() * 12));
      setRandomMinute(Math.floor(Math.random() * 60));
    }, 3000); // Generate a new random time every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const hourDegrees = randomHour * 30 + randomMinute / 2;
  const minuteDegrees = randomMinute * 6;

  return (
    <div
      className="clock-container"
      style={{
        width: "200px",
        height: "200px",
        position: "relative",
        margin: "20px auto",
        borderRadius: "50%",
        border: "2px solid black",
        background: "#f0f0f0",
      }}
    >
      {/* Clock face */}
      {[...Array(12)].map((_, i) => {
        const rotation = i * 30;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              width: "4px",
              height: "10px",
              background: "black",
              left: "50%",
              top: "5px",
              transformOrigin: "bottom center",
              transform: `translateX(-50%) rotate(${rotation}deg) translateY(80px)`,
            }}
          />
        );
      })}

      {/* Hour hand */}
      <div
        style={{
          position: "absolute",
          width: "6px",
          height: "60px",
          background: "black",
          left: "50%",
          bottom: "50%",
          transformOrigin: "bottom center",
          transform: `translateX(-50%) rotate(${hourDegrees}deg)`,
          borderRadius: "3px",
        }}
      />

      {/* Minute hand */}
      <div
        style={{
          position: "absolute",
          width: "4px",
          height: "80px",
          background: "black",
          left: "50%",
          bottom: "50%",
          transformOrigin: "bottom center",
          transform: `translateX(-50%) rotate(${minuteDegrees}deg)`,
          borderRadius: "2px",
        }}
      />

      {/* Center dot */}
      <div
        style={{
          position: "absolute",
          width: "12px",
          height: "12px",
          background: "black",
          borderRadius: "50%",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

export default AnalogClock;
