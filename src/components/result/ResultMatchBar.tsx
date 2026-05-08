interface MatchBarItem {
  label: string;
  percent: number;
  color: string;
}

interface ResultMatchBarProps {
  items: MatchBarItem[];
  title?: string;
}

export default function ResultMatchBar({ items, title = "학과별 적합도 분포" }: ResultMatchBarProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 px-5 py-5 flex flex-col gap-3">
      <h3 className="text-base font-semibold text-black mb-1">{title}</h3>
      {items.map((item, i) => (
        <div key={item.label} className="flex items-center gap-3">
          <span className="text-sm text-gray-500 w-4 shrink-0">{i + 1}</span>
          <span className="text-sm font-medium text-black w-24 shrink-0">{item.label}</span>
          <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${item.percent}%`, backgroundColor: item.color }}
            />
          </div>
          <span className="text-sm font-medium text-black w-8 text-right shrink-0">
            {item.percent}%
          </span>
        </div>
      ))}
    </div>
  );
}