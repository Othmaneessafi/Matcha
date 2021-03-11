import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "../commun/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { makeStyles } from "@material-ui/core/styles";
import { Field } from 'redux-form';
import renderField from '../commun/TextField';
import InputAdornment from "@material-ui/core/InputAdornment";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';


const useStyles = makeStyles({
  root: {
    "&:not(.Mui-disabled)::before": {
      borderColor: "grey",
    },
  },
});


export default function Infos() {
  const classes = useStyles();
    const [tags, setTag] = React.useState([]);
  const [tagvalue, setTagValue] = React.useState("");

  const handleTagChange = (e) => {
    setTagValue(e.target.value);
  };

  const handleDeleteTag = (e) => {
    console.log(tags[e.target.id].id);
    setTag(tags.filter(tg => tg.id !== tags[e.target.id].id));
  };

  const handleTagAdd = (e) => {
    if (tagvalue !== "" && tags.length < 5) {
      setTag([
        ...tags,
        {
          id: tags.length,
          name: tagvalue,
        },
      ]);
    }
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
              label="Tags"
              color="secondary"
              className="infosInputs"
              onChange={handleTagChange}
              InputProps={{
                classes: {
                  root: classes.root,
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <CheckCircleIcon
                      className="tagIcon"
                      onClick={handleTagAdd}
                    />
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{ className: "loginInputLabel" }}
              fullWidth
            />
            <Grid
              item
              container
              sm={12}
              justify="center"
              alignItems="center"
              className="tagsCont"
            >
              {tags.map((tag, index) => (
                <Grid
                  item
                  container
                  key={index}
                  justify="center"
                  alignItems="center"
                  sm={4}
                  className="tagsField"
                >
                  <Grid item sm={9}>{tag.name}</Grid>
                  <Grid item sm={3}><HighlightOffIcon className="deleteTagBtn" id={tag.id} onClick={handleDeleteTag} /></Grid>
                  
                  
                </Grid>
              ))}
            </Grid>
          </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
