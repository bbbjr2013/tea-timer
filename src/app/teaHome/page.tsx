"use client";
import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import teaData from "../../api/teas.json";
import { Button } from "@mui/material";

const TeaContent = () => {
  // const router = useRouter();
  // const { tea } = router.query;

  const defaultTea = teaData[0];

  console.log("Default tea:", defaultTea); // debugger

  const searchParams = useSearchParams();
  const [selectedTeaName, setSelectedTeaName] = useState<string>(
    defaultTea.name || "",
  );

  useEffect(() => {
    const tea = searchParams.get("tea");
    if (tea) {
      setSelectedTeaName(tea);
    } else {
      setSelectedTeaName(defaultTea.name);
    }
  }, [searchParams, defaultTea.name]);

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
            <p>No Selected Tea</p>
          </div>
        )}
      </div>
    </div>
  );
};

const TeaHome = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TeaContent />
    </Suspense>
  );
};

export default TeaHome;
