import { Suspense } from "react";
import ClubResultView from "@/components/result/ClubResultView";
import softwareQuestions from "@/data/club/software/questions.json";
import softwareProfiles from "@/data/club/software/profiles.json";
import type { QuestionData } from "@/lib/question/types";
import type { ClubProfile } from "@/lib/question/clubResultHelpers";

export default function SoftwareClubResultPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-(--sw)" /></div>}>
      <ClubResultView
        questionData={softwareQuestions as QuestionData}
        profiles={softwareProfiles.clubs as ClubProfile[]}
        accentColor="var(--sw)"
      />
    </Suspense>
  );
}