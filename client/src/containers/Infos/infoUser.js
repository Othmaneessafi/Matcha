import Infos from "../../components/infos/infos";
import { createTag, step1info } from '../../actions/infosAction';
import { connect } from "react-redux";
import { reduxForm } from "redux-form";

const validate = (values) => {
  const errors = {};
  const requiredFields = [
    "first_name",
    "last_name",
    "bio",
    "birth",
    "gender",
    "intrest",
  ];

  const requiredArr = ["tags"];
  requiredArr.forEach(field => {
    if (!values[field]) {
        errors[field] = 'Required !';
    }
});
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

  requiredFields.forEach((field) => {
    if (!values[field] || !values[field].trim()) {
      errors[field] = "Required !";
    }
  });
  if (values.first_name && !/^[a-z0-9_-\s]{2,20}$/.test(values.first_name))
    errors.first_name =
      'first name can contain 2-20 characters, letters (a-z), numbers, "_" and "-"';
  if (values.last_name && !/^[a-z0-9_-\s]{2,20}$/.test(values.last_name))
    errors.last_name =
      'Username can contain 2-20 characters, letters (a-z), numbers, "_" and "-"';
  const age = Age(values.birthday);
  if (age < 18) errors.birthday = "You are too older to be here";
  if (age > 120) errors.birthday = "You are too older to be here";
  return errors;
}

const mapStateToProps = (state) => ({
  values: state.form.values,
  selectTags: state.infos.selectTags,
  // selectLoading: state.infos.selectLoading,
  selectError: state.infos.error,
  user: state.user,
});
const mapDispatchToProps = {
  step1info: step1info,
  createTag: createTag,
};
const mergeProps = (stateProps, dispatchProps, otherProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...otherProps,
  handleSubmit: otherProps.handleSubmit((values) => {
    dispatchProps.step1info(values, stateProps.user.id);
  }),
});

const connectedProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Infos);

let ProfileContainer = reduxForm({
  form: "profile",
  validate,
})(connectedProfileContainer);

ProfileContainer = connect(
  state => ({
      initialValues: {
        first_name: state.user.firstname,
        last_name: state.user.lastname,
          gender: state.user.gender,
          intrest: state.user.Sexual_orientation,
          birth: state.user.date_birthday,
          bio: state.user.biography,
          tags: state.user.tags,
      },
  }),
)(ProfileContainer);

export default ProfileContainer;
