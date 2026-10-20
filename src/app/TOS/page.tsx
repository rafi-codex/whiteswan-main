import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | White Swan Advisors",
  description: "Terms of Service for White Swan Advisors",
};

export default function TermsOfServicePage() {
  return (
    <main className="bg-white text-black">
      <section className="max-w-4xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <h1 className="text-3xl md:text-5xl font-semibold mb-8">Terms of Service</h1>

        <p className="text-sm text-gray-600 mb-10">
          Effective Date: January 1, 2025
        </p>

        <div className="space-y-8 text-[15px] leading-7 text-gray-800">
          <section>
            <p>
              Welcome to the website of White Swan Advisors (“we,” “us,” or “our”).
              These Terms of Service (“Terms”) govern your use of our website and any
              related services (collectively, the “Site”).
            </p>
            <p className="mt-4">
              By accessing or using the Site, you agree to be bound by these Terms.
              If you do not agree, you should not use the Site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">1. Use of the Site</h2>
            <p>
              You may use this Site only for lawful purposes and in accordance with
              these Terms.
            </p>
            <p className="mt-4">You agree not to:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Use the Site in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to any part of the Site</li>
              <li>Interfere with or disrupt the integrity or performance of the Site</li>
              <li>Use automated systems (e.g., bots, scrapers) to access the Site without permission</li>
              <li>Transmit harmful code, including viruses or malware</li>
            </ul>
            <p className="mt-4">
              We reserve the right to restrict or terminate access to the Site at any
              time, without notice, for any violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. No Professional Advice</h2>
            <p>
              The content on this Site is provided for informational purposes only.
            </p>
            <p className="mt-4">Nothing on this Site constitutes:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Investment advice</li>
              <li>Legal advice</li>
              <li>Tax advice</li>
              <li>Financial advisory services</li>
            </ul>
            <p className="mt-4">
              No client, advisory, fiduciary, or professional relationship is created
              solely by your use of the Site or by communicating with us through it.
            </p>
            <p className="mt-4">
              You should not rely on any information on this Site as a substitute for
              professional advice. Any engagement for advisory services will be
              governed by a separate written agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Scope of Services</h2>
            <p>White Swan Advisors provides advisory services, which may include:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Investment advisory</li>
              <li>Mergers and acquisitions (M&amp;A) advisory</li>
              <li>Capital raising and strategic introductions</li>
              <li>General strategic and financial advisory</li>
            </ul>
            <p className="mt-4">
              All such services are provided only pursuant to formal engagement
              agreements. Nothing on this Site constitutes an offer to provide services
              or a solicitation to enter into any transaction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Intellectual Property</h2>
            <p>
              All content on the Site, including text, graphics, logos, and design, is
              the property of White Swan Advisors or its licensors and is protected by
              applicable intellectual property laws.
            </p>
            <p className="mt-4">You may not:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Copy, reproduce, distribute, or modify any content</li>
              <li>Use our name, branding, or materials without prior written consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Third-Party Links</h2>
            <p>
              The Site may contain links to third-party websites or resources.
            </p>
            <p className="mt-4">
              We do not control and are not responsible for:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>The content of third-party websites</li>
              <li>Any loss or damage arising from your use of them</li>
            </ul>
            <p className="mt-4">
              Accessing third-party links is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. User Communications</h2>
            <p>
              If you submit information through the Site (e.g., contact forms or
              email), you agree that:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>The information is accurate and not misleading</li>
              <li>You have the right to share it</li>
            </ul>
            <p className="mt-4">
              We are not obligated to treat such communications as confidential unless
              agreed separately in writing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. Disclaimer of Warranties</h2>
            <p>
              The Site is provided on an “as is” and “as available” basis.
            </p>
            <p className="mt-4">
              To the fullest extent permitted by law, we disclaim all warranties,
              express or implied, including:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Accuracy or completeness of information</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement</li>
            </ul>
            <p className="mt-4">
              We do not guarantee that the Site will be uninterrupted, secure, or free
              from errors or harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, White Swan Advisors shall not be
              liable for any indirect, incidental, special, or consequential damages,
              including loss of profits, data, or business opportunities, arising out
              of or related to your use of the Site.
            </p>
            <p className="mt-4">
              Your use of the Site is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">9. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless White Swan Advisors and its
              affiliates from any claims, damages, or losses arising out of:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Your use of the Site</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any applicable law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">10. Compliance with Laws</h2>
            <p>
              You are responsible for ensuring that your use of the Site complies with
              all applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">11. Modifications</h2>
            <p>
              We may update these Terms from time to time. Changes will be effective
              upon posting on this page.
            </p>
            <p className="mt-4">
              Continued use of the Site after changes are posted constitutes your
              acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">12. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the
              laws of the State of Delaware, without regard to conflict of law
              principles.
            </p>
            <p className="mt-4">
              Any disputes arising out of or relating to these Terms shall be subject
              to the exclusive jurisdiction of the courts located in Delaware.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">13. Contact</h2>
            <p>
              If you have any questions about these Terms, you may contact us at:
            </p>
            <a
              href="mailto:abid@whiteswanadvisors.com"
              className="mt-4 inline-block font-medium underline"
            >
              abid@whiteswanadvisors.com
            </a>
          </section>
        </div>
      </section>
    </main>
  );
}
