"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import teaData from "../../api/teas.json";
import { Button } from "@mui/material";

const TeaHome = () => {
  // const router = useRouter();
  // const { tea } = router.query;

  const defaultTea = teaData[0];

  console.log("Default tea:", defaultTea); // debugger

  const searchParams = useSearchParams();
  // const selectedTeaId = searchParams.get("tea");
  const [selectedTeaName, setSelectedTeaName] = useState<string | null>(null);

  useEffect(() => {
    const tea = searchParams.get("tea");
    if (tea) {
      setSelectedTeaName(tea);
    }
  }, [searchParams]);

  console.log("Encoded tea:", selectedTeaName); // debugger

  const selectedTea = teaData.find((t) => t.name === selectedTeaName);

  console.log(selectedTea); // debugger

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
          <div>
            <p>Tea ID: {defaultTea.id}</p>
            <p>Tea Name: {defaultTea.name}</p>
            <p>Original Name: {defaultTea.nameOrig}</p>
            <p>Tea Type: {defaultTea.type}</p>
            <p>
              Tea/Water Amount: {defaultTea.teaAmount} /{" "}
              {defaultTea.waterAmount}
            </p>
            <p>Additional Instructions: {defaultTea.addInst} </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeaHome;
