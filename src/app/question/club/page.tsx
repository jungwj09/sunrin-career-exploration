"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import YearBadge from "@/components/shared/YearBadge";
import MajorSelectOption from "@/components/question/MajorSelectOption";
import QuestionFooterNav from "@/components/question/QuestionFooterNav";

const MAJORS = [
  {
    id: "infosec",
    label: "정보보호과",
    borderColor: "border-[var(--infosec)]",
    href: "/question/club/infosec",
  },
  {
    id: "software",
    label: "소프트웨어과",
    borderColor: "border-[var(--sw)]",
    href: "/question/club/software",
  },
  {
    id: "it-management",
    label: "IT경영과",
    borderColor: "border-[var(--it-manage)]",
    href: "/question/club/it-management",
  },
  {
    id: "design",
    label: "콘텐츠디자인과",
    borderColor: "border-[var(--cd)]",
    href: "/question/club/design",
  },
];

export default function ClubMajorSelectPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);

  const handleNext = () => {
    const major = MAJORS.find((m) => m.id === selected);
    if (major) {
      router.push(major.href);
    }
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex flex-col flex-1 w-full max-w-97.5 mx-auto">
        <YearBadge align="center" />

        <main className="flex flex-col px-4 pt-6">
          <h2 className="text-xl font-semibold text-black mb-4 text-center">
            어느 학과에 관심이 있으신가요?
          </h2>

          <div className="flex flex-col gap-4">
            {MAJORS.map((major) => (
              <MajorSelectOption
                key={major.id}
                label={major.label}
                borderColor={major.borderColor}
                selected={selected === major.id}
                onClick={() => setSelected(major.id)}
              />
            ))}
          </div>
        </main>
        <QuestionFooterNav
          onPrev={handleBack}
          onNext={handleNext}
          canNext={selected !== null}
        />
      </div>
    </div>
  );
}