import { useEffect, useState } from "react";
import { useAuth } from "../../../../contexts/AuthContext";
import { Button, Menu, MenuItem } from "@mui/material";
import Icon from "../../../../shared-components/Icon";
import { Link } from "react-router-dom";
import { useWishlistContext } from "../../../../contexts/WishlistContext";

export default function WishList() {
  const { user } = useAuth();
  const { wishListProducts } = useWishlistContext();
  const [products, setProducts] = useState([]);
  const [anchorE2, setAnchorE2] = useState(null);
  const open2 = Boolean(anchorE2);

  console.log("wishListProducts", wishListProducts);
  const handleClose = () => {
    setAnchorE2(null);
  };

  useEffect(() => {
    setProducts(wishListProducts);
  }, [wishListProducts]);
  useEffect(() => {
    setProducts(wishListProducts);
  }, []);

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open2 ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open2 ? "true" : undefined}
        onClick={(e) => {
          setAnchorE2(e.currentTarget);
        }}
      >
        <Icon name={"wishlist"} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorE2}
        open={open2}
        onClose={(e) => {
          setAnchorE2(null);
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <ul className="flex flex-col">
          {user ? (
            products?.map(({ product }) => (
              <MenuItem
                onClick={() => {
                  handleClose();
                }}
              >
                <li className="bg-color-accent w-full hover:cursor-pointer shadow-md border-b last:border-b-0 border-color-lightText hover:bg-color-grey">
                  <Link to={`/product/${product.id}`}>
                    <div className="flex items-center p-3">
                      <img
                        className="w-[3.5rem] max-h-[3.3rem] rounded-md mr-2"
                        src={product.image_secure_url}
                        alt=""
                      />
                      <div className="flex flex-col text-color-typeHighEmphasis">
                        <span className="text-sm">{product.name}</span>
                        <span className="text-xs">{product.category}</span>
                      </div>
                    </div>
                  </Link>
                </li>
              </MenuItem>
            ))
          ) : (
            <div>
              <MenuItem onClick={handleClose}>
                <Link to={"/signin"}>Sign in</Link>{" "}
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to={"/signup"}>Sign Up</Link>{" "}
              </MenuItem>
            </div>
          )}{" "}
        </ul>
      </Menu>
    </div>
  );
}
