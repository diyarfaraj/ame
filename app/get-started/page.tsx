"use client";

import { useSearchParams } from "next/navigation";
import FormContainer from "@/components/MultiStepForm/FormContainer";
import { Suspense } from "react";

function GetStartedContent() {
  const searchParams = useSearchParams();
  const packageParam = searchParams.get("package");
  const inspirationsParam = searchParams.get("inspirations");
  const initialInspirations = inspirationsParam ? inspirationsParam.split(",") : [];

  return (
    <FormContainer
      initialPackage={packageParam || ""}
      initialInspirations={initialInspirations}
    />
  );
}

export default function GetStartedPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F5F3F0]" />}>
      <GetStartedContent />
    </Suspense>
  );
}
