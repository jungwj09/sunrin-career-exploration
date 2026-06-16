"use client";

import { useMemo, useEffect, useState, startTransition } from "react";
import { useRouter } from "next/navigation";
import YearBadge from "@/components/shared/YearBadge";
import ResultRankCard from "@/components/result/ResultRankCard";
import ResultMatchBar from "@/components/result/ResultMatchBar";
import ResultHomeButton from "@/components/result/ResultHomeButton";
import { calcClubScore, scoreToRanked } from "@/lib/question/calculateScore";
import { buildClubResults } from "@/lib/question/clubResultHelpers";
import type { QuestionData } from "@/lib/question/types";
import type { ClubProfile } from "@/lib/question/clubResultHelpers";

interface ClubResultViewProps {
  questionData: QuestionData;
  profiles: ClubProfile[];
  accentColor: string;
}

export default function ClubResultView({
  profiles,
  accentColor,
}: ClubResultViewProps) {
  const router = useRouter();
  const [answers, setAnswers] = useState<(string | null)[] | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem("club_answers");
    if (!raw) {
      router.replace("/");
      return;
    }
    try {
      const parsed = JSON.parse(raw);
      startTransition(() => setAnswers(parsed));
    } catch {
      router.replace("/");
    }
  }, [router]);

  const results = useMemo(() => {
    if (!answers) return [];
    const allClubIds = profiles.map((p) => p.id);
    const score = calcClubScore(answers);
    const ranked = scoreToRanked(score, allClubIds);
    return buildClubResults(ranked, profiles);
  }, [answers, profiles]);

  if (!answers) return null;

  const matchBarItems = results.map((r) => ({
    label: r.label,
    percent: r.percent,
    color: accentColor,
  }));

  return (
    <div className="flex flex-col min-h-screen bg-[#f5f5f5]">
      <div className="flex flex-col flex-1 w-full max-w-97.5 md:max-w-2xl lg:max-w-5xl mx-auto">
        <YearBadge align="center" />

        <main className="flex flex-col px-4 md:px-6 pt-4 pb-10 gap-4">
          <div className="lg:grid lg:grid-cols-2 lg:gap-4 flex flex-col gap-4">
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
          </div>

          <ResultMatchBar items={matchBarItems} title="동아리별 적합도 분포" />
          <ResultHomeButton />
        </main>
      </div>
    </div>
  );
}
