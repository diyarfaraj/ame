"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import ProgressBar from "./ProgressBar";
import WelcomeStep from "./steps/WelcomeStep";
import ProjectStep from "./steps/ProjectStep";
import BudgetStep from "./steps/BudgetStep";
import PackageStep from "./steps/PackageStep";
import StyleStep from "./steps/StyleStep";
import ContactStep from "./steps/ContactStep";

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
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>(() => getInitialFormData(initialPackage));

  const totalSteps = 6;

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
      const response = await fetch("/api/send-consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          projectType: formData.projectType,
          spaceType: formData.spaceType,
          squareFootage: formData.squareFootage || "Not provided",
          timeline: formData.timeline,
          budgetRange: formData.budgetRange,
          selectedPackage: formData.selectedPackage,
          stylePreferences: formData.stylePreferences.join(", "),
          inspirations: formData.inspirations || "None",
          message: formData.message || "None",
          selectedInspirationImages: initialInspirations.length > 0 ? initialInspirations.join(", ") : "None selected",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send");
      }

      // Clear localStorage after successful submission
      clearStorage();
      // Redirect to thank you page for Meta Ads conversion tracking
      router.push("/thank-you");
    } catch (error) {
      console.error("Error submitting form:", error);
      // Clear storage and redirect to thank you page even if email fails
      clearStorage();
      router.push("/thank-you");
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
  ];

  return (
    <div className="min-h-screen bg-[#F5F3F0] relative overflow-hidden">
      {currentStep < totalSteps && (
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
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
