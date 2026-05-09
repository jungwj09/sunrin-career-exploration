import Link from "next/link";

export default function ResultHomeButton() {
  return (
    <Link
      href="/"
      className="w-full flex items-center justify-center py-4 rounded-2xl border-2 border-[rgba(142,142,142,0.5)] bg-white text-base font-medium text-black text-center"
    >
      홈화면으로 돌아가기
    </Link>
  );
}