import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { makeStyles } from "@material-ui/core/styles";

const tags = [
  {
    value: "Travel",
  },
  {
    value: "Sport",
  },
  {
    value: "Dev",
  },
  {
    value: "1337",
  },
];

const useStyles = makeStyles({
  root: {
    "&:not(.Mui-disabled)::before": {
      borderColor: "grey",
    },
  },
});

export default function Infos() {
  const classes = useStyles();
  const [valueGender, setGenderValue] = React.useState("female");
  const [valueInter, setInterValue] = React.useState("men");

  const handleGenderChange = (event) => {
    setGenderValue(event.target.value);
  };

  const handleInterestedChange = (event) => {
    setInterValue(event.target.value);
  };

  const [tag, setTag] = React.useState("none");

  const handleTagChange = (event) => {
    setTag(event.target.value);
  };
  return (
    <div className="infosContainer">
      <Grid container spacing={3}>
        <Grid item container sm={12}>
          <Grid item sm={6}>
            <TextField
              label="First Name"
              color="secondary"
              InputProps={{
                classes: {
                  root: classes.root,
                },
              }}
              InputLabelProps={{ className: "loginInputLabel" }}
            />
          </Grid>
          <Grid item sm={6}>
            <TextField
              label="Last Name"
              color="secondary"
              className="infosInputs"
              InputProps={{  classes: {
                root: classes.root,
              }, }}
              InputLabelProps={{ className: "loginInputLabel" }}
            />
          </Grid>
        </Grid>
        <Grid item container sm={12}>
          <Grid item sm={6}>
            <TextField
              label="Username"
              color="secondary"
              className="infosInputs"
              InputProps={{  classes: {
                root: classes.root,
              }, }}
              InputLabelProps={{ className: "loginInputLabel" }}
            />
          </Grid>
          <Grid item sm={6}>
            <TextField
              label="Email"
              color="secondary"
              InputProps={{  classes: {
                root: classes.root,
              }, }}
              InputLabelProps={{ className: "loginInputLabel" }}
              className="infosInputs"
            />
          </Grid>
        </Grid>
        <Grid item container sm={12}>
          <TextField
            label="Bio"
            color="secondary"
            className="infosInputs"
            InputProps={{  classes: {
              root: classes.root,
            }, }}
            InputLabelProps={{ className: "loginInputLabel" }}
            fullWidth
          />
        </Grid>

        <Grid item container sm={12}>
          <Grid item sm={4}>
            <FormControl>
              <FormLabel color="secondary" style={{ color: "grey" }}>
                Gender
              </FormLabel>
              <RadioGroup
                aria-label="gender"
                value={valueGender}
                onChange={handleGenderChange}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                  style={{ color: "darkgrey" }}
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                  style={{ color: "darkgrey" }}
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                  style={{ color: "darkgrey" }}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item sm={4}>
            <FormControl>
              <FormLabel color="secondary" style={{ color: "grey" }}>
                Interested In
              </FormLabel>
              <RadioGroup
                aria-label="interested"
                value={valueInter}
                onChange={handleInterestedChange}
              >
                <FormControlLabel
                  value="men"
                  control={<Radio />}
                  label="Men"
                  style={{ color: "darkgrey" }}
                />
                <FormControlLabel
                  value="women"
                  control={<Radio />}
                  label="Women"
                  style={{ color: "darkgrey" }}
                />
                <FormControlLabel
                  value="both"
                  control={<Radio />}
                  label="Both"
                  style={{ color: "darkgrey" }}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item container sm={4}>
            <Grid item sm={12}>
              <TextField
                id="date"
                label="Birthday"
                type="date"
                defaultValue="2017-05-24"
                color="secondary"
                InputLabelProps={{
                  shrink: true,
                  className: "loginInputLabel",
                }}
              />
            </Grid>
            <Grid item sm={12}>
              <TextField
                id="standard-select-currency"
                select
                label="Tags"
                value={tag}
                onChange={handleTagChange}
                helperText={<label style={{color: 'grey'}}>Please select at least 3 tags</label>}
                color="secondary"
                InputProps={{  classes: {
                  root: classes.root,
                }, }}
                InputLabelProps={{ className: "loginInputLabel" }}
              >
                {tags.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={6}>
          <TextField
            label="New Password"
            type="password"
            color="secondary"
            InputProps={{  classes: {
              root: classes.root,
            }, }}
            InputLabelProps={{ className: "loginInputLabel" }}
            className="infosInputs"
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            label="Confirm New Password"
            type="password"
            color="secondary"
            InputProps={{  classes: {
              root: classes.root,
            }, }}
            InputLabelProps={{ className: "loginInputLabel" }}
            className="infosInputs"
          />
        </Grid>
      </Grid>
    </div>
  );
}
