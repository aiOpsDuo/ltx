import { ThemeProvider } from './context/ThemeContext';
import { DiagnosticoModalProvider } from './context/DiagnosticoModalContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Pilares } from './components/Pilares';
import { Metodologia } from './components/Metodologia';
import { TecnologiaX } from './components/TecnologiaX';
import { Depoimentos } from './components/Depoimentos';
import { Founders } from './components/Founders';
import { Faq } from './components/Faq';
import { CtaFinal } from './components/CtaFinal';
import { Footer } from './components/Footer';
import { DiagnosticoModal } from './components/DiagnosticoModal';

// Ordem das seções conforme PRD §5: Header → Hero → Credibilidade/Pilares →
// Metodologia/Diferencial → Tecnologia X → Depoimentos → Quem está por trás → FAQ → CTA final → Footer.
function App() {
  return (
    <ThemeProvider>
      <DiagnosticoModalProvider>
        <Header />
        <main>
          <Hero />
          <Pilares />
          <Metodologia />
          <TecnologiaX />
          <Depoimentos />
          <Founders />
          <Faq />
          <CtaFinal />
        </main>
        <Footer />
        <DiagnosticoModal />
      </DiagnosticoModalProvider>
    </ThemeProvider>
  );
}

export default App;
