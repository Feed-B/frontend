"use client";

import { useState } from "react";
import Step1 from "./_components/Step1/Step1";
import Step2 from "./_components/Step2/Step2";

function SignUpPage() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  switch (step) {
    case 1:
      return <Step1 nextStep={nextStep} />;
    case 2:
      return <Step2 prevStep={prevStep} />;
    default:
      return null;
  }
}

export default SignUpPage;
