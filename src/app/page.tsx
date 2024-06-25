'use client'
import Header from './components/header';
import HomeScreen from './components/HomeScreen';
import TopFooter from './components/TopFooter';
import Footer from './components/footer/Footer';
import PartnersProjects from './components/PartnersProjects';
import { DepositionsSection } from './components/depositions/DepositionsSection';
import { AboutSection } from './components/about/AboutSection';
import { OurServicesSection } from './components/our-services/OurServicesSection';
import { CarrouselPartne } from './components/CarrouselPartne';
import TabsSection from './components/tabs-section/tabs-section';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const ourServicesRef = useRef<any>(null);
  const opnionsRef = useRef<any>(null);
  const usRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const queryParams = new URLSearchParams(window.location.search);
      const scrollTo = queryParams.get('scrollTo');
      if (scrollTo === 'ourServices') {
        ourServicesRef.current?.scrollIntoView({ behavior: 'smooth' });
      }

      if (scrollTo === 'Opnions') {
        opnionsRef.current?.scrollIntoView({ behavior: 'smooth' });
      }

      if (scrollTo === 'Us') {
        usRef.current?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div>
      <Header />
      <HomeScreen />
      <CarrouselPartne/>
      <main className="min-h-screen flex flex-col justify-center items-center">
        <div ref={usRef}>
          <AboutSection />
        </div>
        <PartnersProjects />
        <div ref={ourServicesRef}>
          <OurServicesSection />
        </div>
        <TabsSection />
        <div ref={opnionsRef}>
          <DepositionsSection />
        </div>
        <TopFooter />
        <Footer />
      </main>
    </div>
  );
}
