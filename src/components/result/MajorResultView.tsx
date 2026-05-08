"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import YearBadge from "@/components/shared/YearBadge";
import ResultRankCard from "@/components/result/ResultRankCard";
import ResultMatchBar from "@/components/result/ResultMatchBar";
import ResultCta from "@/components/result/ResultCta";
import ResultHomeButton from "@/components/result/ResultHomeButton";
import { calcMajorScore, scoreToRanked } from "@/lib/question/calculateScore";
import { buildMajorResults, getClubHref } from "@/lib/question/majorResultHelpers";
import majorQuestionsRaw from "@/data/major/questions.json";
import type { MajorQuestionData } from "@/lib/question/types";

const majorQuestions = majorQuestionsRaw as MajorQuestionData;
const ALL_MAJOR_IDS = ["infosec", "software", "it-management", "design"];

export default function MajorResultView() {
  const searchParams = useSearchParams();
  const answersParam = searchParams.get("answers") ?? "";

  const answers = useMemo(() => {
    return answersParam.split(",").map((v) => (v === "" ? null : Number(v)));
  }, [answersParam]);

  const results = useMemo(() => {
    const score = calcMajorScore(answers, majorQuestions.questions);
    const ranked = scoreToRanked(score, ALL_MAJOR_IDS);
    return buildMajorResults(ranked);
  }, [answers]);

  const topResult = results[0];

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

          {topResult && (
            <ResultCta
              majorLabel={topResult.label}
              href={getClubHref(topResult.id)}
              accentColor={`var(${topResult.colorVar})`}
            />
          )}

          <ResultHomeButton />
        </main>
      </div>
    </div>
  );
}