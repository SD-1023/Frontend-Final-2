import { useParams } from "react-router";
import Hero from "./category-components/Hero";
import ProductsGrid from "../../shared-components/productsGrid/ProductsGrid";
import useApi from "../../hooks/useApi";
import { useEffect, useState } from "react";
import MyBreadcrumbs from "../../shared-components/MyBreadcrumbs";
export default function CategoryLayout() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const { get, data } = useApi();

  useEffect(() => {
    get(`/products?category=${category}`);
  }, [get, category]);
  useEffect(() => {
    setProducts(data?.products);
  }, [data]);

  const breadcrumbs = [
    {
      page: "Home",
      path: "/",
    },
    {
      page: category,
      path: "#",
    },
  ];

  return (
    <div className="px-5">
      <Hero />
      <MyBreadcrumbs pathnames={breadcrumbs} />
      {products && <ProductsGrid products={products} title={category} />}
    </div>
  );
}
