"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { NAV_LINKS } from "../../constants";
import NavSheet from "./nav-sheet";
import { Turn as Hamburger } from "hamburger-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "mx-auto z-50 left-0 right-0 bg-[#0c131c]/90 backdrop-blur-md border-b border-white/10 py-2 md:py-3.5 fixed top-0 w-full px-4 lg:px-32 transition-colors",
        {
          "bg-[#0c131c]": isOpen,
        }
      )}
    >
      <div className="max-w-screen-2xl flex items-center justify-between mx-auto">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/wsa-logo-vector.svg"
            alt="White Swan Advisors"
            width={52}
            height={52}
            className="cursor-pointer w-[42px] h-[42px] sm:w-[50px] sm:h-[50px] object-contain drop-shadow"
            priority
          />
          <span className="text-white font-serif font-bold text-lg sm:text-2xl tracking-tight whitespace-nowrap">
            White Swan Advisors
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_LINKS.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className={cn(
                "text-gray-300 hover:text-white transition-colors text-[15px] font-normal",
                {
                  "text-white font-semibold": pathname === item.path,
                }
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link href="/choice">
            <Button
              variant="white"
              size="sm"
              className="font-bold tracking-wider uppercase px-5 py-2 text-xs sm:text-[13px] border border-[#c9a55a] hover:border-[#dfbb72] shadow-[0_0_14px_rgba(201,165,90,0.45)] hover:shadow-[0_0_22px_rgba(201,165,90,0.7)] cursor-pointer rounded-lg transition-all duration-200"
            >
              I&apos;M READY TO RAISE
            </Button>
          </Link>
        </div>
        <div className="md:hidden">
          <Hamburger
            size={24}
            toggled={isOpen}
            toggle={setIsOpen}
            color="#fff"
          />
        </div>
        <NavSheet isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default Navbar;
