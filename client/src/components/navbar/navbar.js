import React, { useState } from "react";
import "./navbar.css";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import NotificationImage from "./img/bell.svg";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Divider from "@material-ui/core/Divider";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ChatIcon from "@material-ui/icons/Chat";
import WhatshotIcon from '@material-ui/icons/Whatshot';
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [anchorEl, setanchorEl] = useState(null);
  const [anchorEl1, setanchorEl1] = useState(null);
  const { user, handleLogout } = props;
  const handleOpenMenu = (e) => {
    setanchorEl(e.currentTarget);
  };
  const handleCloseMenu = () => {
    setanchorEl(null);
  };

  const handleOpenMenu1 = (e) => {
    setanchorEl1(e.currentTarget);
  };

  const handleCloseMenu1 = () => {
    setanchorEl1(null);
  };

  return (
    <>
        <Grid container item sm={12} className="navbar">
          <Link to="/browsing" style={{ textDecoration: "none" }}>
            <Grid
              item
              container
              sm={12}
              xs={2}
              className="logoContainer"
              direction="column"
              justify="center"
              alignItems="center"
            >
              <h1 className="logo">Matcha</h1>
            </Grid>
          </Link>

          <Grid item container sm={2} xs={1} className="UserContainer" >
            <Grid
              item
              container
              direction="column"
              justify="center"
              alignItems="center"
              sm={1}
            >
              {user && (
                <Button
                  className="menuButton"
                  onClick={handleOpenMenu1}
                  aria-controls="menu"
                >
              <img
                src={NotificationImage}
                alt="notification"
                className="notifs"
              /></Button>)}
            </Grid>
            <Grid
              item
              container
              direction="column"
              justify="center"
              alignItems="center"
              sm={5}
              xs={1}
            >
              {user && (
                <Button
                  className="menuButton"
                  onClick={handleOpenMenu}
                  aria-controls="menu"
                >
                  <h3 className="username">{user.username}</h3>
                  <Avatar
                    alt="User Image"
                    src="https://images.pexels.com/photos/6652933/pexels-photo-6652933.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  />
                </Button>
              )}
            </Grid>
          </Grid>
        </Grid>
      <Menu
        id="menu"
        className="navMenu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <MenuItem className="menuItem">
          <AccountCircleIcon />
          <Link to="/profile" style={{ textDecoration: "none" }}>
            My Profile
          </Link>
        </MenuItem>
        <Divider className="divider" light />
        <MenuItem className="menuItem">
          <ChatIcon />
          <Link to="/chat" style={{ textDecoration: "none" }}>
            Chat
          </Link>
        </MenuItem>
        <Divider className="divider" light />
        <MenuItem className="menuItem">
          <WhatshotIcon />
          <Link to="/profile" style={{ textDecoration: "none" }}>
            Activity
          </Link>
        </MenuItem>
        <Divider className="divider" light />
        <MenuItem className="menuItem">
          <ExitToAppIcon />
          {user && (
            <Button color="primary" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </MenuItem>
      </Menu>

      <Menu
        id="menu"
        className="navMenu"
        anchorEl={anchorEl1}
        open={Boolean(anchorEl1)}
        onClose={handleCloseMenu1}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <MenuItem className="menuItem">
          <Link to="/profile" style={{ textDecoration: "none" }}>
            You have a message
          </Link>
        </MenuItem>
        <Divider className="divider" light />
        <MenuItem className="menuItem">
          <Link to="/chat" style={{ textDecoration: "none" }}>
            someone likes you
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
}
