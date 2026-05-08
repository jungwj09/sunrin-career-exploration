import { Suspense } from "react";
import ClubResultView from "@/components/result/ClubResultView";
import itQuestions from "@/data/club/it-management/questions.json";
import itProfiles from "@/data/club/it-management/profiles.json";
import type { QuestionData } from "@/lib/question/types";
import type { ClubProfile } from "@/lib/question/clubResultHelpers";

export default function ITManagementClubResultPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-(--it-manage)" /></div>}>
      <ClubResultView
        questionData={itQuestions as QuestionData}
        profiles={itProfiles.clubs as ClubProfile[]}
        accentColor="var(--it-manage)"
      />
    </Suspense>
  );
}