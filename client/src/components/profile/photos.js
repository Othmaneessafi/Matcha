import React from "react";
import Grid from "@material-ui/core/Grid";
import AddBtn from "./img/plus.svg";

export default function photos() {
  return (
    <Grid container spacing={2}>
      <Grid item container sm={4} className="PhotosContainer">
        <Grid
          item
          container
          sm={12}
          className="userImage"
          justify="flex-end"
          alignItems="flex-end"
        >
          <img src={AddBtn} className="addBtn" alt="userImage" />
        </Grid>
      </Grid>
      <Grid item container sm={4} className="PhotosContainer">
        <Grid
          item
          container
          sm={12}
          className="userImage"
           justify="flex-end"
          alignItems="flex-end"
        >
          <img src={AddBtn} className="addBtn" alt="userImage" />
        </Grid>
      </Grid>
      <Grid item container sm={4} className="PhotosContainer">
        <Grid
          item
          container
          sm={12}
          className="userImage"
           justify="flex-end"
          alignItems="flex-end"
        >
          <img src={AddBtn} className="addBtn" alt="userImage" />
        </Grid>
      </Grid>
      <Grid item container sm={4} className="PhotosContainer">
        <Grid
          item
          container
          sm={12}
          className="userImage"
           justify="flex-end"
          alignItems="flex-end"
        >
          <img src={AddBtn} className="addBtn" alt="userImage" />
        </Grid>
      </Grid>
      <Grid item container sm={4} className="PhotosContainer">
        <Grid
          item
          container
          sm={12}
          className="userImage"
           justify="flex-end"
          alignItems="flex-end"
        >
          <img src={AddBtn} className="addBtn" alt="userImage" />
        </Grid>
      </Grid>
    </Grid>
  );
}
