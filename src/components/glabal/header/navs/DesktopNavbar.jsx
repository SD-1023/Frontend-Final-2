import Icon from "../../../shared-components/Icon";
import { Link, useNavigate } from "react-router-dom";
import SearchContainer from "./searchBar/SearchContainer";
import { useAuth } from "../../../contexts/AuthContext";

export default function DesktopNavbar({ categories }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const handleProfileClick = () => {
    if (user) {
      alert(`You already signed in ${user.username}`);
    } else {
      navigate("/signin");
    }
  };
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
        <Icon className="mr-5" name={"wishlist"} />

        <div className=" hover:cursor-pointer" onClick={handleProfileClick}>
          <Icon className="mr-5" name={"profile"} />
        </div>
        <Link to={"/cart"}>
          <Icon name={"bag"} />
        </Link>
      </div>
    </>
  );
}
