import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";

import IconButton from "@mui/material/IconButton";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import RedditIcon from "@mui/icons-material/Reddit";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { yellow } from "@mui/material/colors";

export default function AppBar() {
  let userDetails = JSON.parse(localStorage.getItem("userLogIn"));
  const userId = userDetails._id;
  const history = useHistory();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="row">
      <div>
        <a className="brand" href="/HomePage">
          <RedditIcon sx={{ fontSize: 40 }} />
          Amazon
        </a>
      </div>

      <div>
        <a href={`/cart/${userId}`}>
          <ShoppingCartIcon sx={{ fontSize: 20 }} />
          Cart
        </a>

        <React.Fragment>
          <Tooltip title="Account settings">
            <IconButton onClick={handleClick} size="large" sx={{ ml: 2 }}>
              <AccountCircleOutlinedIcon
                sx={{ width: 32, height: 32, color: yellow[600] }}
              ></AccountCircleOutlinedIcon>
            </IconButton>
          </Tooltip>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px gold)",
                bgcolor: "black",
                color: "gold",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  //   left: 26,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "black",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem>
              <Avatar /> Profile
            </MenuItem>
            <MenuItem>
              <Avatar /> My account
            </MenuItem>
            {/* <Divider />
            <MenuItem>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              Log in with another account
            </MenuItem> */}
            <MenuItem>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              My Orders
            </MenuItem>
            <MenuItem
              onClick={() => {
                history.push("/");
              }}
            >
              <ListItemIcon>
                <Logout fontSize="small" sx={{ color: yellow[600] }} />
              </ListItemIcon>
              Log Out
            </MenuItem>
          </Menu>
        </React.Fragment>
      </div>
    </header>
  );
}
