import React from "react";
import Image from "next/image";
import HeaderTransaction from "@/components/transactions/header-transaction";

// The 8 deals from Step 4 Recent Track Record with external links
const FEATURED_DEALS = [
  {
    company: "Solartia",
    type: "Advisory – Project finance & equity",
    amount: "$300M",
    isDisclosed: true,
    link: "https://solartia.com/en/",
  },
  {
    company: "ExLabs",
    type: "Advisory – Venture equity",
    amount: "$7M",
    isDisclosed: true,
    link: "https://exlabs.space/",
  },
  {
    company: "Athon Energia",
    type: "Advisory – Equity",
    amount: "$50M",
    isDisclosed: true,
    link: "https://www.athonenergia.com.br/",
  },
  {
    company: "Orbital Transports",
    type: "Advisory – Equity",
    amount: "Undisclosed",
    isDisclosed: false,
    link: "https://orbitaltransports.com/",
  },
  {
    company: "The AIM Organization",
    type: "Advisory – Debt refinance + equity",
    amount: "Undisclosed",
    isDisclosed: false,
    link: "https://theaimorganization.com/",
  },
  {
    company: "EndoTaggs",
    type: "Advisory – Venture equity",
    amount: "Undisclosed",
    isDisclosed: false,
    link: "https://www.endo-tagss.com/",
  },
  {
    company: "Boom Mobile",
    type: "Project debt refinance + equity",
    amount: "Undisclosed",
    isDisclosed: false,
    link: "https://boom.us/",
  },
  {
    company: "Underground Printing",
    type: "Advisory – Debt",
    amount: "Undisclosed",
    isDisclosed: false,
    link: "https://undergroundshirts.com/",
  },
];

const rows = [
  {
    client: "Solartia",
    amount: "$300.0 M",
    industry: "Energy & Utilities / Infrastructure / Renewable Energy",
    type: "Advisory – Project Finance & Equity",
    link: "https://solartia.com/en/",
  },
  {
    client: "ExLabs",
    amount: "$7.0 M",
    industry: "Space / Aerospace & Defense",
    type: "Advisory – Venture Equity",
    link: "https://exlabs.space/",
  },
  {
    client: "Athon Energia",
    amount: "$50.0 M",
    industry: "Energy & Utilities / Renewable Energy",
    type: "Advisory – Equity",
    link: "https://www.athonenergia.com.br/",
  },
  {
    client: "Orbital Transports",
    amount: "Undisclosed",
    industry: "SaaS / Digital Marketplace / Aerospace & Defense",
    type: "Advisory – Equity",
    link: "https://orbitaltransports.com/",
  },
  {
    client: "Boom Mobile",
    amount: "Undisclosed",
    industry: "Telecommunications / Wireless Services",
    type: "Project Debt Refinance + Equity",
    link: "https://boom.us/",
  },
  {
    client: "Rocket Dollar",
    amount: "$11.4 M",
    industry: "Fintech",
    type: "Advisory – Equity",
    link: "https://www.rocketdollar.com/",
  },
  {
    client: "Zero Waste Inc.",
    amount: "$75.0 M",
    industry: "Energy & Utilities / Renewable Energy",
    type: "Advisory – Project Finance & Equity",
  },
  {
    client: "Stabili Teeth",
    amount: "Undisclosed",
    industry: "Healthcare / Dental Care Services",
    type: "Advisory – Venture Equity",
    link: "https://www.stabili-teeth.com/",
  },
  {
    client: "The AIM Organization",
    amount: "Undisclosed",
    industry: "Healthcare Services",
    type: "Advisory – Debt Refinance + Equity",
    link: "https://theaimorganization.com/",
  },
  {
    client: "Underground Printing",
    amount: "Undisclosed",
    industry: "Consumer Goods / Custom Apparel & Printing",
    type: "Advisory – Debt",
    link: "https://undergroundshirts.com/",
  },
  {
    client: "Progenerative Medical, Inc.",
    amount: "Undisclosed",
    industry: "Medical Instruments & Devices",
    type: "Advisory – Venture Equity",
    link: "https://progenerative.com/",
  },
  {
    client: "EndoTaggs",
    amount: "Undisclosed",
    industry: "Medical Devices",
    type: "Advisory – Venture Equity",
    link: "https://www.endo-tagss.com/",
  },
  {
    client: "Innovative Trauma Care",
    amount: "Undisclosed",
    industry: "Medical Devices",
    type: "Advisory – Debt Restructuring",
  },
  {
    client: "Sapphire Healthcare AI, Inc.",
    amount: "Undisclosed",
    industry: "SaaS / Healthcare / AI",
    type: "Advisory – Venture Equity & M&A",
    link: "https://www.sapphirercms.com/",
  },
  {
    client: "Chemicals Company*",
    amount: "$17.5 M",
    industry: "Chemicals",
    type: "Capital Raise & Financial Advisory",
  },
  {
    client: "Consumer Products Platform*",
    amount: "$42.0 M",
    industry: "Consumer",
    type: "Capital Raise",
  },
  {
    client: "Alphalete Plumbing & Drain",
    amount: "Undisclosed",
    industry: "Home Services / Plumbing & HVAC",
    type: "Advisory – Debt Restructuring",
  },
  {
    client: "Oil & Gas Operator (GOM)*",
    amount: "$200.0 M",
    industry: "Oil & Gas",
    type: "Financial Advisory",
  },
  {
    client: "IX Water",
    amount: "Undisclosed",
    industry: "Energy & Utilities / Waste Water Treatment",
    type: "Advisory – Equity",
    link: "https://ixwater.com/",
  },
  {
    client: "Manufacturing & Healthcare Company*",
    amount: "$20.0 M",
    industry: "Manufacturing & Healthcare",
    type: "Capital Raise & Financial Advisory",
  },
];

