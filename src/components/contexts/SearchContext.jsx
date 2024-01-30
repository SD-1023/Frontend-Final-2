import { useState } from "react";
import { createContext, useContext } from "react";
import useDebounce from "../hooks/useDebounce";
import useApi from "../hooks/useApi";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const SearchProvider = createContext({});
export default function SearchContext({ children }) {
  const { data, get } = useApi();
  const [products, setProducts] = useState([]);
  const [productsCount, setProductsCount] = useState(0);
  const [productsPage, setProductsPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const onSuggestionClick = () => {
    setSuggestions([]);
    setSearchTerm("");
  };

  useEffect(() => {
    if (data?.products) {
      setSuggestions(data.products);
      setProducts(data.products);
    }
  }, [data]);

  useEffect(() => {
    get(`/products?search=${searchTerm}&page=${1}`);
  }, [get, searchTerm]);

  useEffect(() => {
    get(`/products?search=${searchTerm}&page=${productsPage}`);
  }, [get, productsPage, searchTerm]);

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      setSuggestions([]);
      setSearchTerm("");
      setProductsCount(data.count);
      navigate("/search");
    }
  };

  const handlePageChange = (event, value) => {
    setProductsPage(value);
  };

  return (
    <SearchProvider.Provider
      value={{
        suggestions: suggestions,
        onSuggestionClick: onSuggestionClick,
        handleEnterPress: handleEnterPress,
        searchTerm: searchTerm,
        setSuggestions: setSuggestions,
        products: products,
        productsCount: productsCount,
        handlePageChange: handlePageChange,
        setSearchTerm: setSearchTerm,
      }}
    >
      {children}
    </SearchProvider.Provider>
  );
}

export const useSearch = () => useContext(SearchProvider);
