import React from "react";
import { Button } from "@mui/material";

const TeaHome = () => {
  return (
    <div>
      <Button variant="contained" href="/teaSelect">
        Select a Tea
      </Button>
      <h1>Tea Home Page</h1>
      <p>This is where all the tea info and timer is supposed to live</p>
    </div>
  );
};

export default TeaHome;
