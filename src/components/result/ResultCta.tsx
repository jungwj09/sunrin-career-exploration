import Link from "next/link";

interface ResultCtaProps {
  majorLabel: string;
  href: string;
  accentColor: string;
}

export default function ResultCta({ majorLabel, href, accentColor }: ResultCtaProps) {
  return (
    <Link
      href={href}
      className="w-full flex items-center justify-center py-4 rounded-2xl border-2 border-black bg-white text-base font-semibold text-black text-center leading-snug"
    >
      <span className="flex flex-wrap justify-center gap-x-1">
        <span>나에게 맞는</span>
        <span className="underline underline-offset-2" style={{ color: accentColor }}>
          {majorLabel}
        </span>
        <span>전공동아리 탐색하기</span>
      </span>
    </Link>
  );
}