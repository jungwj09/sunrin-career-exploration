interface QuestionProgressProps {
  current: number;
  total: number;
  accentColor?: string;
}

export default function QuestionProgress({
  current,
  total,
}: QuestionProgressProps) {
  const percent = Math.round(((current - 1) / total) * 100);

  return (
    <div className="w-full">
      <div className="mb-1.25">
        <span className="text-sm font-regular text-(--sunrin-blue)">
          질문 {current}/{total}
        </span>
      </div>

      <div className="flex items-center gap-1.25">
        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: `${percent}%`,
              backgroundColor: "var(--sunrin-green)",
            }}
          />
        </div>

        <span className="text-sm font-regular text-(--sunrin-red)">
          {percent}%
        </span>
      </div>
    </div>
  );
}