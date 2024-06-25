import Header from './components/header';
import HomeScreen from './components/HomeScreen';
import TopFooter from './components/TopFooter';
import Footer from './components/footer/Footer';
import PartnersProjects from './components/PartnersProjects';
import { DepositionsSection } from './components/depositions/DepositionsSection';
import TabsSection from './components/tabs-section';
import { AboutSection } from './components/about/AboutSection';

export default function Home() {
  return (
    <div>
      <Header />
      <HomeScreen />
      <main className="min-h-screen flex flex-col justify-center items-center">
        <AboutSection />
        <PartnersProjects />
        <TabsSection />
        <DepositionsSection />
        <TopFooter />
        <Footer />
      </main>
    </div>
  );
}
