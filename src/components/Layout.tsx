import { Button } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="">
      <Navbar />
      <div className="layout">
        <Outlet />
      </div>
    </div>
  );
}
