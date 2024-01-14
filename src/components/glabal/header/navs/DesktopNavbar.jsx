import { useState } from "react";
import Icon from "../../../shared-components/Icon";

export default function DesktopNavbar({ categories }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <>
      <div className="flex items-center">
        <Icon name={"logo"} />
        <ul className="flex ml-8">
          {categories.map((categorie) => (
            <a
              href="/"
              className="mr-5 text-sm font-medium text-color-typeHighEmphasis"
            >
              {categorie}
            </a>
          ))}
        </ul>
      </div>
      <div className="flex items-center">
        <div className="mr-6 relative">
          <input
            className="bg-color-grey text-sm font-medium rounded w-80 h-[2.75rem] border-0 outline-none pl-10"
            placeholder="Search for products or brands....."
            value={searchTerm}
            onChange={handleSearch}
          />
          <Icon
            className="absolute inset-0 left-[0.5rem] top-[0.62rem]"
            name={"dark-search"}
          />
        </div>
        <Icon className="mr-5" name={"wishlist"} />
        <Icon className="mr-5" name={"profile"} />
        <Icon name={"bag"} />
      </div>
    </>
  );
}
