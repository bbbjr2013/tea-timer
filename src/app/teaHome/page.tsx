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
  const [selectedTeaName, setSelectedTeaName] = useState<string | null>(null);

  useEffect(() => {
    const tea = searchParams.get("tea");
    if (tea) {
      setSelectedTeaName(tea);
    }
  }, [searchParams]);

  console.log("Encoded tea:", selectedTeaName);

  const selectedTea = teaData.find((t) => t.name === selectedTeaName);

  console.log(selectedTea);

  return (
    <div>
      <Button variant="contained" href="/teaSelect">
        Select a Tea
      </Button>

      <div>
        {selectedTea ? (
          <div>
            <p>Tea ID: {selectedTea.id}</p>
            <p>Tea Name: {selectedTea.name}</p>
            <p>Original Name: {selectedTea.nameOrig}</p>
            <p>Tea Type: {selectedTea.type}</p>
            <p>
              Tea/Water Amount: {selectedTea.teaAmount} /{" "}
              {selectedTea.waterAmount}
            </p>
            <p>Additional Instructions: {selectedTea.addInst} </p>
          </div>
        ) : (
          <p>No tea selected</p>
        )}
      </div>
    </div>
  );
};

export default TeaHome;
