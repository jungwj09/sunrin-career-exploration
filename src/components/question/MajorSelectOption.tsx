interface MajorSelectOptionProps {
  label: string;
  borderColor: string;
  selectedBgColor: string; // ex. "rgba(228, 100, 0, 0.3)"
  selected: boolean;
  onClick: () => void;
}

export default function MajorSelectOption({
  label,
  borderColor,
  selectedBgColor,
  selected,
  onClick,
}: MajorSelectOptionProps) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full rounded-[15px] px-4 py-3.75
        text-base font-medium text-black
        border-2 transition-all
        ${borderColor}
      `}
      style={selected ? { backgroundColor: selectedBgColor } : { backgroundColor: "white" }}
    >
      {label}
    </button>
  );
}