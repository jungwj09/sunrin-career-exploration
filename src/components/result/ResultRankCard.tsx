"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import ResultHeader from "@/components/result/ResultHeader";
import ResultTagGroup from "@/components/result/ResultTagGroup";
import SectionTitle from "@/components/shared/SectionTitle";

interface ResultRankCardProps {
  rank: number;
  label: string;
  percent: number;
  borderColor: string;
  keywords: string[];
  // 학과 추천 1순위용
  fits?: string[];
  subjects?: string[]; // 학과용 "이런 걸 배워요"
  careers?: string[]; // 학과용 "이런 진로로 이어져요"
  // 동아리 추천 1순위용
  activities?: string[]; // 동아리용 "주요 활동"
}

function DetailContent({
  borderColor,
  fits,
  subjects,
  careers,
  activities,
}: Pick<ResultRankCardProps, "borderColor" | "fits" | "subjects" | "careers" | "activities">) {
  return (
    <>
      {fits && fits.length > 0 && (
        <div className="mt-4">
          <SectionTitle>이런 사람에게 잘 맞아요</SectionTitle>
          <ul className="flex flex-col gap-1 pl-1">
            {fits.map((fit) => (
              <li key={fit} className="text-sm text-black flex gap-1.5">
                <span className="shrink-0 mt-0.5">•</span>
                <span>{fit}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {subjects && subjects.length > 0 && (
        <div className="mt-4">
          <SectionTitle>이런 걸 배워요</SectionTitle>
          <ResultTagGroup tags={subjects} borderColor={borderColor} />
        </div>
      )}

      {careers && careers.length > 0 && (
        <div className="mt-4">
          <SectionTitle>이런 진로로 이어져요</SectionTitle>
          <ResultTagGroup tags={careers} borderColor={borderColor} />
        </div>
      )}

      {activities && activities.length > 0 && (
        <div className="mt-4">
          <SectionTitle>주요 활동</SectionTitle>
          <ResultTagGroup tags={activities} borderColor={borderColor} />
        </div>
      )}
    </>
  );
}

export default function ResultRankCard({
  rank,
  label,
  percent,
  borderColor,
  keywords,
  fits,
  subjects,
  careers,
  activities,
}: ResultRankCardProps) {
  const isFirst = rank === 1;
  const [expanded, setExpanded] = useState(false);

  const hasDetail =
    (fits && fits.length > 0) ||
    (subjects && subjects.length > 0) ||
    (careers && careers.length > 0) ||
    (activities && activities.length > 0);

  return (
    <div
      className="rounded-2xl border-2 bg-white flex flex-col overflow-hidden shadow-sm transition-shadow"
      style={{ borderColor }}
    >
      <div className="px-4 py-4">
        <ResultHeader
          rank={rank}
          label={label}
          percent={percent}
          borderColor={borderColor}
        />

        <div className="mt-4">
          <ResultTagGroup tags={keywords} borderColor={borderColor} />
        </div>

        {/* 1순위 카드는 항상 상세 정보 표시 */}
        {isFirst && (
          <DetailContent
            borderColor={borderColor}
            fits={fits}
            subjects={subjects}
            careers={careers}
            activities={activities}
          />
        )}

        {/* 2순위 이하 카드는 더 알아보기 버튼 */}
        {!isFirst && hasDetail && (
          <>
            {expanded && (
              <DetailContent
                borderColor={borderColor}
                fits={fits}
                subjects={subjects}
                careers={careers}
                activities={activities}
              />
            )}

            <button
              onClick={() => setExpanded((v) => !v)}
              className="mt-4 w-full flex items-center justify-center gap-1.5 py-2 rounded-xl text-sm font-medium transition-colors"
              style={{
                color: borderColor,
                backgroundColor: expanded ? "transparent" : undefined,
                border: `1.5px solid ${borderColor}`,
              }}
            >
              {expanded ? (
                <>
                  <span>접기</span>
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>더 알아보기</span>
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
