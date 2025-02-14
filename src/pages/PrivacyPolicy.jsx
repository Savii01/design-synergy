import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen my-20 py-12 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200">
        <h1 className="text-3xl font-customFont text-gray-900 dark:text-gray-200">Privacy Policy</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Effective Date: {new Date().toLocaleDateString()}
        </p>

        <div className="mt-6 space-y-6 text-gray-700 dark:text-gray-200 tracking-tight">
          {/* Introduction */}
          <section>
            <h2 className="text-xl font-customFont">1. Introduction</h2>
            <p>
              At <span className="font-bold">Design Synergy</span>, we respect
              your privacy and are committed to protecting your personal
              information. This Privacy Policy outlines how we collect, use, and
              protect your information when you use our services.
            </p>
          </section>

          {/* Information Collection */}
          <section>
            <h2 className="text-xl font-customFont">2. Information We Collect</h2>
            <p>
              We collect information that you provide when you visit our
              website, engage with our services, or contact us. This may include
              your name, email address, phone number, and other details necessary
              to deliver our services.
            </p>
            <p>
              Additionally, we may collect technical data such as your IP
              address, browser type, and device information to enhance user
              experience and website performance.
            </p>
          </section>

          {/* Use of Cookies */}
          <section>
            <h2 className="text-xl font-customFont">3. Use of Cookies</h2>
            <p>
              We use cookies to improve your browsing experience. Cookies help us
              analyze website traffic and tailor our services to your needs. You
              can disable cookies in your browser settings, but this may affect
              website functionality.
            </p>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-xl font-customFont">4. How We Use Your Information</h2>
            <p>
              The information collected is used to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and improve our design services.</li>
              <li>Respond to inquiries and support requests.</li>
              <li>Analyze user behavior to enhance website performance.</li>
              <li>Ensure compliance with legal obligations.</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section>
            <h2 className="text-xl font-customFont">5. Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information. However,
              we may share your data with trusted third parties necessary for
              service delivery or as required by law.
            </p>
          </section>

          {/* Security Measures */}
          <section>
            <h2 className="text-xl font-customFont">6. Data Security</h2>
            <p>
              We take reasonable security measures to protect your personal data
              from unauthorized access, loss, or misuse.
            </p>
          </section>

          {/* User Rights */}
          <section>
            <h2 className="text-xl font-customFont">7. Your Rights</h2>
            <p>
              You have the right to request access, corrections, or deletion of
              your personal data. If you wish to update or remove your
              information, please contact us.
            </p>
          </section>

          {/* Updates to Policy */}
          <section>
            <h2 className="text-xl font-customFont">8. Changes to Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page. Continued use of our services implies
              acceptance of the updated policy.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-xl font-customFont">9. Contact Us</h2>
            <p>
              If you have any questions regarding this policy, you can contact us at:
            </p>
            <p className="mt-2">
              <strong>Email:</strong>{" "}
              <a href="mailto:privacy@designsynergy.com" className="text-indigo-600">
                privacy@designsynergy.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
