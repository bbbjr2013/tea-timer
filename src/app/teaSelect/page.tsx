"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
} from "@mui/material";
import teaData from "../../api/teas.json";

const TeaSelect = () => {
  const defaultSelectedTea = localStorage.getItem("selectedTea") || teaData[0]; //leave out .name or just keep it there because it needs to be a string. no way to pass in the entire information of a single array?

  const [selectedTea, setSelectedTea] = useState(defaultSelectedTea);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedTea) {
      localStorage.setItem("selectedTea", selectedTea); //this function only stores strings though so it doesn't really work?
      router.push(`../teaHome/page.tsx/${selectedTea}`);
    }
  };

  useEffect(() => {
    if (selectedTea) {
      localStorage.setItem("selectedTea", selectedTea);
    }
  }, [selectedTea]);

  console.log(selectedTea);

  return (
    <div>
      <Button variant="contained" href="./">
        Go back to home page
      </Button>
      <h1>A Page for Selecting Tea</h1>
      <p>
        This is where tea selection happens, which will fill the TeaHome page
        with the selected tea
      </p>

      <FormControl>
        <FormLabel id="form-label">Select a Tea</FormLabel>
        <RadioGroup>
          <FormControlLabel
            value="2_time_char_oo"
            control={<Radio />}
            label="2-time Charcoal Roasted High Mountain Oolong"
          />
          <FormControlLabel
            value="luye_red_oo"
            control={<Radio />}
            label="Luye Red Oolong"
          />
          <FormControlLabel
            value="5_time_char_oo"
            control={<Radio />}
            label="5-time Charcoal Roasted Dong Ding Oolong"
          />
          <FormControlLabel
            value="ali_milk_oo"
            control={<Radio />}
            label="Alishan Milk (Jinxuan) Oolong"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default TeaSelect;
