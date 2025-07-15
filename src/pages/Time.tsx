import React, { useState } from "react";
import { Box, TextField, Button, Typography, Alert } from "@mui/material";

const TimeGame: React.FC = () => {
  const [randomHour, setRandomHour] = useState(
    () => Math.floor(Math.random() * 12) + 1
  );
  const [randomMinute, setRandomMinute] = useState(
    () => Math.floor(Math.random() * 12) * 5
  );
  const [guessedHour, setGuessedHour] = useState("");
  const [guessedMinute, setGuessedMinute] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const generateNewTime = () => {
    setRandomHour(Math.floor(Math.random() * 12) + 1);
    setRandomMinute(Math.floor(Math.random() * 12) * 5);
    setGuessedHour("");
    setGuessedMinute("");
    setFeedback(null);
    setIsCorrect(null);
  };

  const checkAnswer = () => {
    const hourGuess = parseInt(guessedHour);
    const minuteGuess = parseInt(guessedMinute);

    if (isNaN(hourGuess) || isNaN(minuteGuess)) {
      setFeedback("Please enter both hours and minutes!");
      setIsCorrect(false);
      return;
    }

    if (hourGuess === randomHour && minuteGuess === randomMinute) {
      setFeedback("Great job! That's correct! 🎉");
      setIsCorrect(true);
    } else {
      setFeedback(
        `Not quite right. The correct time is ${randomHour}:${randomMinute
          .toString()
          .padStart(2, "0")}`
      );
      setIsCorrect(false);
    }
  };

  const hourDegrees = (randomHour % 12) * 30 + randomMinute / 2;
  const minuteDegrees = randomMinute * 6;

  return (
    <Box sx={{ textAlign: "center", p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        What time is it?
      </Typography>

      {/* Analog Clock */}
      <Box
        sx={{
          width: 250,
          height: 250,
          position: "relative",
          margin: "20px auto",
          borderRadius: "50%",
          border: "3px solid #333",
          background: "#fff",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        }}
      >
        {/* Clock numbers */}
        {[...Array(12)].map((_, i) => {
          const number = i === 0 ? 12 : i;
          const angle = i * 30;
          const x = Math.sin((angle * Math.PI) / 180) * 90;
          const y = -Math.cos((angle * Math.PI) / 180) * 90;

          return (
            <Typography
              key={i}
              variant="h6"
              sx={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: `translate(${x - 8}px, ${y - 12}px)`,
                fontWeight: "bold",
                color: "#333",
              }}
            >
              {number}
            </Typography>
          );
        })}

        {/* Hour markers */}
        {[...Array(12)].map((_, i) => {
          const rotation = i * 30;
          return (
            <Box
              key={i}
              sx={{
                position: "absolute",
                width: "4px",
                height: "20px",
                background: "#333",
                left: "50%",
                top: "5px",
                transformOrigin: "2px 120px",
                transform: `translateX(-50%) rotate(${rotation}deg)`,
              }}
            />
          );
        })}

        {/* Hour hand */}
        <Box
          sx={{
            position: "absolute",
            width: "6px",
            height: "70px",
            background: "#333",
            left: "50%",
            bottom: "50%",
            transformOrigin: "bottom center",
            transform: `translateX(-50%) rotate(${hourDegrees}deg)`,
            borderRadius: "3px",
          }}
        />

        {/* Minute hand */}
        <Box
          sx={{
            position: "absolute",
            width: "3px",
            height: "95px",
            background: "#666",
            left: "50%",
            bottom: "50%",
            transformOrigin: "bottom center",
            transform: `translateX(-50%) rotate(${minuteDegrees}deg)`,
            borderRadius: "2px",
          }}
        />

        {/* Center dot */}
        <Box
          sx={{
            position: "absolute",
            width: "12px",
            height: "12px",
            background: "#333",
            borderRadius: "50%",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </Box>

      {/* Input section */}
      <Box
        sx={{
          mt: 3,
          display: "flex",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          label="Hours"
          type="number"
          value={guessedHour}
          onChange={(e) => setGuessedHour(e.target.value)}
          inputProps={{ min: 1, max: 12 }}
          sx={{ width: 100 }}
        />
        <Typography variant="h5">:</Typography>
        <TextField
          label="Minutes"
          type="number"
          value={guessedMinute}
          onChange={(e) => setGuessedMinute(e.target.value)}
          inputProps={{ min: 0, max: 59, step: 5 }}
          sx={{ width: 100 }}
        />
      </Box>

      {/* Buttons */}
      <Box sx={{ mt: 3, display: "flex", gap: 2, justifyContent: "center" }}>
        <Button variant="contained" color="primary" onClick={checkAnswer}>
          Check Answer
        </Button>
        <Button variant="outlined" onClick={generateNewTime}>
          New Time
        </Button>
      </Box>

      {/* Feedback */}
      {feedback && (
        <Alert
          severity={isCorrect ? "success" : "error"}
          sx={{ mt: 3, maxWidth: 400, mx: "auto" }}
        >
          {feedback}
        </Alert>
      )}
    </Box>
  );
};

export default TimeGame;
