import Icon from "../../../shared-components/Icon";
import { Link, useNavigate } from "react-router-dom";
import SearchContainer from "./searchBar/SearchContainer";
import { useAuth } from "../../../contexts/AuthContext";
import { useEffect, useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import useApi from "../../../hooks/useApi";

export default function DesktopNavbar({ categories }) {
  const { user,signOut } = useAuth();
  const navigate = useNavigate();
  const {put,data}= useApi();

  const  handleSignOut=()=>{
    put(`/users/signout`,user.sessionId);
    console.log(user.sessionId)
   }
  useEffect(() => {
    if(data?.message === 'success'){
      signOut(()=>{});
    }
  }, [data]);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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

        <div>
        <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      <Icon className="mr-5" name={"profile"} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {user? (
          <MenuItem onClick={()=>{handleSignOut(); handleClose()}}>Sign Out </MenuItem>
        ):<div>
        <MenuItem onClick={handleClose}><Link to={'/signin'}>Sign in</Link> </MenuItem>
        <MenuItem onClick={handleClose}><Link to={'/signup'}>Sign Up</Link> </MenuItem>
        </div>}
        
        
      </Menu>
        </div>
      <Link to={'/cart'} >
        <Icon name={"bag"} />
        </Link>
      </div>
    </>
  );
}
