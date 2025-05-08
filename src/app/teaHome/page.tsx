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


// Separate component for tea details
const TeaDetails = ({ tea }: { tea: Tea }) => (
  <div className="space-y-2">
    <p>Tea ID: {tea.id}</p>
    <p>Tea Name: {tea.name}</p>
    <p>Original Name: {tea.nameOrig}</p>
    <p>Tea Type: {tea.type}</p>
    <p>
      Tea/Water Amount: {tea.teaAmount} / {tea.waterAmount}
    </p>
    <p>Additional Instructions: {tea.addInst}</p>
  </div>
);

// Component that uses searchParams
const TeaContent = () => {
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


  return <TeaDetails tea={selectedTea} />;
};

const TeaHome = () => {
  return (
    <div className="p-6 space-y-6">
      <Button>
        <a href="/teaSelect">Select a Tea</a>
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
