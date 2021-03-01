import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Infos from './infos';
import Photos from './photos';
import Localisation from './Localisation';
import "./profile.css";

function getSteps() {
  return ['Information', 'Photos', 'Localisation'];
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
      return 'Unknown step';
  }
}

export default function Profile() {
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
    <div className="profileContainer">
      <Stepper activeStep={activeStep} orientation="vertical" className="stepperContainer">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel className="stepLabel">{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div >
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    color="secondary"
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className="finish">
          <Typography>Congratulations you finish</Typography>
          <Button onClick={handleReset} color="secondary">
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}
