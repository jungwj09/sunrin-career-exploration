import { Suspense } from "react";
import ClubResultView from "@/components/result/ClubResultView";
import infosecQuestions from "@/data/club/infosec/questions.json";
import infosecProfiles from "@/data/club/infosec/profiles.json";
import type { QuestionData } from "@/lib/question/types";
import type { ClubProfile } from "@/lib/question/clubResultHelpers";

export default function InfosecClubResultPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-(--infosec)" /></div>}>
      <ClubResultView
        questionData={infosecQuestions as QuestionData}
        profiles={infosecProfiles.clubs as ClubProfile[]}
        accentColor="var(--infosec)"
      />
    </Suspense>
  );
}