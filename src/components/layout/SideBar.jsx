"use client";
import { useState } from "react";

// Next.js
import Image from "next/image";

// UI
import { NavLink } from "../ui";

// Nav Links
const navLinks = [
  { text: "Home", href: "/" },
  { text: "Stages & Checklist", href: "/#stages" },
  { text: "Upload Docs", href: "/#docs" },
  { text: "Preferred Vendors", href: "/#vendors" },
  { text: "Tech Stack", href: "/#tech-stack" },
  { text: "Targets", href: "/#targets" },
  { text: "Zee Sales Targets", href: "/#zee" },
  { text: "MAI Settings", href: "/#settings" },
];

export default function SideBar() {
  // State to manage the mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to close the mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <>
      {/* Mobile Menu Button */}
      <button
        type="button"
        aria-label="Menu"
        aria-controls="sidebar"
        aria-expanded={isMobileMenuOpen}
        className="absolute top-6 left-6 lg:hidden z-20"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <Image src="/menu-hamburger.svg" alt="Menu" width={32} height={32} />
      </button>
      {/* Backdrop for the mobile menu */}
      <div
        className={`bg-black/30 absolute w-full h-full z-20 ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div
        id="sidebar"
        role="navigation"
        aria-label="Sidebar Navigation"
        className={`bg-primary-dark z-30 absolute top-0 left-0 lg:static flex px-[1rem] flex-col justify-between py-[2.5rem] h-screen w-[15.5rem] 
    transition-transform duration-300 ease-in-out
    ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} 
    lg:translate-x-0
  `}
      >
        <nav className="flex-1 py-[2.5rem]">
          <ul className="space-y-3">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  text={link.text}
                  href={link.href}
                  onClick={handleLinkClick}
                />
              </li>
            ))}
            {/* Separated the last nav link from the rest of the links to add a badge to it. */}
            <li key={navLinks.length}>
              <NavLink
                text={"Pending Questions"}
                href={"/#q"}
                badgeCount={3}
                onClick={handleLinkClick}
              />
            </li>
          </ul>
        </nav>
        <NavLink text="Logout" />
      </div>
    </>
  );
}
