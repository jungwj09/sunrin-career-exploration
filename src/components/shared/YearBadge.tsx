import Image from "next/image";

interface AppHeaderProps {
  align?: "left" | "center";
}

export default function AppHeader({
  align = "center",
}: AppHeaderProps) {
  return (
    <div
      className={`w-full px-4 pt-12.5 pb-2 flex ${
        align === "center" ? "justify-center" : "justify-start"
      }`}
    >
      <div className="p-0.5 rounded-full bg-[linear-gradient(90deg,var(--sunrin-green)_0%,var(--sunrin-blue)_50%,var(--sunrin-red)_100%)]">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.75 py-2">
          <Image
            src="/sunrin.png"
            alt="sunrin"
            width={22}
            height={22}
            className="shrink-0"
            loading="eager"
          />

          <span className="text-base font-semibold text-black tracking-tight">
            2026 선린인터넷고 진로체험
          </span>
        </div>
      </div>
    </div>
  );
}