import MajorQuestionView from "@/components/question/MajorQuestionView";
import majorQuestions from "@/data/major/questions.json";
import type { MajorQuestionData } from "@/lib/question/types";

const data = majorQuestions as MajorQuestionData;

export default function MajorQuestionPage() {
  return (
    <MajorQuestionView
      questions={data.questions}
      accentColor="var(--sunrin-red)"
      resultPath="/result/major"
    />
  );
}