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
import MobileHeader from './components/MobileHeader';
import MobileFooter from './components/MobileFooter';
import HomeScreenMobile from './components/HomeScreenMoile';

export default function Home() {
  const ourServicesRef = useRef<HTMLDivElement>(null);
  const opnionsRef = useRef<HTMLDivElement>(null);
  const usRef = useRef<HTMLDivElement>(null);
  const casesRef = useRef<HTMLDivElement>(null);
  const workflowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const queryParams = new URLSearchParams(window.location.search);
      const scrollTo = queryParams.get('scrollTo') || window.location.hash.substring(1);
      if (scrollTo === 'ourServices') {
        ourServicesRef.current?.scrollIntoView({ behavior: 'smooth' });
      }
      if (scrollTo === 'Opnions') {
        opnionsRef.current?.scrollIntoView({ behavior: 'smooth' });
      }
      if (scrollTo === 'us') {
        usRef.current?.scrollIntoView({ behavior: 'smooth' });
      }
      if (scrollTo === 'cases') {
        casesRef.current?.scrollIntoView({ behavior: 'smooth' });
      }
      if (scrollTo === 'workflow') {
        workflowRef.current?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);


  return (
    <div className="scroll-smooth">
      <div className='xs:hidden md:block'>
        <Header />
      </div>
      <div className='xs:block md:hidden'>
        <MobileHeader />
      </div>
      <div className='xs:block md:hidden'>
        <HomeScreenMobile />
        </div>
      <div className='xs:hidden md:block'>
        <HomeScreen />
      </div>
      <CarrouselPartne />
      <main className="min-h-screen flex flex-col justify-center items-center">
        <div id="nos" ref={usRef}>
          <AboutSection />
        </div>
        <div id="cases" ref={casesRef}>
          <PartnersProjects />
        </div>
        <div id="ourServices" ref={ourServicesRef}>
          <OurServicesSection />
        </div>
        <div id="workflow" ref={workflowRef}>
          <TabsSection />
        </div>
        <div id="Opnions" ref={opnionsRef}>
          <DepositionsSection />
        </div>
        <TopFooter />

        <div className='xs:hidden md:block'>
          <Footer />
        </div>

        <div className='xs:block md:hidden'>
          <MobileFooter />
        </div>
      </main>
    </div>
  );
}
