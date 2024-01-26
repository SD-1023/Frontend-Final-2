import { useParams } from "react-router";
import Hero from "./category-components/Hero";
import ProductsGrid from "../../shared-components/productsGrid/ProductsGrid";
import useApi from "../../hooks/useApi";
import { useEffect, useState } from "react";
export default function CategoryLayout() {
  const [categoryData, setCategoryData] = useState({});
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const { get, data } = useApi();

  useEffect(() => {
    get(`/categories/${id}`);
  }, [get, id]);
  useEffect(() => {
    setCategoryData(data.category);
    setProducts(data?.category?.products);
  }, [data]);

  return (
    <div className="px-5">
      <Hero />
      {products && (
        <ProductsGrid products={products} title={categoryData.name} />
      )}
    </div>
  );
}
