import Icon from "../../../shared-components/Icon";
import { Link } from "react-router-dom";
import SearchContainer from "./searchBar/SearchContainer";
import WishList from "./wishlist/WishList";
import ProfileIcon from "../../../shared-components/ProfileIcon";
export default function DesktopNavbar({ categories }) {


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
                to={`/category/${categorie.name}`}
                className="mr-5 text-sm font-medium text-color-typeHighEmphasis"
              >
                {categorie.name}
              </Link>
            ))}
        </ul>
      </div>
      <div className="flex items-center">
        <div className="mr-6 relative">
          <SearchContainer />
        </div>

  
        <WishList />

        <ProfileIcon />

        <Link to={"/cart"}>
          <Icon name={"bag"} />
        </Link>
      </div>
    </>
  );
}
