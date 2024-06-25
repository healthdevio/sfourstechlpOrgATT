import Header from './components/header';
import HomeScreen from './components/HomeScreen';
import TopFooter from './components/TopFooter';
import Footer from './components/footer/Footer';
import PartnersProjects from './components/PartnersProjects';
import { DepositionsSection } from './components/depositions/DepositionsSection';
import TabsSection from './components/tabs-section';

export default function Home() {
  return (
    <div>
      <Header />
      <HomeScreen />
      <main className="min-h-screen flex flex-col justify-center items-center">
        <PartnersProjects />
        <TabsSection />
      </main>
     
      <DepositionsSection />
      <TopFooter />
      <Footer />
      
    </div>
  );
}
