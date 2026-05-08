import Pill from "@/components/shared/Pill";

interface ResultHeaderProps {
  rank: number; // 1, 2, 3, 4
  label: string; // "소프트웨어과"
  percent: number; // 40
  borderColor: string;
  isFirst?: boolean; // 1순위만 상세 내용 표시 여부
}

export default function ResultHeader({
  rank,
  label,
  percent,
  borderColor,
}: ResultHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-lg font-bold text-black">{rank}순위</span>
        <Pill label={label} borderColor={borderColor} />
      </div>
      <span className="text-lg font-bold text-black">{percent}%</span>
    </div>
  );
}