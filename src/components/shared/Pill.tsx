interface PillProps {
  label: string;
  borderColor?: string;
  variant?: "header" | "tag"; // header: 학과/동아리명용(2px, semibold) / tag: 키워드 등(1px, regular)
}

export default function Pill({ label, borderColor, variant = "tag" }: PillProps) {
  const isHeader = variant === "header";
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full bg-white text-sm text-black ${
        isHeader ? "font-semibold border-2" : "font-regular border"
      }`}
      style={{
        borderColor: isHeader
          ? (borderColor ?? "#d1d5db")
          : "rgba(142, 142, 142, 0.50)",
      }}
    >
      {label}
    </span>
  );
}