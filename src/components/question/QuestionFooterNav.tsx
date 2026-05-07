interface QuestionFooterNavProps {
  onPrev: () => void;
  onNext: () => void;
  canNext: boolean;
}

export default function QuestionFooterNav({
  onPrev,
  onNext,
  canNext,
}: QuestionFooterNavProps) {
  return (
    <div className="w-full px-4 pb-10 pt-10 flex gap-4">
      <button
        onClick={onPrev}
        className="flex-1 py-2.25 rounded-[15px] text-base font-medium text-white bg-(--sunrin-blue)"
      >
        이전
      </button>
      <button
        onClick={onNext}
        disabled={!canNext}
        className={`
          flex-1 py-2.25 rounded-[15px] text-base font-medium text-white
          bg-(--sunrin-green)
          transition-opacity
          ${!canNext ? "opacity-40 cursor-not-allowed" : "opacity-100"}
        `}
      >
        다음
      </button>
    </div>
  );
}