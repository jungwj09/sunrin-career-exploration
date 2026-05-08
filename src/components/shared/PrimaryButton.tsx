interface PrimaryButtonProps {
  label: string;
  onClick?: () => void;
  href?: string;
}

import Link from "next/link";

export default function PrimaryButton({ label, onClick, href }: PrimaryButtonProps) {
  const className =
    "w-full py-4 rounded-2xl text-base font-semibold text-black bg-white border-2 border-black text-center transition-opacity active:opacity-70";

  if (href) {
    return (
      <Link href={href} className={className}>
        {label}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
}