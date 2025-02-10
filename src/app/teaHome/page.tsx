"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import teaData from "../../api/teas.json";
import { Button } from "@mui/material";

const TeaHome = () => {
  // const router = useRouter();
  // const { tea } = router.query;

  const searchParams = useSearchParams();
  // const selectedTeaId = searchParams.get("tea");
  const [selectedTea, setSelectedTea] = useState<string | null>(null);

  useEffect(() => {
    const tea = searchParams.get("tea");
    if (tea) {
      setSelectedTea(tea);
    }
  }, [searchParams]);

  console.log(selectedTea);

  return (
    <div>
      <Button variant="contained" href="/teaSelect">
        Select a Tea
      </Button>
      <h1>Tea Home Page</h1>
      <p>
        {selectedTea ? (
          <p>Selected Tea: {selectedTea}</p>
        ) : (
          <p>No tea selected</p>
        )}
      </p>
    </div>
  );
};

export default TeaHome;
