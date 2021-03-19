import React from "react";
import { Alert } from "reactstrap";
import { connect } from "react-redux";

const sharedAlert = (props) => {
  const { text, color } = props.alert;

  if (text === "") return <></>;
  return (
    <>
      <Alert color={color} style={{
        position: "absolute",
        left: "0",
        top: "0",
        width: "100%"
      }}>
        {text}
      </Alert>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    alert: state.alert,
  };
};

export default connect(mapStateToProps)(sharedAlert);
