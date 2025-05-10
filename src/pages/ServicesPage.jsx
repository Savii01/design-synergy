import React from 'react';
import Services from '../components/Services'; // adjust the path if necessary
import ProjectSlider from '../components/ProjectSlider';

function ServicesPage() {
  return (
    <main className="py-20 lg:py-10">
      <Services />
      <ProjectSlider />
    </main>
  );
}

export default ServicesPage;
