import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home flex fd-col">
      <h1>Hii 👋,</h1>
      <div className="flex">
        <p>Go to Dashboard 👉 </p>&nbsp;
        <Link to={"dashboard"}>
          <Button variant="contained" data-testid="dashboard">
            Dahsboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
