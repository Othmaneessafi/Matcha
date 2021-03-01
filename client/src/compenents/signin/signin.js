import React from "react";
import "./signin.css";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import LoginImage from "./img/login.svg";
import { Link } from 'react-router-dom';

export default function signin() {
  return (
    <>
      <Grid
        container
        className="signinContainer"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={7} container className="loginContainer">
            <Grid
            item
            xs={12}
            lg={6}
            className="loginImageContainer"
            container
            justify="center"
            alignItems="center"
          >
            <img src={LoginImage} alt="Login" className="loginImage" />
          </Grid>
          
          <Grid
            item
            container
            xs={12}
            lg={6}
            className="loginInputContainer"
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
                className="loginInput"
                color="secondary"
                InputProps={{ className: "loginInput" }}
                InputLabelProps={{ className: "loginInputLabel" }}
              />
              <TextField
                label="password"
                type="password"
                color="secondary"
                className="loginInput"
                InputProps={{ className: "loginInput" }}
                InputLabelProps={{ className: "loginInputLabel" }}
              />
              <div style={{ height: 30 }} />
              <Button variant="contained" color="primary" className="loginBtn">
                Login
              </Button>
              <Link to="/signup">
                <Button color="secondary" className="registerBtn">
                  Regiter
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
