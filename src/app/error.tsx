"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-lg w-full text-center p-8 rounded-2xl">
        <h1 className="text-3xl font-extrabold text-black">문제가 발생했습니다</h1>
        <p className="mt-2 text-lg font-semibold text-black">예기치 못한 오류가 발생했습니다</p>
        <p className="mt-2 text-sm text-black">홈으로 돌아가시거나, 아래 버튼으로 다시 시도해 주세요.</p>

        <div className="mt-6 flex justify-center gap-3">
          <Link href="/" className="inline-block px-4 py-2 rounded-md bg-[#111827] text-white font-medium">홈으로 돌아가기</Link>
          <button onClick={reset} className="inline-block px-4 py-2 rounded-md bg-[#00A05C] text-white font-medium">다시 시도</button>
        </div>
      </div>
    </div>
  );
}