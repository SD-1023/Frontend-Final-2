import { useParams } from "react-router";
import Hero from "./category-components/Hero";
import ProductsGrid from "../../shared-components/productsGrid/ProductsGrid";
import useApi from "../../hooks/useApi";
import { useEffect, useState } from "react";
import MyBreadcrumbs from "../../shared-components/MyBreadcrumbs";
export default function CategoryLayout() {
  const [products, setProducts] = useState([]);
  const [productsPage, setProductsPage] = useState(1);
  const [countOfProducts, setCountOfProducts] = useState(0);
  const { category } = useParams();
  const { get, data } = useApi();

  useEffect(() => {
    get(`/products?category=${category}&page=${productsPage}`);
  }, [category, get, productsPage]);

  useEffect(() => {
    setProducts(data?.products);
    setCountOfProducts(data?.count);
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

  const handlePageChange = (event, value) => {
    console.log(`Selected page: ${value}`);
    setProductsPage(value);
  };

  return (
    <div className="px-5">
      <Hero />
      <div className="pt-4">
        <MyBreadcrumbs pathnames={breadcrumbs} />
        {products && (
          <ProductsGrid
            products={products}
            count={countOfProducts}
            title={category}
            handlePageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
}
