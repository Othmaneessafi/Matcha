import Profile from "../../components/profile/profile";
import { InfosAction } from "../../actions/infosAction";
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
  return errors;
};

const mapStateToProps = (state) => ({
  form: state.form,
  status: state.infos.status,
  error: state.infos.error,
});
const mapDispatchToProps = {
  infosAction: InfosAction,
};
const mergeProps = (stateProps, dispatchProps, otherProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...otherProps,
  handleSubmit: otherProps.handleSubmit((form) => {
    dispatchProps.infosAction(form);
  }),
});

const connectedProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Profile);
const ProfileContainer = reduxForm({
  form: "profile",
  validate,
})(connectedProfileContainer);

export default ProfileContainer;
