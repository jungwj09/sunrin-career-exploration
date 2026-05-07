"use client";

export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h2 className="text-2xl font-bold text-black mb-4">오류가 발생했습니다</h2>
      <p className="text-gray-600 mb-6 text-center">
        문제가 발생했습니다. 다시 시도해주세요.
      </p>
      <button
        onClick={reset}
        className="px-6 py-3 bg-[#00A05C] text-white rounded-lg font-medium hover:bg-[#008A4F] transition-colors"
      >
        다시 시도
      </button>
    </div>
  );
}