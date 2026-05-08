import Link from "next/link";

interface ResultCtaProps {
  majorLabel: string; // "소프트웨어과"
  href: string; // "/question/club/software"
}

export default function ResultCta({ majorLabel, href }: ResultCtaProps) {
  return (
    <Link
      href={href}
      className="w-full flex items-center justify-center py-4 rounded-2xl border-2 border-black bg-white text-base font-semibold text-black text-center"
    >
      나에게 맞는{" "}
      <span className="mx-1 underline underline-offset-2">{majorLabel}</span>{" "}
      전공동아리 탐색하기
    </Link>
  );
}