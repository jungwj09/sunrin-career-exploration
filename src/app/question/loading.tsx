export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-white">
      <div className="flex flex-col items-center">
        <p className="mt-4 text-lg font-medium text-black">로딩 중...</p>
        <p className="mt-1 text-sm text-black">잠시만 기다려 주세요</p>
      </div>
    </div>
  );
}