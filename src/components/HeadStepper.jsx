import { Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function HeadStepper({ title, children }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="head">
        {(title && <h2>{title}</h2>) || children}
        <Button
          variant="outlined"
          onClick={() => {
            navigate(-1);
          }}
        >
          Go Back
        </Button>
      </div>
      <Divider className="mb1" />
    </>
  );
}
