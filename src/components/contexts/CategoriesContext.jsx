import { createContext, useContext } from "react";
import useApi from "../hooks/useApi";
import { useState, useEffect } from "react";
const CategoriesProvider = createContext({});

export default function CategoriesContext({ children }) {
  const { data, get } = useApi();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    get("/categories");
    setCategories(data.categories);
  }, [data, get]);

  return (
    <CategoriesProvider.Provider value={{ categories }}>
      {children}
    </CategoriesProvider.Provider>
  );
}
export const useCategoriesContext = () => {
  return useContext(CategoriesProvider);
};
