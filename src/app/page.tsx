import Header from './components/header';
import Footer from './components/footer/Footer';
import { DepositionsSection } from './components/depositions/DepositionsSection';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Bem-vindo à S4STECHLP</h1>
        <p className="mt-4 text-lg">Sua fábrica de software de confiança</p>
      </main>
      <DepositionsSection />
      <Footer />
    </div>
  );
}
