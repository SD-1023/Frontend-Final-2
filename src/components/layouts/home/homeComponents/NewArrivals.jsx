import useApi from "../../../hooks/useApi";
import Card from "../../../shared-components/Card";
import Carousel from "react-elastic-carousel";
import { useEffect, useState } from "react";
export default function NewArrivals() {
  const [products, setProducts] = useState([]);
  const { get, data } = useApi();

  useEffect(() => {
    get("/products/newestProducts");
    setProducts(data?.data?.latestProducts);
  }, [data, get]);

  let breakPoints = [
    { width: 640, itemsToShow: 2.3, enableMouseSwipe: true },
    { width: 768, itemsToShow: 3.3, pagination: true, enableMouseSwipe: false },
    { width: 1024, itemsToShow: 4, pagination: true, enableMouseSwipe: false },
  ];

  return (
    <div className="pl-4 my-6 md:pt-[1.81rem]">
      <h1 className="pb-3 md:pb-[1.48rem] font-semibold text-sm sm:text-[1.325rem] md:text-[2.125rem]	md:leading-[2.125rem]">
        New Arrivals
      </h1>

      {products && (
        <Carousel
          showArrows={false}
          enableTilt={false}
          itemsToShow={4}
          pagination={false}
          breakPoints={breakPoints}
        >
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </Carousel>
      )}
    </div>
  );
}
