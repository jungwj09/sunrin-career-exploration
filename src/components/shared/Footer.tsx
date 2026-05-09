export default function Footer() {
  return (
    <footer className="bg-[#F5F5F5]">
      <div className="max-w-4xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-black">
        <p className="text-center md:text-left">© 2026 Career Exploration. All rights reserved.</p>
        <p className="mt-2 md:mt-0 text-center md:text-right">
          Developed by{' '}
          <a
            href="https://jungwj09.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#111827] font-medium"
          >
            jungwj09
          </a>
        </p>
      </div>
    </footer>
  );
}
