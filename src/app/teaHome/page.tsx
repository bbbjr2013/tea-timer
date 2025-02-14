"use client";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import teaData from "../../api/teas.json";
import { Button } from "@mui/material";

type Tea = {
  id: string;
  name: string;
  nameOrig: string;
  type: string;
  teaAmount: string;
  waterAmount: string;
  addInst: string;
};

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
  const teaName = searchParams.get("tea");
  const selectedTea = teaData.find((t) => t.name === teaName) || teaData[0];

  return <TeaDetails tea={selectedTea} />;
};

const TeaHome = () => {
  return (
    <div className="p-6 space-y-6">
      <Button>
        <a href="/teaSelect">Select a Tea</a>
      </Button>

      <Suspense fallback={<div>Loading...</div>}>
        <TeaContent />
      </Suspense>
    </div>
  );
};

export default TeaHome;
