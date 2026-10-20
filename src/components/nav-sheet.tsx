"use client";

import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NAV_LINKS } from "../../constants";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import CalendlyEmbed from "./calendly";

const NavSheet = ({
  className,
  isOpen,
  setIsOpen,
  children,
}: {
  className?: string;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  children?: React.ReactNode;
}) => {
  const pathname = usePathname();

  return (
    <Sheet onOpenChange={setIsOpen} open={isOpen}>
      <SheetTrigger className="md:hidden">{children}</SheetTrigger>
      <SheetContent
        side="top"
        className={cn("h-full block top-14 md:hidden py-32 z-30", className)}
      >
        <div className="flex flex-col items-center gap-4">
          {NAV_LINKS.map(({ name, path }) => {
            if (path === "/contact") {
              return (
                <CalendlyEmbed key={name}>
                  <Button
                    variant="ghost"
                    className="items-start p-0 h-fit text-3xl hover:text-royalblue font-normal hover:bg-transparent "
                  >
                    {name}
                  </Button>
                </CalendlyEmbed>
              );
            }
            return (
              <Link
                key={name}
                href={path}
                className={cn(
                  "text-black hover:text-royalblue transition-all text-3xl",
                  {
                    "text-royalblue": pathname === path,
                  }
                )}
                onClick={() => setIsOpen(false)}
              >
                {name}
              </Link>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavSheet;
