import React from 'react';
import Hero from '../../components/home/Hero';
import StatsSection from '../../components/home/StatsSection';
import InsurancePlans from '../../components/home/InsurancePlans';
import SystemFeatures from '../../components/home/SystemFeatures';
import SupportSection from '../../components/home/SupportSection';
import NetworkHospitals from '../../components/home/NetworkHospitals';
import CustomerPlans from '../../components/home/CustomerPlans';
import FaceScanPromo from '../../components/home/FaceScanPromo';
import HowItWorks from '../../components/home/HowItWorks';

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <InsurancePlans />
      <SystemFeatures />
      <SupportSection />
      <NetworkHospitals />
      <CustomerPlans />
      <FaceScanPromo />
      <HowItWorks />
    </>
  );
}