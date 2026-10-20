"use client";

// Named CalendlyEmbed for legacy reasons — actually embeds a Tally form.
import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const TALLY_FORM_URL =
  "https://tally.so/embed/Me5JEX";

const CalendlyEmbed = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-screen-[90vw] max-h-[calc(100dvh-40px)] overflow-auto p-0">
        <iframe
          src={TALLY_FORM_URL}
          width="100%"
          height="900"
          frameBorder="0"
          title="Contact form"
          style={{ border: 0, minHeight: "900px" }}
        ></iframe>
      </DialogContent>
    </Dialog>
  );
};

export default CalendlyEmbed;
