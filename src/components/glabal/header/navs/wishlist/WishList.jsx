import React, { useEffect, useState } from "react";
import useApi from "../../../../hooks/useApi";
import { useAuth } from "../../../../contexts/AuthContext";
import { Button, Menu, MenuItem } from "@mui/material";
import Icon from "../../../../shared-components/Icon";
import { Link } from "react-router-dom";

export default function WishList() {
  const [wish, SetWish] = useState([]);
  const { get, data } = useApi();
  const { user } = useAuth();
  const [anchorE2, setAnchorE2] = useState(null);
  const open2 = Boolean(anchorE2);



   useEffect(()=>{
    if(user){
        get(`/wishlist/${user.userId}`,user.sessionId);
    }
   
   },[])

   useEffect(()=>{
   
    if (data?.message === "success") {
        SetWish(data.wishlist)


    }
  }, []);

  useEffect(() => {
    if (data?.message === "success") {
      SetWish(data);
    }
  }, [data]);

  const handleClose = () => {
    setAnchorE2(null);
  };

  return (

     <div>
          <Button
            id="basic-button"
            aria-controls={open2 ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open2 ? "true" : undefined}
            onClick={(e)=>{setAnchorE2(e.currentTarget)}}
          >
            <Icon name={"wishlist"} /> 
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorE2}
            open={open2}
            onClose={(e)=>{setAnchorE2(null)}}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {user ? (
              <MenuItem
                onClick={() => {
               
                  handleClose();
                }}
              >
                 {wish?.map((wishItem)=>(
          
                      <li
             
              className="bg-color-accent hover:cursor-pointer shadow-md border-b last:border-b-0 border-color-lightText hover:bg-color-grey"
            >
              <Link
                to={``}
              >
                <div className="flex items-center p-3">
                  <img
                    className="w-[3.5rem] max-h-[3.3rem] rounded-md mr-2"
                    src={wishItem.image_secure_url}
                    alt=""
                  />
                  <div className="flex flex-col text-color-typeHighEmphasis">
                    <span className="text-sm">{wishItem.name}</span>
                    <span className="text-xs">{wishItem.category}</span>
                  </div>
                </div>
              </Link>
            </li>

                   ))}
              </MenuItem>
            ) : (
              <div>
                <MenuItem onClick={handleClose}>
                  <Link to={"/signin"}>Sign in</Link>{" "}
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to={"/signup"}>Sign Up</Link>{" "}
                </MenuItem>
              </div>
            )}
          </Menu>
        </div>
  )

}
