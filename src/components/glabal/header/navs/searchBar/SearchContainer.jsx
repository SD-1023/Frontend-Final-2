import SearchBar from "./SearchBar";
import useDebounce from "../../../../hooks/useDebounce";
import useApi from "../../../../hooks/useApi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function SearchContainer() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, get } = useApi();
  const navigate = useNavigate();

  const handleSearch = useDebounce((term) => {
    get(`/products?search=${term}`);
  }, 500);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    handleSearch(value);
  };
  useEffect(() => {
    if (data?.products) {
      navigate(`/search/${searchTerm}`, { state: { products: data.products } });
    }
  }, [data, navigate, searchTerm]);

  return (
    <>
      <SearchBar
        handleChange={handleChange}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    </>
  );
}
