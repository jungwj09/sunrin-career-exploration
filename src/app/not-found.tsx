import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-lg w-full text-center p-8">
        <h1 className="text-3xl font-extrabold text-black">404</h1>
        <p className="mt-2 text-lg font-semibold text-black">페이지를 찾을 수 없습니다</p>
        <p className="mt-2 text-sm text-black">요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.</p>
        <div className="mt-6 flex justify-center gap-3">
          <Link href="/" className="inline-block px-4 py-2 rounded-md bg-[#111827] text-white font-medium">홈으로 돌아가기</Link>
        </div>
      </div>
    </div>
  );
}
