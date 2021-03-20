import React, { useState, useEffect } from "react";
import "./profile.css";
import Grid from "@material-ui/core/Grid";
import { Field } from "redux-form";
import Button from "@material-ui/core/Button";
import Navbar from "../../containers/Navbar";
import textField from "../shared/TextField";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import renderField from "../shared/TextField";


const Age = (birthday) => {
  let today = new Date();
  let birthDate = new Date(birthday);
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export default function Profile(props) {
  const { handleSubmit, user, users } = props;
  const [showEdit, setShowEdit] = useState(true);

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };
  console.log(users);
  return (
    <>
      <Navbar />
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
            alignItems="center"
          >
            {showEdit ? (
              <>
                <Grid
                  item
                  sm={10}
                  className="profileUserImage"
                  style={{ marginBottom: "20px" }}
                >
                  <img
                    src={user.profile_img}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "5px",
                    }}
                  />
                </Grid>
                <Grid item sm={10} className="profileFullName">
                  <h1>{user.first_name + " " + user.last_name}</h1>
                  <h3>{user.username}</h3>
                  <h5>
                    <i className="fas fa-envelope"></i> Email: {user.email}
                  </h5>
                  <h5>
                    <i className="fas fa-venus-mars"></i> Gender: {user.gender}
                  </h5>
                  <h5>
                    <i className="far fa-grin-hearts"></i> Interest:{" "}
                    {user.intrest}
                  </h5>
                  <h5>
                    <i className="fas fa-baby-carriage"></i> Age:{" "}
                    {Age(user.birth_date)}
                  </h5>
                  <h5>
                    <i className="fas fa-book"></i> Bio: {user.bio}
                  </h5>
                  <Button
                    variant="contained"
                    color="primary"
                    className="loginBtn"
                    type="submit"
                    value="ok"
                    onClick={handleEdit}
                    style={{ marginTop: "10px" }}
                  >
                    Edit
                  </Button>
                </Grid>
                <Grid item sm={10} style={{ height: "30%" }}></Grid>
              </>
            ) : (
              <Grid item sm={10}>
                <Field
                  name="first_name"
                  label="First Name"
                  type="text"
                  component={textField}
                  className="loginInput"
                  color="secondary"
                  InputProps={{ className: "loginInput" }}
                  InputLabelProps={{ className: "loginInputLabel" }}
                />
                <Field
                  name="last_name"
                  label="Last Name"
                  type="text"
                  component={textField}
                  className="loginInput"
                  color="secondary"
                  InputProps={{ className: "loginInput" }}
                  InputLabelProps={{ className: "loginInputLabel" }}
                />
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
                  name="email"
                  label="Email"
                  type="email"
                  component={textField}
                  className="loginInput"
                  color="secondary"
                  InputProps={{ className: "loginInput" }}
                  InputLabelProps={{ className: "loginInputLabel" }}
                />
                <Field
                  name="bio"
                  label="Bio"
                  type="text"
                  component={textField}
                  className="loginInput"
                  color="secondary"
                  InputProps={{ className: "loginInput" }}
                  InputLabelProps={{ className: "loginInputLabel" }}
                />
                <Field
                  name="password"
                  label="Password"
                  type="password"
                  component={textField}
                  className="loginInput"
                  color="secondary"
                  InputProps={{ className: "loginInput" }}
                  InputLabelProps={{ className: "loginInputLabel" }}
                />
                <Field
                id="date"
                label="Birthday"
                name="birth"
                type="date"
                component={renderField}
                color="secondary"
                InputLabelProps={{
                  shrink: true,
                  className: "loginInputLabel",
                }}
              />
                <FormControl variant="outlined" color="secondary" style={{ width: '40%', margin: '10px'}}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Gender
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    label="Age"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Man</MenuItem>
                    <MenuItem value={20}>Woman</MenuItem>
                    <MenuItem value={30}>Miiw</MenuItem>
                  </Select>
                </FormControl>
                <FormControl variant="outlined" color="secondary" style={{ width: '40%', margin: '10px'}}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Interest
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    label="Age"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Men</MenuItem>
                    <MenuItem value={20}>Women</MenuItem>
                    <MenuItem value={30}>Both</MenuItem>
                  </Select>
                </FormControl>
                
                <Button
                  variant="contained"
                  color="primary"
                  className="loginBtn"
                  type="submit"
                  value="ok"
                  onClick={handleSubmit}
                  style={{ width: "40%" ,marginRight: '10px'}}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className="loginBtn"
                  type="submit"
                  value="ok"
                  onClick={handleEdit}
                >
                  Cancel
                </Button>
              </Grid>
            )}
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
    </>
  );
}
