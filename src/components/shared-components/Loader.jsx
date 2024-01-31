import { createTheme } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loader() {
  const theme = createTheme({
    palette: {
      our: { primary: "#1B4B66" },
    },
  });

  return (
    <div>
      <Box
        theme={theme}
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress sx={{ color: "our.primary" }} />
      </Box>
    </div>
  );
}
