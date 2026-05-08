interface PillProps {
  label: string;
  borderColor?: string;
}

export default function Pill({ label, borderColor }: PillProps) {
  return (
    <span
      className="inline-flex items-center px-3 py-1 rounded-full border text-sm font-medium text-black bg-white"
      style={{ borderColor: borderColor ?? "#d1d5db" }}
    >
      {label}
    </span>
  );
}