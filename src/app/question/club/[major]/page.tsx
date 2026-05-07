import { notFound } from "next/navigation";
import { use } from "react";
import QuestionView from "@/components/question/QuestionView";
import { getClubQuestionData, MAJOR_KEYS } from "@/data/index";
import type { MajorKey } from "@/lib/question/types";

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

  return <QuestionView major={major as MajorKey} questionData={questionData} />;
}