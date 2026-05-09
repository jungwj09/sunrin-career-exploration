import { notFound } from "next/navigation";
import { use } from "react";
import QuestionView from "@/components/question/QuestionView";
import { getClubQuestionData, MAJOR_KEYS } from "@/data/index";
import type { MajorKey } from "@/lib/question/types";

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

interface Props {
  params: Promise<{ major: string }>;
}

export function generateStaticParams() {
  return MAJOR_KEYS.map((major) => ({ major }));
}

export default function ClubQuestionPage({ params }: Props) {
  const { major } = use(params);
  const questionData = getClubQuestionData(major as MajorKey);

  if (!questionData) return notFound();

  const questions = questionData.questions.map((q) => ({
    id: q.id,
    text: q.text,
    options: q.options.map((opt) => ({ text: opt.text, value: opt.club })),
  }));

  return (
    <QuestionView
      questions={questions}
      accentColor={ACCENT_COLOR[major as MajorKey]}
      selectedBgColor={SELECTED_BG_COLOR[major as MajorKey]}
      storageKey="club_answers"
      resultPath={`/result/club/${major}`}
    />
  );
}