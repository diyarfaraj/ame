"use client";

import { useSearchParams } from "next/navigation";
import FormContainer from "@/components/MultiStepForm/FormContainer";
import { Suspense } from "react";

function GetStartedContent() {
  const searchParams = useSearchParams();
  const packageParam = searchParams.get("package");

  return <FormContainer initialPackage={packageParam || ""} />;
}

export default function GetStartedPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F5F3F0]" />}>
      <GetStartedContent />
    </Suspense>
  );
}
