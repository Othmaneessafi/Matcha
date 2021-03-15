import React from "react";
import { Alert } from "reactstrap";
import { connect } from "react-redux";

const sharedAlert = (props) => {
    const { text, color } = props.alert;

    if (text === '')
        return <></>;
  return (
    <>
      <Alert color={color}>{text}</Alert>
    </>
  );
};

const mapStateToProps = (state) => {
    return {
        alert: state.alert
    }
}

export default connect(mapStateToProps)(sharedAlert)
