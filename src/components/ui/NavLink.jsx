"use client";

// Next.js imports
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({
  text,
  href = "#",
  className,
  badgeCount = null,
  ...rest
}) => {
  // Get the current pathname to highlight the active link
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`flex gap-4 text-nowrap font-medium leading-5 items-center transition-all ease-in-out  text-start text-base py-2 px-4 w-full rounded-md hover:bg-white/10 hover:shadow-md hover:text-[#2fbcfe] ${
        pathname === href
          ? "text-[#2fbcfe] bg-white/10 shadow-md"
          : "shadow-none text-white/60 bg-transparent"
      } ${className}`}
      aria-label={text}
      {...rest}
    >
      {text}
      {badgeCount && (
        <span className="bg-[#F9FAFB] font-medium leading-[1.5rem] w-6 h-6 text-center rounded-full text-[#344054] text-xs">
          {badgeCount}
        </span>
      )}
    </Link>
  );
};

export default NavLink;
