import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

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

export default function Infos() {
  const [value, setValue] = React.useState("female");

  const handleGenderChange = (event) => {
    setValue(event.target.value);
  };

  const handleInterestedChange = (event) => {
    setValue(event.target.value);
  };

  const [tag, setTag] = React.useState("none");

  const handleTagChange = (event) => {
    setTag(event.target.value);
  };
  return (
    <div className="infosContainer">
      <Grid container spacing={4}>
        <Grid item container sm={12}>
          <Grid item sm={6}>
            <TextField
              label="First Name"
              color="secondary"
              className="infosInputs"
            />
          </Grid>
          <Grid item sm={6}>
            <TextField
              label="Last Name"
              color="secondary"
              className="infosInputs"
            />
          </Grid>
        </Grid>
        <Grid item container sm={12}>
          <Grid item sm={6}>
            <TextField
              label="Username"
              color="secondary"
              className="infosInputs"
            />
          </Grid>
          <Grid item sm={6}>
            <TextField
              label="Email"
              color="secondary"
              className="infosInputs"
            />
          </Grid>
        </Grid>
        <Grid item container sm={12}>
          <TextField label="Bio" color="secondary" className="infosInputs" />
        </Grid>

        <Grid item container sm={12}>
          <Grid item sm={4}>
            <FormControl>
              <FormLabel color="secondary">Gender</FormLabel>
              <RadioGroup
                aria-label="gender"
                value={value}
                onChange={handleGenderChange}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item sm={4}>
            <FormControl>
              <FormLabel color="secondary">Interested In</FormLabel>
              <RadioGroup
                aria-label="interested"
                value={value}
                onChange={handleInterestedChange}
              >
                <FormControlLabel value="men" control={<Radio />} label="Men" />
                <FormControlLabel
                  value="women"
                  control={<Radio />}
                  label="Women"
                />
                <FormControlLabel
                  value="both"
                  control={<Radio />}
                  label="Both"
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
                helperText="Please select at least 3 tags"
                color="secondary"
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
        <Grid item sm={6} >
        <TextField
          label="New Password"
          type="password"
          color="secondary"
          className="infosInputs"
        />
        </Grid>
        <Grid item sm={6} >
        <TextField
          label="Confirm New Password"
          type="password"
          color="secondary"
          className="infosInputs"
        /></Grid>
      </Grid>
    </div>
  );
}
