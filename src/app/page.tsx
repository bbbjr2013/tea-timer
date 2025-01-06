import Link from "next/link";
import { Button } from "@mui/material/";
import TeaHome from "./teaHome/page";

export default function Home() {
  return (
    <main>
      <h1>Main Page</h1>
      <div>
        <Button variant="contained" href="/teaSelect">
          Select a Tea
        </Button>
      </div>
      <div>
        <TeaHome />
      </div>
    </main>
  );
}
