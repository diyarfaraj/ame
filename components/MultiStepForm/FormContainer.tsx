"use client";

import { useState, useEffect } from "react";
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

const STORAGE_KEY = "ame_quiz_data";

const getInitialFormData = (initialPackage: string): FormData => {
  if (typeof window === "undefined") {
    return {
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
    };
  }

  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      return {
        ...parsed,
        selectedPackage: initialPackage || parsed.selectedPackage,
      };
    } catch {
      // Invalid JSON, return default
    }
  }

  return {
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
  };
};

interface FormContainerProps {
  initialPackage?: string;
  initialInspirations?: string[];
}

export default function FormContainer({ initialPackage = "", initialInspirations = [] }: FormContainerProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>(() => getInitialFormData(initialPackage));

  const totalSteps = 7;

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const clearStorage = () => {
    localStorage.removeItem(STORAGE_KEY);
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

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const submitData = new FormData();
      submitData.append("form-name", "consultation");
      submitData.append("name", formData.name);
      submitData.append("email", formData.email);
      submitData.append("phone", formData.phone);
      submitData.append("projectType", formData.projectType);
      submitData.append("spaceType", formData.spaceType);
      submitData.append("squareFootage", formData.squareFootage || "Not provided");
      submitData.append("timeline", formData.timeline);
      submitData.append("budgetRange", formData.budgetRange);
      submitData.append("selectedPackage", formData.selectedPackage);
      submitData.append("stylePreferences", formData.stylePreferences.join(", "));
      submitData.append("inspirations", formData.inspirations || "None");
      submitData.append("message", formData.message || "None");
      submitData.append("selectedInspirationImages", initialInspirations.length > 0 ? initialInspirations.join(", ") : "None selected");

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(submitData as unknown as Record<string, string>).toString(),
      });

      if (!response.ok) {
        throw new Error("Failed to send");
      }

      // Clear localStorage after successful submission
      clearStorage();
      nextStep();
    } catch (error) {
      console.error("Error submitting form:", error);
      // Clear storage and proceed to thank you page even if email fails
      clearStorage();
      nextStep();
    } finally {
      setIsSubmitting(false);
    }
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
      isSubmitting={isSubmitting}
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
