"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import YearBadge from "@/components/shared/YearBadge";
import ResultRankCard from "@/components/result/ResultRankCard";
import ResultMatchBar from "@/components/result/ResultMatchBar";
import ResultCta from "@/components/result/ResultCta";
import { calcMajorScore, scoreToRanked } from "@/lib/question/calculateScore";
import { buildMajorResults, getClubHref } from "@/lib/question/majorResultHelpers";

const ALL_MAJOR_IDS = ["infosec", "software", "it-management", "design"];

export default function MajorResultView() {
  const searchParams = useSearchParams();
  const answersParam = searchParams.get("answers") ?? "";

  // answers는 major 문자열 배열
  const answers = useMemo(() => {
    return answersParam.split(",").map((v) => v === "" ? null : v);
  }, [answersParam]);

  const results = useMemo(() => {
    const score = calcMajorScore(answers);
    const ranked = scoreToRanked(score, ALL_MAJOR_IDS);
    return buildMajorResults(ranked);
  }, [answers]);

  const topResults = results.filter((r) => r.rank === 1);

  const matchBarItems = results.map((r) => ({
    label: r.label,
    percent: r.percent,
    color: `var(${r.colorVar})`,
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
              borderColor={`var(${item.colorVar})`}
              keywords={item.keywords}
              fits={item.fits}
              subjects={item.subjects}
              careers={item.careers}
            />
          ))}

          <ResultMatchBar items={matchBarItems} />

          {topResults.map((result) => (
            <ResultCta
              key={result.id}
              majorLabel={result.label}
              href={getClubHref(result.id)}
              accentColor={`var(${result.colorVar})`}
            />
          ))}
        </main>
      </div>
    </div>
  );
}