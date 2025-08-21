import React from 'react';
import HeroHighlight from './HeroHighlight';

export default function HeroSection() {
  return (
    <section
      className="hero-bg w-full flex flex-col justify-center items-center py-20 px-4 min-h-[45vh]"
      style={{ position: 'relative' }}
    >
      <h1 className="hero-title text-center mb-4 leading-tight">
        Expert Automotive<br />Consulting Services
      </h1>
      <p className="hero-subtext text-center max-w-2xl mb-8 text-lg">
        Get professional insights on premium vehicles. Expert analysis, market evaluations, and personalized recommendations.
      </p>
      <div className="flex gap-4 justify-center mb-8">
        <HeroHighlight number='1' label='Vehicles Analyzed'/>
        <HeroHighlight number='2' label='Expert Reviews'/>
      </div>
      <button className="cta-btn shadow-lg">
        Get Consultation
      </button>
    </section>
  );
}
