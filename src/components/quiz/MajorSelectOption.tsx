interface MajorSelectOptionProps {
  label: string;
  borderColor: string;
  selected: boolean;
  onClick: () => void;
}

export default function MajorSelectOption({
  label,
  borderColor,
  selected,
  onClick,
}: MajorSelectOptionProps) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full rounded-[15px] px-6 py-3.75
        text-base font-medium text-black
        border-2 transition-all
        ${borderColor}
        ${selected ? "bg-[rgba(142,142,142,0.3)]" : "bg-white"}
      `}
    >
      {label}
    </button>
  );
}