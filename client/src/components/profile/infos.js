import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import RadioGroup from "../commun/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { makeStyles } from "@material-ui/core/styles";
import { Field } from 'redux-form';
import renderField from '../commun/TextField'; 


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
  // const [valueGender, setGenderValue] = React.useState("female");
  // const [valueInter, setInterValue] = React.useState("men");

  // const handleGenderChange = (event) => {
  //   setGenderValue(event.target.value);
  // };

  // const handleInterestedChange = (event) => {
  //   setInterValue(event.target.value);
  // };

  const [tag, setTag] = React.useState("none");

  const handleTagChange = (event) => {
    setTag(event.target.value);
  };
  return (
    <div className="infosContainer">
      <Grid container spacing={3}>
        <Grid item container sm={12}>
          <Grid item sm={6}>
            <Field
              name = "first_name"
              label="First Name"
              color="secondary"
              component={renderField}
              InputProps={{
                classes: {
                  root: classes.root,
                },
              }}
              InputLabelProps={{ className: "loginInputLabel" }}
            />
          </Grid>
          <Grid item sm={6}>
          <Field
              name = "last_name"
              label="Last Name"
              color="secondary"
              component={renderField}
              InputProps={{
                classes: {
                  root: classes.root,
                },
              }}
              InputLabelProps={{ className: "loginInputLabel" }}
            />
          </Grid>
        </Grid>
        <Grid item container sm={12}>
        <Field
              name = "bio"
              label="Bio"
              color="secondary"
              component={renderField}
              InputProps={{
                classes: {
                  root: classes.root,
                },
              }}
              InputLabelProps={{ className: "loginInputLabel" }}
            />
        </Grid>

        <Grid item container sm={12}>
          <Grid item sm={4}>
            <FormControl>
              <FormLabel color="secondary" style={{ color: "grey" }}>
                Gender
              </FormLabel>
              <Field component ={RadioGroup} name = "gender" options={[
                    { title:  'Men ' , value: 'men'  },
                    { title:  'Women', value: 'women'},
                    { title:  'Both' , value: 'both' }
                  ]}
                />

            </FormControl>
          </Grid>
          <Grid item sm={4}>
            <FormControl>
              <FormLabel color="secondary" style={{ color: "grey" }}>
                Interested In
              </FormLabel>
              <Field component ={RadioGroup} name = "intrest" options={[
                    { title:  'Men ' , value: 'men'  },
                    { title:  'Women', value: 'women'},
                    { title:  'Both' , value: 'both' }
                  ]}
                />
            </FormControl>
          </Grid>
          <Grid item container sm={4}>
            <Grid item sm={12}>
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
      </Grid>
    </div>
  );
}
