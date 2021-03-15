import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "../shared/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { makeStyles } from "@material-ui/core/styles";
import { Field } from "redux-form";
import renderField from "../shared/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import CreatableSelect from 'react-select/creatable';

const useStyles = makeStyles({
  root: {
    "&:not(.Mui-disabled)::before": {
      borderColor: "grey",
    },
  },
});

export default function Infos(props) {
  const classes = useStyles();
  const [tags, setTag] = useState([]);
  const [tagvalue, setTagValue] = useState("");
  const { handleSubmit, selectLoading, selectTags, selectError, createTag } = props;

  const handleTagChange = (e) => {
    setTagValue(e.target.value);
  };
  const handleCreate = (value) => {
    createTag(value);
  }
  const handleDeleteTag = (e) => {
    console.log(tags[e.target.id].id);
    console.log(tags);
    setTag(tags.filter((tg) => tg.id !== tags[e.target.id].id));
  };

  const handleTagAdd = (fields, e) => {
    if (tagvalue !== "" && tags.length < 5) {
      setTag([
        ...tags,
        {
          id: tags.length,
          name: tagvalue,
        },
      ]);
    }
    fields.push({ id: fields.length, name: tagvalue });
    console.log();
  };

  const selectField = ({ input, meta: { touched, error } }) => (
    <div>
      <CreatableSelect
        {...input}
        isMulti
        isDisabled={selectLoading}
        isLoading={selectLoading}
        isClearable={false}
        options={selectTags}
        onBlur={() => input.onBlur(input.value)}
        onChange={(value) => {
          input.onChange(value);
        }}
        onCreateOption={handleCreate}
      />
      <div>
        {touched && error && (
          <div style={{ fontSize: "12px", color: "rgb(244, 67, 54)" }}>
            {error}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="infosContainer">
      <Grid container spacing={10}>
        <Grid item container sm={12}>
          <Grid item sm={5}>
            <Field
              name="first_name"
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
          <Grid item sm={2} />
          <Grid item sm={5}>
            <Field
              name="last_name"
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
            name="bio"
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
              <Field
                component={RadioGroup}
                name="gender"
                options={[
                  { title: "Men ", value: "men" },
                  { title: "Women", value: "women" },
                  { title: "Both", value: "both" },
                ]}
              />
            </FormControl>
          </Grid>
          <Grid item sm={4}>
            <FormControl>
              <FormLabel color="secondary" style={{ color: "grey" }}>
                Interested In
              </FormLabel>
              <Field
                component={RadioGroup}
                name="intrest"
                options={[
                  { title: "Men ", value: "men" },
                  { title: "Women", value: "women" },
                  { title: "Miiw", value: "miiw" },
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
              <Grid
                item
                container
                sm={12}
                justify="center"
                alignItems="center"
                className="tagsCont"
              >
                <Field name="tags" component={selectField} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
