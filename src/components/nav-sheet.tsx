"use client";

import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NAV_LINKS } from "../../constants";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

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
        className={cn("h-full block top-14 md:hidden py-28 z-30 bg-white", className)}
      >
        <div className="flex flex-col items-center gap-6">
          {NAV_LINKS.map(({ name, path }) => (
            <Link
              key={name}
              href={path}
              className={cn(
                "text-gray-900 hover:text-royalblue transition-all text-2xl font-medium",
                {
                  "text-royalblue font-bold": pathname === path,
                }
              )}
              onClick={() => setIsOpen(false)}
            >
              {name}
            </Link>
          ))}
          <div className="pt-4">
            <Link href="/choice" onClick={() => setIsOpen(false)}>
              <Button
                variant="white"
                size="lg"
                className="font-bold tracking-wider uppercase px-8 py-3.5 text-sm border border-[#c9a55a] hover:border-[#dfbb72] shadow-[0_0_18px_rgba(201,165,90,0.5)] hover:shadow-[0_0_26px_rgba(201,165,90,0.75)] cursor-pointer transition-all duration-200"
              >
                I&apos;M READY TO RAISE
              </Button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavSheet;
