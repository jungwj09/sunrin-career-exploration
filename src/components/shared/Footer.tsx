export default function Footer() {
  const currentYear = new Date().getFullYear();
  const startYear = 2026;

  return (
    <footer className="bg-[#F5F5F5]">
      <div className="max-w-4xl mx-auto px-4 py-6 flex flex-col items-center justify-center text-sm text-black">
        <p className="text-center">
          ©{" "}
          {startYear === currentYear
            ? startYear
            : `${startYear}-${currentYear}`}{" "}
          Career Exploration. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
