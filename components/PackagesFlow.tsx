"use client";

import { useRouter } from "next/navigation";
import InspirationPicker from "./InspirationPicker";

export default function PackagesFlow() {
  const router = useRouter();

  const handleNext = (selected: string[]) => {
    const params = selected.length > 0 ? `?inspirations=${selected.join(",")}` : "";
    router.push(`/get-started${params}`);
  };

  const handleSkip = () => {
    router.push("/get-started");
  };

  return <InspirationPicker onNext={handleNext} onSkip={handleSkip} />;
}
