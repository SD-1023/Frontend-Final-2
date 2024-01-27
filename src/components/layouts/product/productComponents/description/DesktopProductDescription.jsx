import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";

const lorem =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident atque et aut quibusdam. Iste ratione impedit libero soluta laboriosam molestiae eligendi ullam. Doloremque omnis consequatur labore ipsam saepe, adipisci eveniet nemo architecto, amet magnam aperiam assumenda officiis animi. Nostrum, unde. Sequi doloremque consequuntur quibusdam molestiae iusto possimus consequatur cumque in?";
export default function DesktopProductDescription({ description }) {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="hidden sm:block p-4 mb-[7rem]">
      <Box sx={{ width: "100%" }}>
        <Tabs
          onChange={handleChange}
          value={value}
          aria-label="Tabs where selection follows focus"
          selectionFollowsFocus
        >
          <Tab label="Product Description" />
          <Tab label="Related Products" />
          <Tab label="Ratings and Reviews" />
        </Tabs>
      </Box>
      <div className="mt-6 text-base font-medium pr-28 text-color-typeLowEmphasis">
        {value === 0
          ? description
          : value === 1
          ? "lorem1 " + lorem
          : "lorem2 " + lorem}
      </div>
    </div>
  );
}
