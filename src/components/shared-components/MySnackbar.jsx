import Snackbar from "@mui/material/Snackbar";

export default function MySnackbar({ open, messege, setOpen }) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        onClose={handleClose}
        autoHideDuration={3000}
        message={messege}
        severity="success"
      />
    </div>
  );
}
