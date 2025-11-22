"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProgressBar from "./ProgressBar";
import WelcomeStep from "./steps/WelcomeStep";
import ProjectStep from "./steps/ProjectStep";
import BudgetStep from "./steps/BudgetStep";
import PackageStep from "./steps/PackageStep";
import StyleStep from "./steps/StyleStep";
import ContactStep from "./steps/ContactStep";
import ThankYouStep from "./steps/ThankYouStep";

export interface FormData {
  projectType: string;
  spaceType: string;
  squareFootage: string;
  timeline: string;
  budgetRange: string;
  selectedPackage: string;
  stylePreferences: string[];
  inspirations: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormContainerProps {
  initialPackage?: string;
}

export default function FormContainer({ initialPackage = "" }: FormContainerProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    projectType: "",
    spaceType: "",
    squareFootage: "",
    timeline: "",
    budgetRange: "",
    selectedPackage: initialPackage,
    stylePreferences: [],
    inspirations: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const totalSteps = 7;

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setDirection(1);
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    localStorage.setItem("consultationData", JSON.stringify(formData));
    nextStep();
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  const steps = [
    <WelcomeStep key="welcome" onNext={nextStep} />,
    <ProjectStep
      key="project"
      formData={formData}
      updateFormData={updateFormData}
      onNext={nextStep}
      onBack={prevStep}
    />,
    <BudgetStep
      key="budget"
      formData={formData}
      updateFormData={updateFormData}
      onNext={nextStep}
      onBack={prevStep}
    />,
    <PackageStep
      key="package"
      formData={formData}
      updateFormData={updateFormData}
      onNext={nextStep}
      onBack={prevStep}
    />,
    <StyleStep
      key="style"
      formData={formData}
      updateFormData={updateFormData}
      onNext={nextStep}
      onBack={prevStep}
    />,
    <ContactStep
      key="contact"
      formData={formData}
      updateFormData={updateFormData}
      onNext={handleSubmit}
      onBack={prevStep}
    />,
    <ThankYouStep key="thankyou" formData={formData} />,
  ];

  return (
    <div className="min-h-screen bg-[#F5F3F0] relative overflow-hidden">
      {currentStep < totalSteps - 1 && (
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps - 1} />
      )}

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentStep}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
        >
          {steps[currentStep]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