export default function TransactionsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Video Banner */}
      <HeaderTransaction />

      {/* Featured Track Record Cards (8 Key Deals as per Step 4) */}
      <section className="bg-white py-16 lg:py-24 border-b border-gray-100">
        <div className="section-container">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
                Recent Track Record
              </h2>
              <div className="bg-royalblue h-2 w-32 mt-3 mb-4 rounded-full" />
              <p className="text-gray-600 text-sm sm:text-base font-normal max-w-2xl">
                Equity and debt advisory across space, energy transition and growth companies.
              </p>
            </div>

            <div className="self-end sm:self-center shrink-0">
              <Image
                src="/wsa-logo.svg"
                alt="White Swan Advisors Logo"
                width={96}
                height={96}
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow-md"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_DEALS.map((deal) => {
              const CardContent = (
                <div className="h-full bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:border-royalblue hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[185px]">
                  <div>
                    <span className="text-[11px] font-semibold tracking-wider text-gray-500 uppercase block leading-tight">
                      {deal.type}
                    </span>
                    <h4 className="text-xl font-bold text-gray-900 mt-3 group-hover:text-royalblue transition-colors">
                      {deal.company}
                    </h4>
                  </div>
                  <div className="pt-4 border-t border-gray-100 mt-4">
                    <span
                      className={
                        deal.isDisclosed
                          ? "text-2xl font-bold text-[#153147]"
                          : "text-sm font-medium text-gray-500"
                      }
                    >
                      {deal.amount}
                    </span>
                  </div>
                </div>
              );

              return deal.link ? (
                <a
                  key={deal.company}
                  href={deal.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full"
                >
                  {CardContent}
                </a>
              ) : (
                <div key={deal.company} className="group block h-full">
                  {CardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comprehensive Transaction History Table */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="section-container">
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              All Transactions
            </h3>
            <div className="bg-royalblue h-1.5 w-20 mt-2 mb-3 rounded-full" />
            <p className="text-gray-600 text-sm max-w-2xl">
              Representative advisory and capital markets transactions executed across sectors.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[#153147] text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">
                    Client
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">
                    Amount (USD)
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">
                    Industry
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">
                    Type
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100 text-sm">
                {rows.map((r, i) => (
                  <tr
                    key={i}
                    className={`transition-colors hover:bg-slate-50 ${
                      i % 2 === 1 ? "bg-gray-50/60" : "bg-white"
                    }`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      {r.link ? (
                        <a
                          href={r.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#153147] hover:underline hover:text-blue-700 font-semibold inline-flex items-center gap-1.5"
                        >
                          {r.client}
                          <span className="text-xs text-gray-400">↗</span>
                        </a>
                      ) : (
                        r.client
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-800">
                      {r.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      {r.industry}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      {r.type}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-xs text-gray-500 leading-relaxed">
            <strong>Disclaimer:</strong> Certain investment banking transactions may have been executed by the investment banking principals during their tenure at prior firms. Some companies may not be named or referenced at the request of the company.
          </p>
        </div>
      </section>
    </main>
  );
}
