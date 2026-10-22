import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transactions | White Swan Advisors",
  description:
    "Summary of recent transactions in the private and public sectors, equity raises, debt raises, M&A advisory.",
};

interface TransactionRow {
  client: string;
  amount: string;
  industry: string;
  type: string;
  website?: string;
}

interface TransactionSection {
  title: string;
  rows: TransactionRow[];
}

const TRANSACTION_SECTIONS: TransactionSection[] = [
  {
    title: "ENERGY AND INFRASTRUCTURE",
    rows: [
      {
        client: "Athon",
        amount: "$50.0M",
        industry: "Energy & Utilities / Renewable Energy",
        type: "Advisory – Equity",
        website: "https://www.athonenergia.com.br",
      },
      {
        client: "Solartia",
        amount: "$300.0M",
        industry: "Energy & Utilities / Infrastructure / Renewable Energy",
        type: "Advisory – Project Finance & Equity",
        website: "https://www.solartia.com",
      },
      {
        client: "Zero Waste Inc.",
        amount: "$75.0M",
        industry: "Energy & Utilities / Renewable Energy",
        type: "Advisory – Project Finance & Equity",
        website: "https://zerowastellc.com/",
      },
      {
        client: "Oil & Gas Operator (GOM)*",
        amount: "$200.0M",
        industry: "Oil & Gas",
        type: "Financial Advisory",
      },
      {
        client: "IX Water",
        amount: "Undisclosed",
        industry: "Energy & Utilities / Waste Water Treatment",
        type: "Advisory – Equity",
        website: "https://www.ixpower.com",
      },
    ],
  },
  {
    title: "SPACE",
    rows: [
      {
        client: "ExLabs",
        amount: "Undisclosed",
        industry: "Aerospace / Space",
        type: "Advisory – Venture Equity",
        website: "https://exlabs.space/",
      },
      {
        client: "Orbital Transports",
        amount: "Undisclosed",
        industry: "SaaS / Digital Marketplace / Aerospace & Defense",
        type: "Advisory – Equity",
        website: "https://www.orbitaltransports.com",
      },
    ],
  },
  {
    title: "THE TRADES",
    rows: [
      {
        client: "Alphalete Plumbing & Drain",
        amount: "Undisclosed",
        industry: "Home Services / Plumbing & HVAC",
        type: "Advisory – Debt Restructuring",
        website: "https://www.alphaleteplumbing.com",
      },
      {
        client: "Consumer Products Platform*",
        amount: "$42.0M",
        industry: "Consumer",
        type: "Capital Raise",
      },
      {
        client: "Manufacturing Company*",
        amount: "$20.0M",
        industry: "Manufacturing",
        type: "Capital Raise & Financial Advisory",
      },
    ],
  },
  {
    title: "DEBT",
    rows: [
      {
        client: "Underground Printing",
        amount: "$9.0M",
        industry: "Consumer Goods / Custom Apparel & Printing",
        type: "Advisory – Debt",
        website: "https://www.undergroundshirts.com",
      },
      {
        client: "Boom Mobile",
        amount: "$7.0M",
        industry: "Telecommunications / Wireless Services",
        type: "Advisory – Equity & Debt",
        website: "https://boom.us/",
      },
      {
        client: "The AIM Organization",
        amount: "Undisclosed",
        industry: "Healthcare Services",
        type: "Advisory – Debt Restructuring + Venture Equity",
        website: "https://www.theaimorganization.com",
      },
    ],
  },
];

