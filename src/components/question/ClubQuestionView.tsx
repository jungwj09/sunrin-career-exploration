"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import YearBadge from "@/components/shared/YearBadge";
import HomeButton from "@/components/shared/HomeButton";
import QuestionProgress from "@/components/question/QuestionProgress";
import QuestionOptionItem from "@/components/question/QuestionOptionItem";
import QuestionFooterNav from "@/components/question/QuestionFooterNav";
import type { QuestionData, MajorKey } from "@/lib/question/types";

const ACCENT_COLOR: Record<MajorKey, string> = {
  infosec: "var(--infosec)",
  software: "var(--sw)",
  "it-management": "var(--it-manage)",
  design: "var(--cd)",
};

interface ClubQuestionViewProps {
  major: MajorKey;
  questionData: QuestionData;
}

export default function ClubQuestionView({
  major,
  questionData,
}: ClubQuestionViewProps) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questionData.questions.length).fill(null)
  );

  const accentColor = ACCENT_COLOR[major];
  const currentQuestion = questionData.questions[currentIndex];
  const currentAnswer = answers[currentIndex];
  const total = questionData.questions.length;

  const handleSelect = (optionIndex: number) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = optionIndex;
      return next;
    });
  };

  const handlePrev = () => {
    if (currentIndex === 0) {
      router.back();
    } else {
      setCurrentIndex((i) => i - 1);
    }
  };

  const handleNext = () => {
    if (currentAnswer === null) return;

    if (currentIndex < total - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      const answersParam = answers
        .map((a) => (a === null ? "" : String(a)))
        .join(",");
      router.push(`/result/club/${major}?answers=${answersParam}`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex flex-col flex-1 w-full max-w-97.5 mx-auto">
        <YearBadge align="center" />
        
        <HomeButton />

        <main className="flex flex-col flex-1 px-4 pt-6">
          <div className="flex flex-col gap-4">
            <QuestionProgress
              current={currentIndex + 1}
              total={total}
              accentColor={accentColor}
            />

            <h2 className="text-xl font-semibold text-black">
              {currentQuestion.text}
            </h2>

            <div className="flex flex-col gap-4">
              {currentQuestion.options.map((option, i) => (
                <QuestionOptionItem
                  key={i}
                  index={i}
                  text={option.text}
                  selected={currentAnswer === i}
                  onClick={() => handleSelect(i)}
                  accentColor={accentColor}
                />
              ))}
            </div>
          </div>

          <QuestionFooterNav
            onPrev={handlePrev}
            onNext={handleNext}
            canNext={currentAnswer !== null}
          />
        </main>
      </div>
    </div>
  );
}