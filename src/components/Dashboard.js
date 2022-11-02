import { Button, Divider } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Posts } from "../features/post/posts";
import HeadStepper from "./HeadStepper";

export default function Dashboard() {
  return (
    <section className="dashboard">
      <HeadStepper title={"Dashboard"} />

      <Posts />
    </section>
  );
}
