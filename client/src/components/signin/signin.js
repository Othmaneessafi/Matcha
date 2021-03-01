import React from "react";
import "./signin.css";
import Grid from "@material-ui/core/Grid";
import { Field } from 'redux-form';
import Button from "@material-ui/core/Button";
import LoginImage from "./img/login.svg";
import { Link } from 'react-router-dom';
import textField from '../commun/TextField'

export default function signin(props) {
  const { handleSubmit} = props;

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
              <Field
                name="username"
                label="Username"
                type="text"
                component={textField}
                className="loginInput"
                color="secondary"
                InputProps={{ className: "loginInput" }}
                InputLabelProps={{ className: "loginInputLabel" }}
              />

              <Field
                name="password"
                type="password"
                component={textField}
                rows='1'
                label="Password"
                color="secondary"
                className="loginInput"
                InputProps={{ className: "loginInput" }}
                InputLabelProps={{ className: "loginInputLabel" }}
              />
              <div style={{ height: 30 }} />
              <Button variant="contained" color="primary" className="loginBtn" type="submit" value="ok" onClick={handleSubmit}>
                Login
              </Button>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <Button color="secondary" className="registerBtn" >
                  Regiter
                </Button>
              </Link>
              <Link to="/forgotPassword" style={{ textDecoration: "none" }}>
                <Button color="secondary" className="registerBtn" >
                  Forgot password?
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
