import { useRouteError, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
export default function Error404() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.error(error);
  setTimeout(() => {
    navigate("/");
  }, 3000);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
      </div>
    </Box>
  );
}
