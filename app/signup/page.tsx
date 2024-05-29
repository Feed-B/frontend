"use client";

import { useState } from "react";
import FirstStep from "./_components/FirstStep/FirstStep";
import SecondStep from "./_components/SecondStep/SecondStep";

function SignUpPage() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  switch (step) {
    case 1:
      return <FirstStep nextStep={nextStep} />;
    case 2:
      return <SecondStep prevStep={prevStep} />;
    default:
      return null;
  }
}

export default SignUpPage;
