import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PricingTable from '../components/Pricing'; // To display pricing table if no plan is selected
import FullBrandingForm from '../components/FullBrandingForm'; // The form for Full Branding Package
import StandaloneForm from '../components/StandaloneForm'; // The form for Standalone Package

function HireUs() {
  const location = useLocation();
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const plan = params.get('plan');
    setSelectedPlan(plan);
  }, [location]);

  return (
    <div className="bg-white dark:bg-gray-900 px-6 lg:px-32 py-20 mt-20">
      {!selectedPlan ? (
        <div>
          <h2 className="text-center font-customFont text-2xl">Hello friend, you'd have to choose a Plan Before We Proceed 😊</h2>
          <PricingTable />
        </div>
      ) : selectedPlan === 'standalone' ? (
        <StandaloneForm />
      ) : selectedPlan === 'fullbranding' ? (
        <FullBrandingForm />
      ) : (
        <div>
          <h2 className="text-center text-xl">Invalid plan selected</h2>
        </div>
      )}
    </div>
  );
}

export default HireUs;
