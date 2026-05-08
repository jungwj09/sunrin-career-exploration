import Link from "next/link";

export default function ResultHomeButton() {
  return (
    <Link
      href="/"
      className="w-full flex items-center justify-center py-4 rounded-2xl border-2 border-gray-300 bg-white text-base font-medium text-gray-500 text-center"
    >
      홈화면으로 돌아가기
    </Link>
  );
}