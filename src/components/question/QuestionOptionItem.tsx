interface QuestionOptionItemProps {
  index: number;
  text: string;
  selected: boolean;
  onClick: () => void;
  accentColor?: string;
  selectedBgColor?: string; // ex. "rgba(228, 100, 0, 0.3)"
}

export default function QuestionOptionItem({
  index,
  text,
  selected,
  onClick,
  accentColor = "var(--sunrin-green)",
  selectedBgColor = "rgba(0, 160, 92, 0.3)",
}: QuestionOptionItemProps) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-start gap-2.5 px-2.5 py-3.75
        rounded-[15px] text-left transition-all
        border-2
      `}
      style={{
        backgroundColor: selected ? selectedBgColor : "rgba(142, 142, 142, 0.15)",
        borderColor: selected ? accentColor : "transparent",
      }}
    >
      <span
        className="text-sm font-bold shrink-0 w-5 text-center"
        style={{ color: selected ? accentColor : "#999999" }}
      >
        {index + 1}
      </span>
      <span className="text-base font-regular text-black leading-snug">
        {text}
      </span>
    </button>
  );
}