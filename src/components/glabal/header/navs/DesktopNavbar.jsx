import { useState } from "react";

export default function DesktopNavbar({ categories }) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="flex items-center">
        <img src="/assets/icons/logo.svg" alt="" />
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
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <img
            className="absolute inset-0 left-[0.5rem] top-[0.62rem]"
            src="/assets/icons/dark-search.svg"
            alt=""
          />
        </div>
        <img className="mr-5" src="/assets/icons/wishlist.svg" alt="" />
        <img className="mr-5" src="/assets/icons/profile.svg" alt="" />
        <img src="/assets/icons/bag.svg" alt="" />
      </div>
    </>
  );
}
