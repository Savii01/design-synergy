import React from 'react'
import { Link } from 'react-router-dom'
import ErrorPage from '../components/ErrorPage'
import PricingTable from '../components/Pricing'

function Pricing() {
  return (
    <div className='bg-white dark:bg-gray-900 px-6 lg:px-32 2xl:px-[350px] mt-20 py-20'>
      <PricingTable/>
      <div className="max-w-5xl mx-auto mt-20 space-y-10">
  <h2 className="text-3xl font-bold font-customFont text-gray-900 dark:text-white text-center">
    More About the Standalone Package
  </h2>

  {/* Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* What You’ll Get */}
    <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-300 dark:border-gray-600">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">What You’ll Get</h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
          <li>Custom design tailored to your goals</li>
          <li>Brand identity: logo, typography, and color palette</li>
          <li>Landing page or full website UI design</li>
          <li>Mobile app or dashboard UI/UX design</li>
          <li>Custom illustrations and graphics</li>
          <li>Up to 3 feedback and revision rounds</li>
          <li>Optional web or app development</li>
        </ul>
      </div>

      {/* How Pricing Works */}
      <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-300 dark:border-gray-600">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">How Pricing Works</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          We begin with a free discovery call to define your scope. Then, we provide a custom quote based on:
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
          <li>Project complexity and size</li>
          <li>Number of screens or deliverables</li>
          <li>Timeline and development needs</li>
        </ul>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          You'll get a flat, transparent rate with no surprises.
        </p>
      </div>
    </div>

    {/* Hire Us Button (Standalone) */}
    <div className="text-center mt-10">
      <Link
        to="/contact"
        className="inline-block bg-purple dark:bg-lightBlue text-white dark:text-black font-semibold px-6 py-3 rounded-lg hover:bg-purple-700 dark:hover:bg-lightBlue transition"
      >
        Hire Us →
      </Link>
    </div>
  </div>

       

      <div className="max-w-5xl mx-auto mt-24 space-y-10">
        <h2 className="text-3xl font-bold font-customFont text-gray-900 dark:text-white text-center">
          More About the Full Branding Package
        </h2>

        <div className="grid grid-cols-1 mt- md:grid-cols-2 gap-6">
          {/* What You’ll Get */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-300 dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">What You’ll Get</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Unlimited monthly design requests</li>
              <li>Full branding assets and brand guide</li>
              <li>UI/UX for websites, apps, dashboards</li>
              <li>Ongoing creative support for ads, social, email, etc.</li>
              <li>Support for multiple brands</li>
              <li>Fast turnaround + unlimited revisions</li>
            </ul>
          </div>

          {/* How It Works */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-300 dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">How It Works</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This plan works on a subscription basis — flexible, scalable, and hassle-free.
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>One flat monthly fee: $999</li>
              <li>Submit unlimited requests</li>
              <li>We work through them in priority order</li>
              <li>Pause or cancel anytime</li>
            </ul>
          </div>
        </div>

        {/* Hire Us Button (Branding) */}
        <div className="text-center mt-10">
          <Link
            to="/hireus"
            className="inline-block bg-purple dark:bg-lightBlue text-white dark:text-black font-semibold px-6 py-3 rounded-lg hover:bg-purple-700 dark:hover:bg-lightBlue transition"
          >
            Hire Us →
          </Link>
        </div>
      </div>



    </div>
  )
}

export default Pricing
