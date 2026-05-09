import QuestionView from "@/components/question/QuestionView";
import majorQuestions from "@/data/major/questions.json";
import type { MajorQuestionData } from "@/lib/question/types";

const data = majorQuestions as MajorQuestionData;

export default function MajorQuestionPage() {
  const questions = data.questions.map((q) => ({
    id: q.id,
    text: q.text,
    options: q.options.map((opt) => ({ text: opt.text, value: opt.major })),
  }));

  return (
    <QuestionView
      questions={questions}
      accentColor="var(--sunrin-red)"
      selectedBgColor="rgba(241, 89, 35, 0.30)"
      storageKey="major_answers"
      resultPath="/result/major"
    />
  );
}