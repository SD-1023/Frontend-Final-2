import Card from "./Card";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function ProductsGrid({ title = null, products }) {
  return (
    <div className="pt-4">
      {/* <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {}
      </Breadcrumbs> */}
      {title && (
        <h1 className="mb-3 text-xl sm:text-2xl md:text-3xl lg:text-[2.125rem] font-semibold leading-[1.625rem] sm:leading-8 md:leading-10 lg:leading-[3rem] text-color-primary">
          {title}
        </h1>
      )}
      <span className="text-sm font-semibold text-color-typeLowEmphasis leading-4 sm:hidden">
        {products.length} of products
      </span>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1.38rem] mt-1">
        {products.map((product) => (
          <Card
            key={product.id}
            className={"mr-4 w-full"}
            img={"bag1.png"}
            brand={product.name}
            color={product.category}
            price={product.finalPrice}
            oldPrice={product.price}
            salePersent={product.offer}
          />
        ))}
      </div>
    </div>
  );
}
