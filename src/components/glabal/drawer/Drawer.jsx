import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Icon from "../../shared-components/Icon";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { useCategoriesContext } from "../../contexts/CategoriesContext";

export default function Drawer({ state, setState }) {
  const { user } = useAuth();
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };
  const { categories } = useCategoriesContext();

  const list = () => (
    <Box
      sx={{
        width: 270,
        paddingTop: "2.7rem",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div className="flex px-4 items-center justify-between pb-10 border-b-8 border-color-grey">
        {user ? (
          <>
            <h1 className="font-medium text-color-typeHighEmphasis">
              Hello, {user.username}
            </h1>
            <Icon className={"pr-4"} name={"profile"} />
          </>
        ) : (
          <Link className="w-full text-center bg-color-primary py-1 text-color-bright rounded-lg">
            Sign in
          </Link>
        )}
      </div>
      <div className="pl-4 text-sm mt-3">
        <span className="mt-3 font-medium text-color-typeLowEmphasis">
          Top Categories
        </span>
        {categories?.map((categorie) => (
          <Link
            key={categorie.id}
            to={`/category/${categorie.name}`}
            className="flex items-center justify-between my-[1.13rem]"
          >
            <h1 className="text-color-typeHighEmphasis font-semibold">
              {categorie.name}
            </h1>
            <Icon className={"pr-4"} name={"right-arrow"} />
          </Link>
        ))}
      </div>
    </Box>
  );

  return (
    <div>
      <SwipeableDrawer
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
}
