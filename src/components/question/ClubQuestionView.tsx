"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import YearBadge from "@/components/shared/YearBadge";
import HomeButton from "@/components/shared/HomeButton";
import QuestionProgress from "@/components/question/QuestionProgress";
import QuestionOptionItem from "@/components/question/QuestionOptionItem";
import QuestionFooterNav from "@/components/question/QuestionFooterNav";
import type { QuestionData, MajorKey, QuestionOption } from "@/lib/question/types";

const ACCENT_COLOR: Record<MajorKey, string> = {
  infosec: "var(--infosec)",
  software: "var(--sw)",
  "it-management": "var(--it-manage)",
  design: "var(--cd)",
};

const SELECTED_BG_COLOR: Record<MajorKey, string> = {
  infosec: "rgba(228, 100, 0, 0.3)",
  software: "rgba(245, 176, 0, 0.3)",
  "it-management": "rgba(0, 175, 110, 0.3)",
  design: "rgba(39, 106, 173, 0.3)",
};

function shuffleArray<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

interface ShuffledOption extends QuestionOption {
  originalIndex: number;
}

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
  const [answers, setAnswers] = useState<(string | null)[]>(
    Array(questionData.questions.length).fill(null)
  );

  const shuffledQuestions = useMemo(() => {
    return questionData.questions.map((q) => {
      const shuffled = shuffleArray(
        q.options.map((opt, i) => ({ ...opt, originalIndex: i }))
      ) as ShuffledOption[];
      return { ...q, options: shuffled };
    });
  }, [questionData]);

  const accentColor = ACCENT_COLOR[major];
  const selectedBgColor = SELECTED_BG_COLOR[major];
  const currentQuestion = shuffledQuestions[currentIndex];
  const currentAnswer = answers[currentIndex];
  const total = shuffledQuestions.length;

  const handleSelect = (club: string) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = club;
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
      sessionStorage.setItem("club_answers", JSON.stringify(answers));
      router.push(`/result/club/${major}`);
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
                  key={option.originalIndex}
                  index={i}
                  text={option.text}
                  selected={currentAnswer === option.club}
                  onClick={() => handleSelect(option.club)}
                  accentColor={accentColor}
                  selectedBgColor={selectedBgColor}
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