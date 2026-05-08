import YearBadge from "@/components/shared/YearBadge";
import IntroHero from "@/components/home/IntroHero";
import StartChoiceCard from "@/components/home/StartChoiceCard";
import { Info } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex flex-col flex-1 w-full max-w-97.5 mx-auto">
        <YearBadge align="left" />
        <main className="flex flex-col flex-1 px-0">
          <IntroHero />
          <StartChoiceCard />

          <section className="px-4">
            <div className="rounded-[15px] p-4" style={{ backgroundColor: "rgba(241, 89, 35, 0.30)" }}>
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-black shrink-0 mt-0.5" />
                <p className="text-sm font-regular text-black">
                  본 테스트는 자신의 적성과 흥미를 가볍게 탐색해볼 수 있도록 돕기 위한 참고용입니다.
                  <br />
                  결과에 너무 얽매이기보다는, 다양한 가능성을 생각해보는 계기로 활용해 주세요.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}