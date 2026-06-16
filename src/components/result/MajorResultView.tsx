"use client";

import { useMemo, useEffect, useState, startTransition } from "react";
import { useRouter } from "next/navigation";
import YearBadge from "@/components/shared/YearBadge";
import ResultRankCard from "@/components/result/ResultRankCard";
import ResultMatchBar from "@/components/result/ResultMatchBar";
import ResultCta from "@/components/result/ResultCta";
import ResultHomeButton from "@/components/result/ResultHomeButton";
import { calcMajorScore, scoreToRanked } from "@/lib/question/calculateScore";
import {
  buildMajorResults,
  getClubHref,
} from "@/lib/question/majorResultHelpers";

const ALL_MAJOR_IDS = ["infosec", "software", "it-management", "design"];

export default function MajorResultView() {
  const router = useRouter();
  const [answers, setAnswers] = useState<(string | null)[] | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem("major_answers");
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
    const score = calcMajorScore(answers);
    const ranked = scoreToRanked(score, ALL_MAJOR_IDS);
    return buildMajorResults(ranked);
  }, [answers]);

  if (!answers) return null;

  const matchBarItems = results.map((r) => ({
    label: r.label,
    percent: r.percent,
    color: `var(${r.colorVar})`,
  }));

  const firstResult = results[0];
  const restResults = results.slice(1);

  return (
    <div className="flex flex-col min-h-screen bg-[#f5f5f5]">
      <div className="flex flex-col flex-1 w-full max-w-97.5 md:max-w-2xl lg:max-w-5xl mx-auto">
        <YearBadge align="center" />

        <main className="px-4 md:px-6 pt-4 pb-10">
          <div className="flex flex-col gap-4 lg:hidden">
            {results.map((item) => (
              <div key={item.id} className="flex flex-col gap-4">
                <ResultRankCard
                  rank={item.rank}
                  label={item.label}
                  percent={item.percent}
                  borderColor={`var(${item.colorVar})`}
                  keywords={item.keywords}
                  fits={item.fits}
                  subjects={item.subjects}
                  careers={item.careers}
                />
                {item.rank === 1 && (
                  <ResultCta
                    majorLabel={item.label}
                    href={getClubHref(item.id)}
                    accentColor={`var(${item.colorVar})`}
                  />
                )}
              </div>
            ))}
            <ResultMatchBar items={matchBarItems} />
            <ResultHomeButton />
          </div>

          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-6">
            <div className="flex flex-col gap-4">
              {firstResult && (
                <>
                  <ResultRankCard
                    rank={firstResult.rank}
                    label={firstResult.label}
                    percent={firstResult.percent}
                    borderColor={`var(${firstResult.colorVar})`}
                    keywords={firstResult.keywords}
                    fits={firstResult.fits}
                    subjects={firstResult.subjects}
                    careers={firstResult.careers}
                  />
                  <ResultCta
                    majorLabel={firstResult.label}
                    href={getClubHref(firstResult.id)}
                    accentColor={`var(${firstResult.colorVar})`}
                  />
                </>
              )}
            </div>

            <div className="flex flex-col gap-4">
              {restResults.map((item) => (
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
              <ResultHomeButton />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
