import Pill from "@/components/shared/Pill";

interface ResultHeaderProps {
  rank: number;
  label: string;
  percent: number;
  borderColor: string;
}

export default function ResultHeader({ rank, label, percent, borderColor }: ResultHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-lg font-bold text-black">{rank}순위</span>
        <Pill label={label} borderColor={borderColor} variant="header" />
      </div>
      <span className="text-lg font-bold text-black">{percent}%</span>
    </div>
  );
}