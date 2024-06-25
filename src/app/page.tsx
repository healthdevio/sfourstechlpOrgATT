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

export default function Home() {
  return (
    <div>
      <Header />
      <HomeScreen />
      <CarrouselPartne/>
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
