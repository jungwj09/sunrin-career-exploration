interface SectionTitleProps {
  children: React.ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h3 className="text-sm font-semibold text-black mb-2">{children}</h3>
  );
}