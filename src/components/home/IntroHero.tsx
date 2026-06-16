export default function IntroHero() {
  return (
    <section className="w-full px-4 pt-4">
      <div className="flex items-center mb-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black">
          <span className="text-(--sunrin-blue) font-bold">
            선린인터넷고등학교 진로체험
          </span>
          에
          <br />
          오신 여러분을 진심으로 환영합니다
        </h1>
      </div>

      <p className="text-base md:text-lg text-black leading-relaxed">
        몇 가지 질문을 통해 나에게 맞는
        <br />
        학과 또는 전공 동아리를 탐색해볼 수 있어요.
      </p>
    </section>
  );
}
