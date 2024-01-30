import { useCategoriesContext } from "../../contexts/CategoriesContext";
import DesktopNavbar from "./navs/DesktopNavbar";
import MobileNavbar from "./navs/MobileNavbar";
import useDebounce from "../../hooks/useDebounce";
import useApi from "../../hooks/useApi";
import { useState } from "react";

export default function Header() {
  const { categories } = useCategoriesContext();
  const [searchTerm, setSearchTerm] = useState("");
  const { data, get } = useApi();

  const handleSearch = useDebounce((term) => {
    get(`/products?search=${term}`);
  }, 500);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    handleSearch(value);
  };
  return (
    <div className="p-4 lg:p-5">
      <div className="flex justify-between lg:hidden">
        <MobileNavbar
          handleChange={handleChange}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>
      <div className="hidden lg:flex lg:items-center lg:justify-between">
        <DesktopNavbar
          categories={categories}
          handleChange={handleChange}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>
    </div>
  );
}
