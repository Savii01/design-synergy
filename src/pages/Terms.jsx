import React from "react";

const Terms = () => {
    return (
      <div className="min-h-full my-20 py-12 px-6 lg:px-24">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200">
          <h1 className="text-3xl font-customFont text-gray-900 dark:text-gray-100">Terms & Conditions</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Effective Date: {new Date().toLocaleDateString()}</p>
  
          <div className="mt-6 space-y-6 text-gray-700 dark:text-gray-200 tracking-tighter">
            {/* Introduction */}
            <section>
              <h2 className="text-xl font-customFont">1. Introduction</h2>
              <p>
                Welcome to <span className="font-bold">Design Synergy</span>, operated by Design Synergy ("Company", "we", "us", or "our"). By accessing or using our website and design services, you agree to these Terms & Conditions. If you do not agree, please discontinue use immediately.
              </p>
            </section>
  
            {/* Services Offered */}
            <section>
              <h2 className="text-xl font-customFont">2. Services Offered</h2>
              <p>
                Design Synergy provides professional graphic design, branding, and web design services, including one-time projects and subscription-based packages. Service details, pricing, and deliverables are outlined in the chosen package or agreement at the time of engagement.
              </p>
            </section>
  
            {/* User Accounts */}
            <section>
              <h2 className="text-xl font-customFont">3. User Accounts & Registration</h2>
              <p>
                To access certain services, you may be required to create an account. You agree to provide accurate and up-to-date information. You are responsible for safeguarding your login credentials and activities under your account.
              </p>
            </section>
  
            {/* Payments & Refunds */}
            <section>
              <h2 className="text-xl font-customFont">4. Payments & Refund Policy</h2>
              <p>
                Payments must be completed before project delivery. Fees are displayed at the time of purchase and are subject to applicable taxes. First-time clients may request a refund within 7 days of purchase by contacting support at <a href="mailto:support@designsynergy.com" className="text-indigo-600">support@designsynergy.com</a>.
              </p>
            </section>
  
            {/* Intellectual Property */}
            <section>
              <h2 className="text-xl font-customFont">5. Intellectual Property Rights</h2>
              <p>
                All designs, graphics, and content created by Design Synergy remain our intellectual property until full payment is made. Unauthorized reproduction, resale, or redistribution of any materials is strictly prohibited.
              </p>
            </section>
  
            {/* Third-Party Fonts */}
            <section>
              <h2 className="text-xl font-customFont">6. Third-Party Fonts</h2>
              <p>
                If any design includes third-party fonts requiring a commercial license, we will notify you and provide details on obtaining the appropriate license.
              </p>
            </section>
  
            {/* Use of Services */}
            <section>
              <h2 className="text-xl font-customFont">7. Use of Services</h2>
              <p>
                Our services are intended for legal business and personal use. Misuse, unauthorized reselling, or unlawful activities associated with our services are strictly prohibited.
              </p>
            </section>
  
            {/* Privacy Policy */}
            <section>
              <h2 className="text-xl font-customFont">8. Privacy Policy</h2>
              <p>
                Your use of Design Synergy is subject to our Privacy Policy, which outlines how we handle user data and information.
              </p>
            </section>
  
            {/* Limitation of Liability */}
            <section>
              <h2 className="text-xl font-customFont">9. Limitation of Liability</h2>
              <p>
                Design Synergy shall not be liable for indirect, incidental, or consequential damages arising from the use of our services.
              </p>
            </section>
  
            {/* Governing Law */}
            <section>
              <h2 className="text-xl font-customFont">10. Governing Law</h2>
              <p>
                These Terms are governed by the laws of [Your Country/State]. Any disputes shall be resolved in the appropriate legal jurisdiction.
              </p>
            </section>
  
            {/* Amendments to Terms */}
            <section>
              <h2 className="text-xl font-customFont">11. Amendments to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Continued use of our services after modifications indicates agreement with the updated Terms.
              </p>
            </section>
  
            {/* Contact Information */}
            <section>
              <h2 className="text-xl font-customFont">12. Contact Information</h2>
              <p>
                For any questions regarding these Terms, please contact us at <a href="mailto:terms@designsynergy.com" className="text-indigo-600">terms@designsynergy.com</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    );
  };
  
  export default Terms;
