import YearBadge from "@/components/shared/YearBadge";
import IntroHero from "@/components/home/IntroHero";
import StartChoiceCard from "@/components/home/StartChoiceCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex flex-col flex-1 w-full max-w-97.5 mx-auto">
        <YearBadge align="left" />
        <main className="flex flex-col flex-1 px-0">
          <IntroHero />
          <StartChoiceCard />

          <section className="px-6">
            <p className="text-sm font-regular text-black">
              본 테스트는 자신의 적성과 흥미를 가볍게 탐색해볼 수 있도록 돕기 위한 참고용입니다.
              <br />
              결과에 너무 얽매이기보다는, 다양한 가능성을 생각해보는 계기로 활용해 주세요.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}