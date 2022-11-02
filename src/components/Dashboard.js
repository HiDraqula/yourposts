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
