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

  return (
    <div
      className="rounded-2xl border-2 px-5 py-5 bg-white flex flex-col gap-4"
      style={{ borderColor }}
    >
      <ResultHeader
        rank={rank}
        label={label}
        percent={percent}
        borderColor={borderColor}
      />

      <ResultTagGroup tags={keywords} borderColor={borderColor} />

      {isFirst && fits && fits.length > 0 && (
        <div>
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

      {isFirst && subjects && subjects.length > 0 && (
        <div>
          <SectionTitle>이런 걸 배워요</SectionTitle>
          <ResultTagGroup tags={subjects} borderColor={borderColor} />
        </div>
      )}

      {isFirst && careers && careers.length > 0 && (
        <div>
          <SectionTitle>이런 진로로 이어져요</SectionTitle>
          <ResultTagGroup tags={careers} borderColor={borderColor} />
        </div>
      )}

      {isFirst && activities && activities.length > 0 && (
        <div>
          <SectionTitle>주요 활동</SectionTitle>
          <ResultTagGroup tags={activities} borderColor={borderColor} />
        </div>
      )}
    </div>
  );
}