"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Button,
} from "@mui/material";
import teaData from "../../api/teas.json";

const TeaSelect = () => {
  const [selectedTea, setSelectedTea] = useState(teaData[0].name); //removed  return localStorage.getItem("selectedTea") || logic
  const router = useRouter();

  useEffect(() => {
    //checks if we're in the browser before rusing localStorage and moves all localStorage operations into the useEffect or behind the window check
    if (typeof window !== "undefined") {
      const storedTea = localStorage.getItem("selectedTea");
      if (storedTea) setSelectedTea(storedTea);
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTea(event.target.value);
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedTea", event.target.value);
    }
  };

  const handleNavigate = async () => {
    if (selectedTea) {
      const encodedTea = encodeURIComponent(selectedTea);
      console.log("Encoded Tea:", encodedTea); // debugger
      router.push(`/?tea=${encodedTea}`);
    }
  };

  console.log("Selected tea:", selectedTea); // debugger

  return (
    <div>
      <Button onClick={handleNavigate} variant="contained">
        Go back to home page
      </Button>
      <h1>A Page for Selecting Tea</h1>
      <p>
        This is where tea selection happens, which will fill the TeaHome page
        with the selected tea
      </p>

      <FormControl>
        <RadioGroup value={selectedTea} onChange={handleChange}>
          {teaData.map((tea) => (
            <FormControlLabel
              key={tea.id}
              value={tea.name}
              control={<Radio />}
              label={tea.name}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default TeaSelect;
