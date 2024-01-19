import { useParams } from "react-router";
import Hero from "./category-components/Hero";
import ProductsGrid from "./category-components/ProductsGrid";

export default function CategoryLayout() {
  const { id } = useParams();

  return (
    <div className="px-5">
      <Hero />
      <ProductsGrid />
    </div>
  );
}
