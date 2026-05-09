interface ResultHeaderProps {
  rank: number;
  label: string;
  percent: number;
  borderColor: string;
}

export default function ResultHeader({ rank, label, percent, borderColor }: ResultHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#f7f7f7]" style={{ border: `2px solid ${borderColor}` }}>
          <span className="text-base font-medium text-black">{rank}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-base font-semibold text-black">{label}</span>
        </div>
      </div>

      <div className="flex flex-col items-end">
        <span className="text-sm text-black">적합도</span>
        <span className="text-lg font-semibold text-black">{percent}%</span>
      </div>
    </div>
  );
}
