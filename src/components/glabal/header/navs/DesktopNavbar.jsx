import Icon from "../../../shared-components/Icon";
import { Link } from "react-router-dom";

export default function DesktopNavbar({
  categories,
  handleChange,
  searchTerm,
}) {
  return (
    <>
      <div className="flex items-center">
        <Link to={"/"}>
          <Icon name={"logo"} />
        </Link>
        <ul className="flex ml-8">
          {categories &&
            categories.map((categorie) => (
              <Link
                key={categorie.id}
                to={`/category/${categorie.id}`}
                className="mr-5 text-sm font-medium text-color-typeHighEmphasis"
              >
                {categorie.name}
              </Link>
            ))}
        </ul>
      </div>
      <div className="flex items-center">
        <div className="mr-6 relative">
          <input
            className="bg-color-grey text-sm font-medium rounded w-80 h-[2.75rem] border-0 outline-none pl-10"
            placeholder="Search for products or brands....."
            value={searchTerm}
            onChange={handleChange}
            onSubmit={() => {
              console.log("submitted");
            }}
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
