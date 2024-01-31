import { useState } from "react";
import { createContext, useContext } from "react";
import useApi from "../hooks/useApi";
import { useEffect } from "react";

const SearchProvider = createContext();
export default function SearchContext({ children }) {
  const { data, get } = useApi();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const onSuggestionClick = () => {
    setSuggestions([]);
    setSearchTerm("");
  };

  useEffect(() => {
    if (data) {
      setSuggestions(data.products);
      setProducts(data.products);
    }
  }, [data]);

  useEffect(() => {
    get(`/products?search=${searchTerm}`);
  }, [get, searchTerm]);

  return (
    <SearchProvider.Provider
      value={{
        suggestions: suggestions,
        onSuggestionClick: onSuggestionClick,
        searchTerm: searchTerm,
        setSuggestions: setSuggestions,
        products: products,
        setSearchTerm: setSearchTerm,
      }}
    >
      {children}
    </SearchProvider.Provider>
  );
}

export const useSearch = () => {
  return useContext(SearchProvider);
};
