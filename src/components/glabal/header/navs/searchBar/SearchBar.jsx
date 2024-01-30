import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      sm: 640,
      md: 768,
      lg: 1024,
    },
  },
});

const StyledSearchIcon = styled(SearchIcon)(() => ({
  alignSelf: "center",
  left: "0.2ch",
  position: "absolute",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(0.5, 0, 0.5, 0),
    paddingLeft: `calc(.2em + ${theme.spacing(3)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.down("sm")]: {
      width: "0ch",
      "&:focus": {
        width: "8rem",
      },
    },
    [theme.breakpoints.up("sm")]: {
      width: "12rem",
      "&:focus": {
        width: "12rem",
      },
    },
    [theme.breakpoints.up("md")]: {
      width: "14rem",
      "&:focus": {
        width: "14rem",
      },
    },
  },
}));

export default function SearchBar({ searchTerm, setSearchTerm, handleChange }) {
  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
    }
  };
  return (
    <div className="relative flex mr-2 p-1 rounded-lg sm:bg-color-grey">
      <StyledSearchIcon className="text-color-primary" />
      <StyledInputBase
        theme={theme}
        placeholder="Search for products or brands....."
        inputProps={{ "aria-label": "search" }}
        sx={{
          fontWeight: 500,
          fontSize: "0.875rem",
        }}
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={(e) => {
          handleEnterPress(e);
        }}
      />
    </div>
  );
}
