import { Suspense } from "react";
import ClubResultView from "@/components/result/ClubResultView";
import condiQuestions from "@/data/club/design/questions.json";
import condiProfiles from "@/data/club/design/profiles.json";
import type { QuestionData } from "@/lib/question/types";
import type { ClubProfile } from "@/lib/question/clubResultHelpers";

export default function DesignClubResultPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-(--cd)" /></div>}>
      <ClubResultView
        questionData={condiQuestions as QuestionData}
        profiles={condiProfiles.clubs as ClubProfile[]}
        accentColor="var(--cd)"
      />
    </Suspense>
  );
}