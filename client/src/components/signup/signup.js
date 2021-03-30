import React from "react";
import "./signup.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import LogupImage from "./img/loving.svg";
import { Link } from "react-router-dom";
import { Field } from 'redux-form';
import renderField from '../shared/TextField';

export default function signup(props) {
  const {handleSubmit} = props;
  return (
    <>
      <Grid
        container
        className="signupContainer"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={11} lg={7} container className="logupContainer">
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
              <Field
                name="firstname"
                className="logupInput"
                color="secondary"
                InputProps={{ className: "loginInput" }}
                InputLabelProps={{ className: "loginInputLabel" }}
                component={renderField}
                label="First Name"
                type="text"
                rows='1'

              />   
              <Field
                name="lastname"
                className="logupInput"
                color="secondary"
                InputProps={{ className: "loginInput" }}
                InputLabelProps={{ className: "loginInputLabel" }}
                component={renderField}
                label="Last Name"
                type="text"
                rows='1'

              />   
              <Field
                name="username"
                className="logupInput"
                color="secondary"
                InputProps={{ className: "loginInput" }}
                InputLabelProps={{ className: "loginInputLabel" }}
                component={renderField}
                label="Username"
                type="text"
                rows='1'

              />   
              
              <Field
                name="email"
                component={renderField}
                label="Email"
                type="email"
                rows='1'
                className="logupInput"
                color="secondary"
                InputProps={{ className: "loginInput" }}
                InputLabelProps={{ className: "loginInputLabel" }}

              />   
              <Field
                name="password"
                component={renderField}
                label="Password"
                type="password"
                rows='1'
                color="secondary"
                className="logupInput"
                InputProps={{ className: "loginInput" }}
                InputLabelProps={{ className: "loginInputLabel" }}
              /> 
              <Field
                name="confirmPassword"
                component={renderField}
                label="ConfirmPassword"
                type="password"
                rows='1'
                color="secondary"
                className="logupInput"
                InputProps={{ className: "loginInput" }}
                InputLabelProps={{ className: "loginInputLabel" }}
              />      
              <div style={{ height: 30 }} />
              <Button variant="contained" color="primary" className="logupBtn" onClick={handleSubmit}>
                Register
              </Button>
              <Link to="/signin" style={{ textDecoration: "none" }}>
                <Button color="secondary" className="registerBtn" >
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
            <img src={LogupImage} alt="logup" className="logupImage" />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
