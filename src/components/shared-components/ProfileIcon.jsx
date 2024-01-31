import React from "react";
import { useAuth } from "../contexts/AuthContext";
import useApi from "../hooks/useApi";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import Icon from "./Icon";
import { Link } from "react-router-dom";

export default function ProfileIcon({ iconName = "profile" }) {
  const { user, signOut } = useAuth();
  const { put, data } = useApi();

  const handleSignOut = () => {
    put(`/users/signout`, user.sessionId);
  };
  useEffect(() => {
    if (data?.message === "success") {
      console.log(data);
      signOut(() => {});
    }
  }, [data, signOut]);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        sx={{ width: "fit-content", padding: "0px" }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Icon name={iconName} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {user ? (
          <MenuItem
            onClick={() => {
              handleSignOut();
              handleClose();
            }}
          >
            Sign Out
          </MenuItem>
        ) : (
          <div>
            <MenuItem onClick={handleClose}>
              <Link to={"/signin"}>Sign in</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to={"/signup"}>Sign Up</Link>{" "}
            </MenuItem>
          </div>
        )}
      </Menu>
    </div>
  );
}
