import Header from './components/header';
import TopFooter from './components/TopFooter';
import Footer from './components/footer/Footer';
<<<<<<< HEAD
import { DepositionsSection } from './components/depositions/DepositionsSection';
=======
import TabsSection from './components/tabs-section';
>>>>>>> 4afa362783200c7ee2ded69a0995396cbf500a3c

export default function Home() {
  return (
    <div>
      <Header />
      <main className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Bem-vindo à S4STECHLP</h1>
        <p className="mt-4 text-lg">Sua fábrica de software de confiança</p>
        <TabsSection />
      </main>
<<<<<<< HEAD
      <DepositionsSection />
=======
      <TopFooter />
>>>>>>> 4afa362783200c7ee2ded69a0995396cbf500a3c
      <Footer />
      
    </div>
  );
}
