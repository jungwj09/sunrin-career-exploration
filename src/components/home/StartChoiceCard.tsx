"use client";

import Link from "next/link";

interface ChoiceButtonProps {
  href: string;
  topText: string;
  bottomText: string;
  bgColor: string;
}

function ChoiceButton({
  href,
  topText,
  bottomText,
  bgColor,
}: ChoiceButtonProps) {
  return (
    <Link
      href={href}
      className={`
        w-full max-w-87.5
        rounded-2xl px-6 py-4
        ${bgColor}
        text-center
      `}
    >
      <p className="text-base text-black font-regular mb-2">
        {topText}
      </p>

      <p className="text-base text-black font-semibold flex justify-center items-center gap-1">
        <span>→</span>
        <span>{bottomText}</span>
      </p>
    </Link>
  );
}

export default function StartChoiceCard() {
  return (
    <section className="w-full max-w-97.5 mx-auto px-4 py-10">
      <div className="bg-[rgba(142,142,142,0.1)] px-5 py-6 flex flex-col items-center">
        <p className="text-center text-base font-regular text-black mb-6">
          현재 상황에 맞게 선택해보세요
        </p>

        <div className="w-full flex flex-col gap-4 items-center">
          <ChoiceButton
            href="/question/club"
            topText="관심있는 학과가 있어요"
            bottomText="나에게 맞는 전공 동아리 탐색하기"
            bgColor="bg-[rgba(0,103,172,0.3)]"
          />
          <ChoiceButton
            href="/question/major"
            topText="가고싶은 학과를 아직 잘 모르겠어요"
            bottomText="나에게 맞는 학과 탐색하기"
            bgColor="bg-[rgba(0,160,92,0.3)]"
          />
        </div>
      </div>
    </section>
  );
}