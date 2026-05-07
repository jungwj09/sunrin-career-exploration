export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00A05C]"></div>
      <p className="mt-4 text-gray-600">로딩 중...</p>
    </div>
  );
}