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
import CalendlyEmbed from "./calendly";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "mx-auto z-50 left-0 right-0 bg-[#0e0e0e99] py-2 md:py-4 fixed top-0 w-full px-4 lg:px-32",
        {
          "bg-[#a6a6a6] lg:bg-[#0e0e0e99]": isOpen,
        }
      )}
    >
      <div className="max-w-screen-2xl flex items-center justify-between mx-auto">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/wsa-logo.svg"
            alt="White Swan Advisors"
            width={52}
            height={52}
            className="cursor-pointer w-[42px] h-[42px] sm:w-[52px] sm:h-[52px] object-contain"
          />
          <span className="text-white font-serif font-bold text-lg sm:text-2xl tracking-tight whitespace-nowrap">
            White Swan Advisors
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-4">
          {NAV_LINKS.map((item, index) => {
            if (item.path === "/contact") {
              return (
                <CalendlyEmbed key={index}>
                  <Button
                    key={index}
                    variant="ghost"
                    className="items-start p-0 h-fit text-white text-[16px] hover:text-royalblue font-normal hover:bg-transparent "
                  >
                    {item.name}
                  </Button>
                </CalendlyEmbed>
              );
            }
            return (
              <Link
                key={index}
                href={item.path}
                className={cn(
                  "text-white hover:text-royalblue transition-all",
                  {
                    "text-royalblue underline underline-offset-4":
                      pathname === item.path,
                  }
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <NavSheet isOpen={isOpen} setIsOpen={setIsOpen}>
          <Hamburger
            size={24}
            color="#fff"
            toggled={isOpen}
            toggle={setIsOpen}
          />
        </NavSheet>
      </div>
    </div>
  );
};

export default Navbar;
