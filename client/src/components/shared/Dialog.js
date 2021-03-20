import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Grid from "@material-ui/core/Grid";
import { Field } from "redux-form";
import "../profile/profile.css";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import VisibilityIcon from "@material-ui/icons/Visibility";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ user }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <VisibilityIcon onClick={handleClickOpen} />
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
          style={{
            width: "100px",
          }}
        >
          <CloseIcon />
        </IconButton>
        <Grid
          container
          className="profilContainer"
          justify="center"
          alignItems="center"
          style={{
            background: "rgb(65, 64, 65)",
            background:
              "linear-gradient(143deg, rgba(65, 64, 65, 1) 0%, rgba(30, 29, 32, 1) 69%)",
          }}
        >
          <Grid item xs={7} container className="profileContainer">
            <Grid
              item
              xs={12}
              lg={4}
              className="profileImageContainer"
              container
              justify="center"
              alignItems="center"
            >
              <Grid
                item
                sm={10}
                className="profileUserImage"
              >
                <img
                  src={user.images[0].path}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                />
              </Grid>
              <>
                <Grid item sm={10} className="profileFullName">
                  <h1>{user.user.first_name + " " + user.user.last_name}</h1>
                  <h3>{user.user.username}</h3>
                  <h5>
                    <i className="fas fa-envelope"></i>
                    {user.user.email}
                  </h5>
                </Grid>
              </>
              <Grid item sm={10}></Grid>
            </Grid>

            <Grid
              item
              container
              xs={12}
              lg={8}
              // className="profileInputContainer"
              justify="center"
              alignItems="center"
              spacing={2}
              style={{ padding: "5%" }}
            >
              {user.images.map((img, i) => (
                <Grid item key={i} sm={4}>
                  <img
                    src={img.path}
                    style={{ height: "100%", width: "100%" }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}
