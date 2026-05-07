interface QuestionOptionItemProps {
  index: number;
  text: string;
  selected: boolean;
  onClick: () => void;
  accentColor?: string;
}

export default function QuestionOptionItem({
  index,
  text,
  selected,
  onClick,
  accentColor = "var(--sunrin-green)",
}: QuestionOptionItemProps) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-start gap-2.5 px-2.5 py-3.75
        rounded-[15px] text-left transition-all
        bg-[rgba(142,142,142,0.15)]
        border-2
        ${selected ? "bg-white" : "border-transparent"}
      `}
      style={selected ? { borderColor: accentColor } : {}}
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