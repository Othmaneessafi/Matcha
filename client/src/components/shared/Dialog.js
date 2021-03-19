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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open
      </Button>
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
              // alignItems="center"
            >
              <Grid
                item
                sm={10}
                className="profileUserImage"
                style={{
                  backgroundImage: `url()`,
                  backgroundSize: "cover",
                }}
              ></Grid>
              <>
                <Grid item sm={10} className="profileFullName">
                  <h1>Harry kane</h1>
                  <h3>kane1</h3>
                  <h5>
                    <i class="fas fa-envelope"></i> kane@gmail.com
                  </h5>{" "}
                </Grid>
                <Grid item sm={10} style={{ height: "30%" }}></Grid>
              </>
              <Grid item sm={10}></Grid>
            </Grid>

            <Grid
              item
              container
              xs={12}
              lg={8}
              className="profileInputContainer"
              justify="center"
              alignItems="center"
            ></Grid>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}
