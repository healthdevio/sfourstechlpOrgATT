import Header from './components/header';
import HomeScreen from './components/HomeScreen';
import TopFooter from './components/TopFooter';
import Footer from './components/footer/Footer';
import PartnersProjects from './components/PartnersProjects';
import { DepositionsSection } from './components/depositions/DepositionsSection';
import TabsSection from './components/tabs-section';
import { AboutSection } from './components/about/AboutSection';
import CarrouselPartner from './components/CarrouselPartner';
import { OurServicesSection } from './components/our-services/OurServicesSection';

export default function Home() {
  return (
    <div>
      <Header />
      <HomeScreen />
      <CarrouselPartner/>
      <main className="min-h-screen flex flex-col justify-center items-center">
        <AboutSection />
        <PartnersProjects />
        <OurServicesSection />
        <TabsSection />
        <DepositionsSection />
        <TopFooter />
        <Footer />
      </main>
    </div>
  );
}
