import React from "react";
import "./signup.css";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import LoginImage from "./img/signup.svg";
import { Link } from "react-router-dom";

export default function signup() {
  return (
    <>
      <Grid
        container
        className="container"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={7} container className="logupContainer">
          <Grid
            item
            container
            xs={12}
            lg={6}
            className="inputContainer"
            justify="center"
            alignItems="center"
          >
            <Grid
              item
              xs={12}
              lg={6}
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <h1 className="logo">MATCHA</h1>
              <TextField
                label="username"
                className="logupInput"
                color="secondary"
                InputProps={{ className: "logupInput" }}
                InputLabelProps={{ className: "logupInputLabel" }}
              />
              <TextField
                label="email"
                type="email"
                className="logupInput"
                color="secondary"
                InputProps={{ className: "logupInput" }}
                InputLabelProps={{ className: "logupInputLabel" }}
              />
              <TextField
                label="password"
                type="password"
                color="secondary"
                className="logupInput"
                InputProps={{ className: "logupInput" }}
                InputLabelProps={{ className: "logupInputLabel" }}
              />
              <TextField
                label="confirm password"
                type="password"
                color="secondary"
                className="logupInput"
                InputProps={{ className: "logupInput" }}
                InputLabelProps={{ className: "logupInputLabel" }}
              />
              <div style={{ height: 30 }} />
              <Button variant="contained" color="primary" className="logupBtn">
                Register
              </Button>
              <Link to="/signin">
                <Button color="secondary" className="registerBtn">
                  Login
                </Button>
              </Link>
            </Grid>
          </Grid>
          <div style={{ height: 50 }} />
          <Grid
            item
            xs={12}
            lg={6}
            className="imageContainer"
            container
            justify="center"
            alignItems="center"
          >
            <img src={LoginImage} alt="logup" className="logupImage" />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
