"use client";

import { useMemo, useEffect, useState, startTransition, Fragment } from "react";
import { useRouter } from "next/navigation";
import YearBadge from "@/components/shared/YearBadge";
import ResultRankCard from "@/components/result/ResultRankCard";
import ResultMatchBar from "@/components/result/ResultMatchBar";
import ResultCta from "@/components/result/ResultCta";
import { calcMajorScore, scoreToRanked } from "@/lib/question/calculateScore";
import { buildMajorResults, getClubHref } from "@/lib/question/majorResultHelpers";

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
      startTransition(() => {
        setAnswers(parsed);
      });
    } catch (error) {
      console.error("Failed to parse major answers:", error);
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

  return (
    <div className="flex flex-col min-h-screen bg-[#f5f5f5]">
      <div className="flex flex-col flex-1 w-full max-w-97.5 mx-auto">
        <YearBadge align="center" />

        <main className="flex flex-col px-4 pt-4 pb-10 gap-4">
          {results.map((item) => (
            <Fragment key={item.id}>
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
              {item.rank === 1 && (
                <ResultCta
                  key={`cta-${item.id}`}
                  majorLabel={item.label}
                  href={getClubHref(item.id)}
                  accentColor={`var(${item.colorVar})`}
                />
              )}
            </Fragment>
          ))}

          <ResultMatchBar items={matchBarItems} />
        </main>
      </div>
    </div>
  );
}