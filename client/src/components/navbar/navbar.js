import React, { useState } from "react";
import "./navbar.css";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import NotificationImage from "./img/bell.svg";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ChatIcon from "@material-ui/icons/Chat";
import HistoryIcon from "@material-ui/icons/History";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Divider from "@material-ui/core/Divider";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default function Navbar(props) {
    const [anchorEl, setanchorEl] = useState(null);
    const {user, handleLogout} = props;
  const handleOpenMenu = (e) => {
    setanchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setanchorEl(null);
  };

  return (
    <>
      <Grid container item sm={12} className="navbarContainer" >
        <Grid item sm={12} className="navbar" container >
          <Grid
            item
            container
            sm={1}
            className="logoContainer"
            direction="column"
            justify="center"
            alignItems="center"
          >
            <h1 className="logo">Matcha</h1>
          </Grid>

          <Grid item sm={3}></Grid>

          <Grid
            item
            container
            sm={3}
            className="searchContainer"
            direction="column"
            justify="center"
            alignItems="center"
          >
            <TextField
              label="Search"
              color="secondary"
              className="search"
              InputProps={{ className: "search" }}
              InputLabelProps={{ className: "search" }}
            />
          </Grid>

          <Grid item sm={3}></Grid>

          <Grid item container sm={2} className="UserContainer" >
            <Grid
              item
              container
              direction="column"
              justify="center"
              alignItems="center"
              sm={2}
            >
              <img
                src={NotificationImage}
                alt="notification"
                className="notifs"
              />
            </Grid>
            <Grid
              item
              container
              direction="column"
              justify="center"
              alignItems="center"
              sm={7}
            >
              { user && <Button
                className="menuButton"
                onClick={handleOpenMenu}
                aria-controls="menu"
              >
                <h3 className="username" >{user.username}</h3>
                <Avatar
                  alt="User Image"
                  src="https://images.pexels.com/photos/6652933/pexels-photo-6652933.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
              </Button>}
            </Grid>
          </Grid>
        </Grid>
        <Grid item container sm={false} className="sidebar" >
          <Grid
            item
            container
            className="sidebarContainer"
            justify="center"
            alignItems="center"
          >
            <Grid item sm={12} className="emptyGrid"></Grid>
            <Grid item container sm={1} ></Grid>
            <Grid
              item
              container
              sm={2}
              className="sideBrowsing"
              direction="column"
              justify="center"
              alignItems="center"
            >
              <FavoriteIcon />
            </Grid>
            <Grid item container sm={1} ></Grid>
            <Grid
              item
              container
              sm={7}
              className="sideBrowsing"
              direction="column"
              justify="center"
              alignItems="center"
            >
              <h2 className="sideNames">Browsing</h2>
            </Grid>
            <Divider className="divider" light />
            <Grid item container sm={1} ></Grid>
            <Grid
              item
              container
              sm={2}
              className="sideBrowsing"
              direction="column"
              justify="center"
              alignItems="center"
            >
              <AccountCircleIcon />
            </Grid>
            <Grid
              item
              container
              sm={8}
              className="sideBrowsing"
              direction="column"
              justify="center"
              alignItems="center"
            >
              <h2 className="sideNames">Profile</h2>
            </Grid>
            <Divider className="divider" light />
            <Grid item container sm={1} ></Grid>
            <Grid
              item
              container
              sm={2}
              className="sideBrowsing"
              direction="column"
              justify="center"
              alignItems="center"
            >
              <HistoryIcon />
            </Grid>
            <Grid
              item
              container
              sm={8}
              className="sideBrowsing"
              direction="column"
              justify="center"
              alignItems="center"
            >
              <h2 className="sideNames">Activity</h2>
            </Grid>
            <Divider className="divider" light />
            <Grid item container sm={1} ></Grid>
            <Grid
              item
              container
              sm={2}
              className="sideBrowsing"
              direction="column"
              justify="center"
              alignItems="center"
            >
              <ChatIcon />
            </Grid>
            <Grid
              item
              container
              sm={8}
              className="sideBrowsing"
              direction="column"
              justify="center"
              alignItems="center"
            >
              <h2 className="sideNames">Friends</h2>
            </Grid>
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
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <MenuItem className="menuItem">
          <AccountCircleIcon />
          My Profile
        </MenuItem>
        <Divider className="divider" light />
        <MenuItem className="menuItem">
          <ExitToAppIcon />
          {user && <Button color="primary" onClick={handleLogout}>Logout</Button>}
        </MenuItem>
      </Menu>
    </>
  );
}
