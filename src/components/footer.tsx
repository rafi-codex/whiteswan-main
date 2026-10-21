import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NAV_LINKS } from "../../constants";
import CalendlyEmbed from "./calendly";

const Footer = () => {
  return (
    <footer className="bg-[#0c131c] text-white border-t border-white/10">
      {/* Existing footer content (logo + menu) */}
      <div className="flex flex-col flex-wrap gap-4 md:gap-6 md:flex-row text-center md:text-start justify-between items-center max-w-screen-2xl mx-auto py-12 px-4 lg:px-32">
        <div className="flex flex-col gap-3 items-center md:items-start">
          <div className="flex items-center gap-3">
            <Image
              src="/wsa-logo-vector.svg"
              alt="White Swan Advisors"
              width={44}
              height={44}
              className="w-[44px] h-[44px] object-contain drop-shadow"
            />
            <span className="font-serif font-bold text-xl md:text-2xl text-white tracking-tight">
              White Swan Advisors
            </span>
          </div>
          <p className="text-xs text-gray-400 hidden md:flex">
            © {new Date().getFullYear()} White Swan Advisors. All Rights Reserved.
          </p>
        </div>

        <div className="space-y-3">
          <h5 className="font-normal text-sm uppercase tracking-wider text-gray-400">Menu</h5>
          <div className="flex gap-4 lg:gap-6 flex-col md:flex-row items-center">
            {NAV_LINKS.map((item, index) => (
              <Link key={index} href={item.path} className="text-gray-300 hover:text-white truncate">
                {item.name}
              </Link>
            ))}
            <CalendlyEmbed>
              <button
                type="button"
                className="text-gray-300 hover:text-white truncate cursor-pointer bg-transparent border-none p-0 text-[15px]"
              >
                Contact
              </button>
            </CalendlyEmbed>
            <Link href="/choice" className="text-gray-300 hover:text-white truncate">
              I&apos;M READY TO RAISE
            </Link>
          </div>
        </div>

        <p className="text-xs text-gray-400 flex md:hidden">
          © {new Date().getFullYear()} White Swan Advisors. All Rights Reserved.
        </p>
      </div>

      {/* Legal disclaimer section */}
      <div className="border-t border-white/10">
        <div
          className="max-w-screen-2xl mx-auto px-6 lg:px-20 py-4 text-gray-400 space-y-3 italic text-xs leading-relaxed"
        >

          <p className="text-xs">
            Securities are offered through Finalis Securities LLC Member FINRA / SIPC. White Swan Advisors is not a
            registered broker-dealer, and Finalis Securities LLC and White Swan Advisors are separate, unaffiliated
            entities. Finalis Securities LLC, Office of Supervisory Jurisdiction is located at 450 Lexington Ave, New
            York, NY 10017, 800-962-0418.
          </p>

          <p className="text-xs flex flex-wrap gap-x-2 gap-y-1 justify-center md:justify-start">
            <a className="text-xs underline hover:no-underline" href="https://www.finalis.com/privacy" target="_blank" rel="noreferrer">
              Finalis Privacy Policy
            </a>
            <span>|</span>
            <a
              className="text-xs underline hover:no-underline"
              href="https://www.finalis.com/regulatory-disclaimers"
              target="_blank"
              rel="noreferrer"
            >
              Finalis Business Continuity Plan
            </a>
            <span>|</span>
            <a className="text-xs underline hover:no-underline" href="https://brokercheck.finra.org" target="_blank" rel="noreferrer">
              FINRA BrokerCheck
            </a>
            <span>|</span>
            <a
              className="text-xs underline hover:no-underline"
              href="https://files.brokercheck.finra.org/crs_305908.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Finalis Form Customer Relationship Summary (<em>“Form CRS”</em>)
            </a>
          </p>

          <p className="text-xs">
            <a className="text-xs underline hover:no-underline italic" href="/" rel="noreferrer">
              www.whiteswanadvisors.com
            </a>{" "}
            (the White Swan Advisors <em>“Website”</em>) is a website operated by White Swan Advisors. This website is for
            informational purposes only, is not an offer, solicitation, recommendation, or commitment for any transaction
            or to buy or sell any security or other financial product, and is not intended as investment advice or as a
            confirmation of any transaction. Products and services on this website may not be available for residents of
            certain jurisdictions. Please consult with a Finalis Securities’ registered representative regarding the
            product or service in question for further information. Investments involve risk and are not guaranteed to
            appreciate. Any market price, indicative value, estimate, view, opinion, data, or other information herein is
            not warranted as to completeness or accuracy, is subject to change without notice, and White Swan Advisors
            along with Finalis Securities LLC accepts no liability for its use or to update it or keep it current.
          </p>

          <p className="text-xs">
            Investing in private placements involves a high degree of risk. These investments may be illiquid,
            speculative, and subject to substantial restrictions on transferability. Investors may lose all or part of
            their investment and should only invest capital they can afford to lose. Prospective investors should conduct
            their own due diligence and consult with their legal, tax, and financial advisors prior to making any
            investment decision. For your reference, Finalis’ Form CRS describes the services that we provide, how we are
            compensated, and other important information about Finalis Securities LLC.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
