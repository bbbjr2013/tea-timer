import React from "react";
import { Button } from "@mui/material";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
} from "@mui/material";

const TeaSelect = () => {
  return (
    <div>
      <h1>A Page for Selecting Tea</h1>
      <Button variant="contained" href="./">
        Go back to home page
      </Button>
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
