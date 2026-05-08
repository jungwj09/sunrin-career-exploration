import infosecQuestions from "./club/infosec/questions.json";
import softwareQuestions from "./club/software/questions.json";
import itManagementQuestions from "./club/it-management/questions.json";
import designQuestions from "./club/design/questions.json";
import type { QuestionData, MajorKey } from "@/lib/question/types";

const clubQuestionMap: Record<MajorKey, QuestionData> = {
  infosec: infosecQuestions as QuestionData,
  software: softwareQuestions as QuestionData,
  "it-management": itManagementQuestions as QuestionData,
  design: designQuestions as QuestionData,
};

export function getClubQuestionData(major: MajorKey): QuestionData | null {
  return clubQuestionMap[major] ?? null;
}

export const MAJOR_KEYS: MajorKey[] = [
  "infosec",
  "software",
  "it-management",
  "design",
];