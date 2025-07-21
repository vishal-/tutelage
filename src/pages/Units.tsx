import React, { useState, useEffect } from "react";
import { units } from "../data/units";
import { Button, Typography, Box, Paper } from "@mui/material";

const Units: React.FC = () => {
  const categories = Object.keys(units);
  const [currentUnit, setCurrentUnit] = useState<string>("");
  const [correctCategory, setCorrectCategory] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const loadNewUnit = () => {
    // Reset state
    setSelectedCategory(null);
    setIsCorrect(null);

    // Select random category
    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)];
    setCorrectCategory(randomCategory);

    // Select random unit from that category
    const unitsInCategory = units[randomCategory];
    const randomUnit =
      unitsInCategory[Math.floor(Math.random() * unitsInCategory.length)];
    setCurrentUnit(randomUnit);
  };

  useEffect(() => {
    loadNewUnit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setIsCorrect(category === correctCategory);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 3, mb: 3, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          What category does this unit belong to?
        </Typography>
        <Typography variant="h3">{currentUnit}</Typography>
      </Paper>

      <Box
        sx={{
          mb: 6,
          flexWrap: "wrap",
          display: "flex",
          justifyContent: "center"
        }}
      >
        {categories.map((category) => (
          <Button
            key={category}
            variant="contained"
            color={
              selectedCategory === category
                ? isCorrect
                  ? "success"
                  : "error"
                : "primary"
            }
            onClick={() => handleCategorySelect(category)}
            disabled={selectedCategory !== null}
            sx={{ m: 1 }}
          >
            {category}
          </Button>
        ))}
      </Box>

      {selectedCategory !== null && (
        <Box sx={{ textAlign: "center", mb: 3 }}>
          <Typography
            variant="h6"
            color={isCorrect ? "success.main" : "error.main"}
          >
            {isCorrect
              ? "Correct!"
              : `Incorrect! The correct category is ${correctCategory}`}
          </Typography>
        </Box>
      )}

      <Box sx={{ textAlign: "center" }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={loadNewUnit}
          size="large"
        >
          New Unit
        </Button>
      </Box>
    </Box>
  );
};

export default Units;
