import Link from "next/link";

// TODO: 디자인 수정하기
export default function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>페이지를 찾을 수 없습니다.</p>
      <Link href="/">홈으로 돌아가기</Link>
    </div>
  );
}