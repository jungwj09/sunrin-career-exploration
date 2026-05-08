import { Suspense } from "react";
import MajorResultView from "@/components/result/MajorResultView";

export default function MajorResultPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00A05C]" /></div>}>
      <MajorResultView />
    </Suspense>
  );
}