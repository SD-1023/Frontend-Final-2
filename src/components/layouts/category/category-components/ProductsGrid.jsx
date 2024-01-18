import Card from "../../../shared-components/Card";

export default function ProductsGrid() {
  const data = Array.apply(null, Array(9));
  return (
    <div>
      <h1 className="mb-3 text-xl font-semibold leading-[1.625rem] text-color-primary">
        Category Title
      </h1>
      <span className="text-sm font-semibold text-color-typeLowEmphasis leading-4 sm:hidden">
        # of prods
      </span>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1.38rem] mt-1">
        {data.map(() => (
          <Card
            className={"mr-4 w-full"}
            img={"bag1.png"}
            brand={"Grande"}
            color={"Blossom Pouch"}
            price={"$39.49"}
          />
        ))}
      </div>
    </div>
  );
}
