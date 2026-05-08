import Pill from "@/components/shared/Pill";

interface ResultTagGroupProps {
  tags: string[];
  borderColor?: string;
}

export default function ResultTagGroup({ tags, borderColor }: ResultTagGroupProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Pill key={tag} label={tag} borderColor={borderColor} />
      ))}
    </div>
  );
}