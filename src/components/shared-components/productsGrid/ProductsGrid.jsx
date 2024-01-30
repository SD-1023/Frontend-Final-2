import { useLocation } from "react-router";
import ProductCard from "./ProductCard";
import MyBreadcrumbs from "../MyBreadcrumbs";

export default function ProductsGrid({ title = null, products }) {
  let location = useLocation();

  if (!products) {
    products = location.state?.products;
  }

  return (
    <div className="pb-4">
      {/* <MyBreadcrumbs /> */}
      {title && (
        <h1 className="mb-3 text-xl sm:text-2xl md:text-3xl lg:text-[2.125rem] font-semibold leading-[1.625rem] sm:leading-8 md:leading-10 lg:leading-[3rem] text-color-primary">
          {title}
        </h1>
      )}
      <span className="text-sm font-semibold text-color-typeLowEmphasis leading-4 sm:hidden">
        {products?.length !== 0
          ? `${products.length} Products`
          : "No products found!"}
      </span>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[1.5rem] lg:gap-[2.5rem] mt-1">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
