import Profile from "../../components/profile/profile";
import { InfosAction, createTag } from "../../actions/infosAction";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";



const mapStateToProps = (state) => ({
  form: state.form,
  status: state.infos.status,
  error: state.infos.error,
  Tags: state.infos.selectTags,
  loadingTags: state.infos.selectLoading,
  erroTags: state.infos.error,
  user : state.user,
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
)(Profile);
const ProfileContainer = reduxForm({
  form: "profile",
})(connectedProfileContainer);

export default ProfileContainer;
