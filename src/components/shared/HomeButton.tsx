"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

export default function HomeButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/")}
      className="flex items-center gap-2 px-4 py-2 text-sm text-[#767676]"
    >
      <ChevronLeft className="w-4 h-4" />
      홈으로 돌아가기
    </button>
  );
}
