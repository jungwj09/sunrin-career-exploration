"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import YearBadge from "@/components/shared/YearBadge";
import ResultRankCard from "@/components/result/ResultRankCard";
import ResultMatchBar from "@/components/result/ResultMatchBar";
import { calcClubScore, scoreToRanked } from "@/lib/question/calculateScore";
import { buildClubResults } from "@/lib/question/clubResultHelpers";
import type { QuestionData } from "@/lib/question/types";
import type { ClubProfile } from "@/lib/question/clubResultHelpers";

interface ClubResultViewProps {
  questionData: QuestionData;
  profiles: ClubProfile[];
  accentColor: string; // "var(--sw)" 등
}

export default function ClubResultView({
  questionData,
  profiles,
  accentColor,
}: ClubResultViewProps) {
  const searchParams = useSearchParams();
  const answersParam = searchParams.get("answers") ?? "";

  const answers = useMemo(() => {
    return answersParam.split(",").map((v) => (v === "" ? null : Number(v)));
  }, [answersParam]);

  const results = useMemo(() => {
    const allClubIds = profiles.map((p) => p.id);
    const score = calcClubScore(answers, questionData.questions);
    const ranked = scoreToRanked(score, allClubIds);
    return buildClubResults(ranked, profiles);
  }, [answers, questionData, profiles]);

  const matchBarItems = results.map((r) => ({
    label: r.label,
    percent: r.percent,
    color: accentColor,
  }));

  return (
    <div className="flex flex-col min-h-screen bg-[#f5f5f5]">
      <div className="flex flex-col flex-1 w-full max-w-97.5 mx-auto">
        <YearBadge align="center" />

        <main className="flex flex-col px-4 pt-4 pb-10 gap-4">
          {results.map((item) => (
            <ResultRankCard
              key={item.id}
              rank={item.rank}
              label={item.label}
              percent={item.percent}
              borderColor={accentColor}
              keywords={item.keywords}
              fits={item.fits}
              activities={item.activities}
            />
          ))}

          <ResultMatchBar items={matchBarItems} />
        </main>
      </div>
    </div>
  );
}