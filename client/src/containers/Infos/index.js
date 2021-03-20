import Infos from "../../components/infos/userInfos";
import { InfosAction, createTag } from "../../actions/infosAction";
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
};

const mapStateToProps = (state) => ({
  form: state.form,
  status: state.infos.status,
  error: state.infos.error,
  Tags: state.infos.selectTags,
  loadingTags: state.infos.selectLoading,
  erroTags: state.infos.error,
});
const mapDispatchToProps = {
  infosAction: InfosAction,
  createTag: createTag,
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
)(Infos);

const ProfileContainer = reduxForm({
  form: "profile",
  validate,
})(connectedProfileContainer);

export default ProfileContainer;
