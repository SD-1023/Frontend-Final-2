import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Icon from "../../shared-components/Icon";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { useCategoriesContext } from "../../contexts/CategoriesContext";
import ProfileIcon from "../../shared-components/ProfileIcon";
import { useEffect } from "react";

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
  useEffect(() => {
    toggleDrawer(false);
  }, [user]);

  const list = () => (
    <Box
      sx={{
        width: 270,
        paddingTop: "2.7rem",
      }}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <div className="flex px-4 items-center justify-between pb-10 border-b-8 border-color-grey">
        {user ? (
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-between">
              <h1 className="font-medium text-color-typeHighEmphasis">
                Hello, {user.username}
              </h1>
              <ProfileIcon />
            </div>
            <Link
              to={"/cart"}
              className="flex mt-3 items-center justify-between w-full"
            >
              <h1 className=" text-sm text-color-typeHighEmphasis">My Cart</h1>
              <div className="w-[2.64rem] text-center">
                <Icon className={"w-5"} name={"bag"} />
              </div>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col w-full">
            <Link
              onClick={toggleDrawer(false)}
              to={"/signin"}
              className="w-full mb-2 text-center bg-color-primary py-1 text-color-bright rounded-lg"
            >
              Sign in
            </Link>
            <Link
              onClick={toggleDrawer(false)}
              to={"/signup"}
              className="w-full text-center border border-color-primary py-1 text-color-primary rounded-lg"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
      <div className="pl-4 text-sm mt-3">
        <span className="mt-3 font-medium text-color-typeLowEmphasis">
          Top Categories
        </span>
        {categories?.map((categorie) => (
          <Link
            onClick={toggleDrawer(false)}
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
