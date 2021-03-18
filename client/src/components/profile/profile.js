import React, { useState, useEffect } from "react";
import "./profile.css";
import Grid from "@material-ui/core/Grid";
// import { Field } from "redux-form";
// import Button from "@material-ui/core/Button";
// import profileImage from "./img/love.svg";
// import { Link } from "react-router-dom";
// import textField from "../shared/TextField";
// import Axios from "axios";

export default function Profile(props) {
  const { handleSubmit, user } = props;
  console.log(user);
  return (
    <>
      <Grid
        container
        className="profilContainer"
        justify="center"
        alignItems="center"
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
                backgroundImage:
                  `url()`,
                backgroundSize: "cover",
              }}
            ></Grid>
            <Grid item sm={10} className="profileFullName">
            <h1>Harry kane</h1>
            <h3>kane1</h3>
            <h5><i class="fas fa-envelope"></i> kane@gmail.com</h5>
            </Grid>
          </Grid>

          <Grid
            item
            container
            xs={12}
            lg={8}
            className="profileInputContainer"
            justify="center"
            alignItems="center"
          >
            </Grid>
          </Grid>
        </Grid>
    </>
  );
}
