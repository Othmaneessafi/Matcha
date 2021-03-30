import React, { useState } from "react";
import "./navbar.css";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Divider from "@material-ui/core/Divider";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ChatIcon from "@material-ui/icons/Chat";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((prop) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...prop}
  />
));

const Navbar = (props) => {
  const {
    user,
    unseenNotif,
    handleNotifListOpen,
    handleLogout,
    images,
  } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl1, setanchorEl1] = useState(null);
  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleCloseMenutwo = () => {
    handleLogout();
    setanchorEl1(null);
  };

  return (
    <>
      <Grid container className="navbar">
        <Grid
          item
          container
          lg={2}
          xs={12}
          className="logoContainer"
          direction="column"
          justify="center"
          alignItems="center"

        >
          <Link to="/browsing" style={{ textDecoration: "none" }}>
            <Grid item xs={6} lg={12} >
              <h1 className="logo">Matcha</h1>
            </Grid>
          </Link>
        </Grid>
        <Grid item lg={8} ></Grid>
        <Grid item container xs={12} lg={1} className="UserContainer">
          <Grid
            item
            container
            direction="row"
            justify="center"
            alignItems="center"
            lg={5}
            xs={6}
            
          >
            {user && (
              <Button
                className="menuButton"
                onClick={handleNotifListOpen}
                aria-controls="menu"
              >
                <Badge
                  className="notifs"
                  badgeContent={unseenNotif}
                  color="secondary"
                >
                  <NotificationsIcon />
                </Badge>
              </Button>
            )}
          </Grid>
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems="center"
            lg={5}
            xs={6}
          >
            {user && (
              <Button
                className="menuButton"
                onClick={handleOpenMenu}
                aria-controls="menu"
              >
                <h3 className="username">{user.username}</h3>
                {images.isImages &&
                  images.images.map((img) => {
                    return (
                      <Grid key={img.id}>
                        {img.isProfilePic ? (
                          <Avatar
                            alt="User Image"
                            src={`http://localhost:3001/${img.path}`}
                          />
                        ) : null}
                      </Grid>
                    );
                  })}
              </Button>
            )}
          </Grid>
        </Grid>
        <Grid item lg={1}  ></Grid>
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
          <Link to="/activity" style={{ textDecoration: "none" }}>
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
        onClose={handleCloseMenutwo}
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
};
export default Navbar;
