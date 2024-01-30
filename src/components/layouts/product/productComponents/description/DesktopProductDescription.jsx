import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useEffect } from "react";
import useApi from "../../../../hooks/useApi";
import ProductCard from "../../../../shared-components/productsGrid/ProductCard";

const lorem =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident atque et aut quibusdam. Iste ratione impedit libero soluta laboriosam molestiae eligendi ullam. Doloremque omnis consequatur labore ipsam saepe, adipisci eveniet nemo architecto, amet magnam aperiam assumenda officiis animi. Nostrum, unde. Sequi doloremque consequuntur quibusdam molestiae iusto possimus consequatur cumque in?";
export default function DesktopProductDescription({ description }) {
  const [products, setProducts] = useState(0);
  const [value, setValue] = useState(0);
  const { get, data } = useApi();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    get("/products");
  }, [get]);

  useEffect(() => {
    if (data?.products) {
      setProducts(data.products);
    }
  }, [data]);

  const renderProducts = (products) => {
    return (
      <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4">
        {products.slice(0, 4).map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    );
  };

  return (
    <div className="hidden sm:block p-4 mb-4">
      <Box sx={{ width: "100%" }}>
        <Tabs
          onChange={handleChange}
          value={value}
          aria-label="Tabs where selection follows focus"
          selectionFollowsFocus
        >
          <Tab
            sx={{ fontFamily: "Inter", textTransform: "none" }}
            label="Product Description"
          />
          <Tab
            sx={{ fontFamily: "Inter", textTransform: "none" }}
            label="Related Products"
          />
          <Tab
            sx={{ fontFamily: "Inter", textTransform: "none" }}
            label="Ratings and Reviews"
          />
        </Tabs>
      </Box>
      <div className="mt-6 text-base font-medium text-color-typeLowEmphasis">
        {value === 0
          ? description
          : value === 1
          ? renderProducts(products)
          : "lorem2 " + lorem}
      </div>
    </div>
  );
}
