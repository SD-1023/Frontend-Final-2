import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useSearch } from "../../../../contexts/SearchContext";
import { useState } from "react";

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

export default function SearchBar() {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { suggestions, onSuggestionClick, setSearchTerm, searchTerm } =
    useSearch();

  return (
    <div
      // onBlur={() => {
      //   setShowSuggestions(false);
      //   setTimeout(() => {
      //     setSuggestions([]);
      //   }, 300);
      // }}
      className="relative flex mr-2 p-1 rounded-lg sm:bg-color-grey"
    >
      <StyledSearchIcon className="text-color-primary" />
      <StyledInputBase
        theme={theme}
        placeholder="Search for products or brands....."
        inputProps={{ "aria-label": "search" }}
        sx={{
          fontWeight: 500,
          fontSize: "0.875rem",
        }}
        onFocus={() => {
          setShowSuggestions(true);
        }}
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <ul className="absolute z-10 w-full right-0 top-10 rounded-lg overflow-hidden">
        {showSuggestions &&
          searchTerm !== "" &&
          suggestions?.slice(0, 4).map((suggestion) => (
            <li
              key={suggestion.id}
              className="bg-color-accent hover:cursor-pointer shadow-md border-b last:border-b-0 border-color-lightText hover:bg-color-grey"
            >
              <Link
                to={`/product/${suggestion.id}`}
                onClick={() => onSuggestionClick(suggestion.id)}
                key={suggestion.id}
                className=""
              >
                <div className="flex items-center p-3">
                  <img
                    className="w-[3.5rem] max-h-[3.3rem] rounded-md mr-2"
                    src={suggestion.image_secure_url}
                    alt=""
                  />
                  <div className="flex flex-col text-color-typeHighEmphasis">
                    <span className="text-sm">{suggestion.name}</span>
                    <span className="text-xs">{suggestion.category}</span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
