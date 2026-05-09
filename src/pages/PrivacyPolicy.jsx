import InnerPageHero from '../components/InnerPageHero';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <>
      <InnerPageHero title="Privacy Policy" subtitle="How Indolog Logistics collects, uses, and protects your data." />
      <div className="bg-[#f5f4f0] min-h-screen">
        <section className="max-w-[860px] mx-auto px-6 md:px-12 py-24">
          <div className="bg-white border border-border p-10 md:p-16">

            <p className="text-[12px] text-text-muted mb-8">Last updated: May 2026 | Applies to: indologindia.com and all Indolog digital properties</p>

            <h2 className="font-lora text-[1.6rem] text-navy mb-4">1. Who We Are</h2>
            <p className="text-[14px] text-text-soft font-light leading-[1.9] mb-8">
              Indolog Logistics Pvt Ltd ("Indolog", "we", "us") is a freight forwarding and quality inspection company registered in India. Our registered office is at Plot no. 249/1, Sector-24, Phase-2, Dhulsiras, Dwarka, New Delhi-110077. We are the data controller for personal data processed through this website.
            </p>

            <h2 className="font-lora text-[1.6rem] text-navy mb-4">2. Data We Collect</h2>
            <div className="text-[14px] text-text-soft font-light leading-[1.9] mb-8">
              <p className="mb-3">We collect data in the following ways:</p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li><strong>Enquiry forms:</strong> name, email, phone number, company, cargo details.</li>
                <li><strong>IP geolocation:</strong> we use IPLocate to detect your approximate country/region to display a localised greeting. We do not store this data beyond your browser session (sessionStorage).</li>
                <li><strong>Analytics:</strong> if analytics are installed, aggregate page view data is collected. No personally identifiable information is included.</li>
                <li><strong>Cookies:</strong> we may use essential cookies for site functionality. No third-party tracking cookies are set without consent.</li>
              </ul>
            </div>

            <h2 className="font-lora text-[1.6rem] text-navy mb-4">3. How We Use Your Data</h2>
            <div className="text-[14px] text-text-soft font-light leading-[1.9] mb-8">
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>To respond to your enquiry or quote request.</li>
                <li>To improve our website and services through aggregate analytics.</li>
                <li>To comply with legal and regulatory obligations.</li>
              </ul>
              <p className="mt-3">We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>
            </div>

            <h2 className="font-lora text-[1.6rem] text-navy mb-4">4. Legal Basis (GDPR / DPDP)</h2>
            <p className="text-[14px] text-text-soft font-light leading-[1.9] mb-8">
              For visitors from the European Union, our legal basis for processing enquiry data is <strong>legitimate interest</strong> (responding to your commercial query). For IP geolocation, we rely on <strong>legitimate interest</strong> (site personalisation with no persistent storage). For Indian visitors, we comply with the Digital Personal Data Protection Act 2023 (DPDP Act).
            </p>

            <h2 className="font-lora text-[1.6rem] text-navy mb-4">5. Data Retention</h2>
            <p className="text-[14px] text-text-soft font-light leading-[1.9] mb-8">
              Enquiry data is retained for 3 years from last contact, after which it is securely deleted. IP geolocation data is stored only in your browser's sessionStorage and is cleared when you close the tab.
            </p>

            <h2 className="font-lora text-[1.6rem] text-navy mb-4">6. Your Rights</h2>
            <p className="text-[14px] text-text-soft font-light leading-[1.9] mb-8">
              You have the right to access, correct, or delete your personal data. To exercise these rights, email us at <a href="mailto:privacy@indologindia.com" className="text-navy hover:underline">privacy@indologindia.com</a>. EU residents may also lodge a complaint with their national data protection authority.
            </p>

            <h2 className="font-lora text-[1.6rem] text-navy mb-4">7. Third-Party Services</h2>
            <p className="text-[14px] text-text-soft font-light leading-[1.9] mb-8">
              We use IPLocate (iplocate.io) for country-level geolocation. Their privacy policy is available at <a href="https://www.iplocate.io/privacy" target="_blank" rel="noopener noreferrer" className="text-navy hover:underline">iplocate.io/privacy</a>.
            </p>

            <h2 className="font-lora text-[1.6rem] text-navy mb-4">8. Contact</h2>
            <p className="text-[14px] text-text-soft font-light leading-[1.9] mb-4">
              For any privacy-related questions, contact our Data Protection point of contact:
            </p>
            <div className="bg-[#f5f4f0] p-5 text-[13px] text-text-soft">
              Indolog Logistics Pvt Ltd<br />
              Plot no. 249/1, Sector-24, Phase-2, Dhulsiras, Dwarka, New Delhi-110077<br />
              <a href="mailto:privacy@indologindia.com" className="text-navy hover:underline">privacy@indologindia.com</a>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}
