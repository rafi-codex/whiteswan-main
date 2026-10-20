import HeaderTransaction from "@/components/transactions/header-transaction";
import React from "react";

const rows = [
  { client: "Orbital Transports", amount: "Undisclosed", industry: "SaaS / Digital Marketplace / Aerospace & Defense", type: "Advisory – Equity", link: "https://orbitaltransports.com/" },
  { client: "Boom Mobile", amount: "$10.0 M", industry: "Telecommunications / Wireless Services", type: "Advisory – Equity & Debt", link: "https://boom.us/" },
  { client: "Rocket Dollar", amount: "$11.4 M", industry: "Fintech", type: "Advisory – Equity", link: "https://www.rocketdollar.com/" },
  { client: "Zero Waste Inc.", amount: "$75.0 M", industry: "Energy & Utilities / Renewable Energy", type: "Advisory - Project Finance & Equity" },
  { client: "Stabili Teeth", amount: "Undisclosed", industry: "Healthcare / Dental Care Services", type: "Advisory – Venture Equity", link: "https://www.stabili-teeth.com/" },
  { client: "The AIM Organization", amount: "Undisclosed", industry: "Healthcare Services", type: "Advisory – Debt Restructring + Venture Equity", link: "https://theaimorganization.com/" },
  { client: "Underground Printing", amount: "$9.0 M", industry: "Consumer Goods / Custom Apparel & Printing", type: "Advisory - Debt", link: "https://undergroundshirts.com/" },
  { client: "Progenerative Medical, Inc.", amount: "Undisclosed", industry: "Medical Instruments & Devices", type: "Advisory – Venture Equity", link: "https://progenerative.com/" },
  { client: "EndoTaggs", amount: "Undisclosed", industry: "Medical Devices", type: "Advisory – Venture Equity", link: "https://www.endo-tagss.com/" },
  { client: "Solartia", amount: "$300.0 M", industry: "Energy & Utilities / Infrastructure / Renewable Energy", type: "Advisory - Project Finance & Equity", link: "https://solartia.com/en/" },
  { client: "Innovative Trauma Care", amount: "Undisclosed", industry: "Medical Devices", type: "Advisory - Debt Restructuring" },
  { client: "Sapphire Healthcare AI, Inc.", amount: "Undisclosed", industry: "SaaS / Healthcare / AI", type: "Advisory – Venture Equity & M&A", link: "https://www.sapphirercms.com/" },
  { client: "Chemicals Company*", amount: "$17.5 M", industry: "Chemicals", type: "Capital Raise & Financial Advisory" }, 
  { client: "Consumer Products Platform*", amount: "$42.0 M", industry: "Consumer", type: "Capital Raise" },
  { client: "Alphalete Plumbing & Drain", amount: "Undisclosed", industry: "Home Services / Plumbing & HVAC", type: "Advisory - Debt Restructuring" },
  { client: "Oil & Gas Operator (GOM)*", amount: "$200.0 M", industry: "Oil & Gas", type: "Financial Advisory" },
  { client: "IX Water", amount: "Undisclosed", industry: "Energy & Utilities / Waste Water Treatment", type: "Advisory – Equity", link: "https://ixwater.com/" },
  { client: "Manufacturing & Healthcare Company*", amount: "$20.0 M", industry: "Manufacturing & Healthcare", type: "Capital Raise & Financial Advisory" }
];

export default function ServicePage() {
  return (
    <main className="">
      <HeaderTransaction />
      <section className="p-6 lg:p-20">
        <h2 className="text-xl font-semibold mb-4">Transactions</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount (USD)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Industry</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {rows.map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? undefined : "bg-gray-50"}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {r.link ? (
                      <a href={r.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {r.client}
                      </a>
                    ) : (
                      r.client
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{r.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{r.industry}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{r.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-xs text-gray-600">
          <strong>Disclaimer :</strong> Certain investment banking transactions may have been executed by the investment banking principals during their tenure at prior firms. Some companies may not be named or referenced at the request of the company.
        </p>
      </section>
    </main>
  );
}
