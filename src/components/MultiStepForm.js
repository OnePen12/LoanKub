import React, { useState } from 'react';

import Calc1 from "../pages/Calc1";
import Calc2 from "../pages/Calc2";
import Privacy from "../pages/Privacy";
import Submit1 from "../pages/Submit1";
import Success from "../pages/Success";
import Privacy2 from "../pages/Privacy2";
import Submit2 from "../pages/Submit2";
import ProgressBar from "../components/ProgressBar"; // Import ProgressBar component

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  // Render the current step based on the value of 'step'
  switch (step) {
    case 1:
      return (
        <div>
          <ProgressBar totalSteps={7} currentStep={1} />
          <Calc1 onNext={nextStep} />
        </div>
      );
    case 2:
      return (
        <div>
          <ProgressBar totalSteps={7} currentStep={2} />
          <Calc2 onNext={nextStep} onPrev={prevStep} />
        </div>
      );
    case 3:
      return (
        <div>
          <ProgressBar totalSteps={7} currentStep={3} />
          <Privacy onNext={nextStep} onPrev={prevStep} />
        </div>
      );
    case 4:
      return (
        <div>
          <ProgressBar totalSteps={7} currentStep={4} />
          <Submit1 onNext={nextStep} />
        </div>
      );
    case 5:
      return (
        <div>
          <ProgressBar totalSteps={7} currentStep={5} />
          <Privacy2 onNext={nextStep} onPrev={prevStep} />
        </div>
      );
    case 6:
      return (
        <div>
          <ProgressBar totalSteps={7} currentStep={6} />
          <Submit2 onNext={nextStep} onPrev={prevStep} />
        </div>
      );
    case 7:
      return <Success />;
    default:
      return <div>Error: Unknown step</div>;
  }
};

export default MultiStepForm;