export default function TransactionsPage() {
  return (
    <main className="min-h-screen bg-[#14181f] text-white pt-28 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header Section: Title & Description on Left, Large WSA Logo on Right */}
        <div
          data-aos="fade-down"
          className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-6 mb-12 sm:mb-16"
        >
          <div className="max-w-2xl space-y-3">
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.15] font-serif">
              Recent Track Record
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Summary of recent transactions in the private and public sectors, equity raises, debt raises, M&amp;A advisory.
            </p>
          </div>

          <div className="shrink-0 self-start md:self-center">
            <Image
              src="/wsa-logo-vector.svg"
              alt="White Swan Advisors Logo"
              width={140}
              height={140}
              className="w-24 h-24 sm:w-32 sm:h-32 object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* 4 Grouped Sections */}
        <div className="space-y-12 sm:space-y-16">
          {TRANSACTION_SECTIONS.map((section, sIdx) => (
            <section
              key={section.title}
              data-aos="fade-up"
              data-aos-delay={sIdx * 100}
              className="space-y-4"
            >
              {/* Gold Section Header & Horizontal Accent Line */}
              <div>
                <h2 className="text-[#c9a55a] text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase">
                  {section.title}
                </h2>
                <div className="h-[1px] bg-[#c9a55a] mt-2.5 mb-1" />
              </div>

              {/* Responsive Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[640px]">
                  <thead>
                    <tr className="text-xs text-slate-400 border-b border-white/10">
                      <th className="py-2.5 pr-4 font-normal w-[24%]">Client</th>
                      <th className="py-2.5 px-4 font-normal w-[18%]">Amount (USD)</th>
                      <th className="py-2.5 px-4 font-normal w-[36%]">Industry</th>
                      <th className="py-2.5 pl-4 font-normal w-[22%]">Type</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.06] text-xs sm:text-sm">
                    {section.rows.map((row, rIdx) => (
                      <tr
                        key={rIdx}
                        className="hover:bg-white/[0.02] transition-colors"
                      >
                        <td className="py-3.5 pr-4 font-bold text-white whitespace-nowrap">
                          {row.website ? (
                            <a
                              href={row.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white hover:text-[#c9a55a] transition-colors underline-offset-4 hover:underline"
                            >
                              {row.client}
                            </a>
                          ) : (
                            row.client
                          )}
                        </td>
                        <td className="py-3.5 px-4 font-bold text-white whitespace-nowrap">
                          {row.amount}
                        </td>
                        <td className="py-3.5 px-4 text-slate-300">
                          {row.industry}
                        </td>
                        <td className="py-3.5 pl-4 text-slate-300">
                          {row.type}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Small Gold Button under section (Right-aligned) */}
              <div className="flex justify-end pt-2">
                <Link
                  href="/choice"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded border border-[#c9a55a] text-[#c9a55a] hover:bg-[#c9a55a]/10 hover:border-[#dfbb72] text-[11px] sm:text-xs font-semibold tracking-wider uppercase shadow-[0_0_12px_rgba(201,165,90,0.35)] hover:shadow-[0_0_18px_rgba(201,165,90,0.6)] transition-all"
                >
                  <span>I&apos;M READY TO RAISE</span>
                  <span className="text-sm">→</span>
                </Link>
              </div>
            </section>
          ))}
        </div>

        {/* Asterisks / Prior-firms Disclaimer */}
        <div data-aos="fade-up" className="pt-8 pb-14">
          <p className="text-xs text-slate-400 italic leading-relaxed">
            *Certain investment banking transactions were executed by principals at prior firms, and some companies may not be named at their request.
          </p>
        </div>

        {/* Bottom CTA Block */}
        <div
          data-aos="fade-up"
          className="flex flex-col items-center text-center pt-8 pb-4 border-t border-white/10"
        >
          <Link
            href="/choice"
            className="inline-block px-10 py-4 rounded-xl bg-white text-[#0c131c] border border-[#c9a55a] hover:border-[#dfbb72] font-bold text-sm sm:text-base tracking-wider uppercase shadow-[0_0_20px_rgba(201,165,90,0.5)] hover:bg-slate-100 hover:shadow-[0_0_30px_rgba(201,165,90,0.75)] transition-all duration-200 active:scale-[0.98]"
          >
            I&apos;M READY TO RAISE
          </Link>
          <p className="text-xs sm:text-sm text-slate-400 mt-3 font-normal">
            We run the raise, you run your company.
          </p>
        </div>
      </div>
    </main>
  );
}
