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
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            width={200}
            height={40}
            className="cursor-pointer w-[150px] sm:w-[250px] h-full object-contain"
          />
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
