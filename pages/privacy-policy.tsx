import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Invictrix - Privacy Policy</title>
      </Head>
      <section className="container mx-auto flex w-full flex-col py-24">
        <div className="max-w-[75%]">
          <h1 className="text-dark font-display mb-16 text-8xl uppercase">
            Privacy Policy
          </h1>
          <div className="text-dark flex flex-col text-lg">
            <p className="mt-4">
              At Invictrix, your privacy is very important to us. This Privacy
              Policy outlines the types of information we collect, how we use
              it, and the choices you have about your personal data.
            </p>

            <h2 className="mt-8 text-2xl font-bold">
              1. Information We Collect
            </h2>
            <p className="mt-4">
              We may collect the following types of information when you use our
              website:
            </p>
            <ul className="mt-4 list-inside list-disc">
              <li>
                Personal Information: Name, email address, phone number, etc.,
                when you voluntarily provide it.
              </li>
              <li>
                Usage Data: Pages visited, time spent on site, browser type,
                device information, etc.
              </li>
              <li>
                Cookies and Tracking Technologies: To enhance your experience
                and gather analytics.
              </li>
            </ul>

            <h2 className="mt-8 text-2xl font-bold">
              2. How We Use Your Information
            </h2>
            <p className="mt-4">We use the information we collect to:</p>
            <ul className="mt-4 list-inside list-disc">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve and personalize your user experience</li>
              <li>
                Communicate with you, including sending updates and promotional
                content
              </li>
              <li>Monitor and analyze usage trends and preferences</li>
            </ul>

            <h2 className="mt-8 text-2xl font-bold">
              3. Sharing of Information
            </h2>
            <p className="mt-4">
              We do not sell, rent, or share your personal information with
              third parties except:
            </p>
            <ul className="mt-4 list-inside list-disc">
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and property</li>
              <li>
                With trusted service providers who help us operate the website
              </li>
            </ul>

            <h2 className="mt-8 text-2xl font-bold">4. Data Security</h2>
            <p className="mt-4">
              We take reasonable steps to protect your information using
              standard security measures. However, no method of transmission
              over the Internet is 100% secure.
            </p>

            <h2 className="mt-8 text-2xl font-bold">5. Your Choices</h2>
            <p className="mt-4">You can choose to:</p>
            <ul className="mt-4 list-inside list-disc">
              <li>Opt-out of receiving promotional emails</li>
              <li>Disable cookies through your browser settings</li>
              <li>
                Access, update, or delete your personal information by
                contacting us
              </li>
            </ul>

            <h2 className="mt-8 text-2xl font-bold">6. Third-Party Links</h2>
            <p className="mt-4">
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of these sites.
            </p>

            <h2 className="mt-8 text-2xl font-bold">
              7. Children&apos;s Privacy
            </h2>
            <p className="mt-4">
              Our website is not intended for children under the age of 13. We
              do not knowingly collect personal information from children.
            </p>

            <h2 className="mt-8 text-2xl font-bold">
              8. Changes to This Privacy Policy
            </h2>
            <p className="mt-4">
              We may update this Privacy Policy from time to time. We encourage
              you to review this page regularly for any changes.
            </p>

            <h2 className="mt-8 text-2xl font-bold">9. Contact Us</h2>
            <p className="mt-4">
              If you have any questions or concerns about this Privacy Policy,
              please contact us at:
            </p>
            <p className="mt-2">Email: support@invictrix.com</p>
            <p className="mt-1">Phone: (123) 456-7890</p>
          </div>
        </div>
      </section>
    </>
  );
}
