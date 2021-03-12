import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Infos from "./infos";
import Photos from "./photos";
import Finished from "./finished";
import Localisation from "./Localisation";
import "./profile.css";
import Grid from "@material-ui/core/Grid";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function getSteps() {
  return ["Information", "Photos", "Localisation"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Infos />;
    case 1:
      return <Photos />;
    case 2:
      return <Localisation />;
    default:
      return "Unknown step";
  }
}

export default function Profile(props) {
  const { handleSubmit } = props;

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <Grid
        container
        className="profilContainer"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={7} container className="profileContainer">
          <Grid
            item
            xs={12}
            lg={3}
            className="profileImageContainer"
            container
            justify="center"
            alignItems="center"
          >
            <Stepper
              activeStep={activeStep}
              orientation="vertical"
              className="stepperContainer"
            >
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel className="stepLabel">
                    <h2>{label}</h2>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>

          <Grid
            item
            container
            xs={12}
            lg={9}
            className="profileInputContainer"
            justify="center"
            alignItems="center"
          >
            {activeStep === steps.length ? (
              <Finished handle={handleSubmit} />
            ) : (
              <Grid
                container
                item
                sm={12}
                justify="center"
                alignItems="center"
                spacing={4}
              >
                <Grid
                  container
                  item
                  sm={10}
                  justify="center"
                  alignItems="center"
                >
                  {getStepContent(activeStep)}
                </Grid>
                <Grid
                  container
                  item
                  sm={6}
                  justify="center"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item sm={2}>
                    <Button
                      color="secondary"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      style={{ color: "#C51162" }}
                    >
                      Back
                    </Button>
                  </Grid>
                  <Grid item sm={6}>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={handleNext}
                      className="profileBtn"
                    >
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      <ArrowForwardIosIcon className="forward" />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
      <div className="profileContainer">
        {activeStep === steps.length && (
          <Paper square elevation={0} className="finish">
            <Typography>Congratulations you finish</Typography>
            <Button onClick={handleReset} color="secondary">
              Reset
            </Button>
          </Paper>
        )}
      </div>
    </>
  );
}
