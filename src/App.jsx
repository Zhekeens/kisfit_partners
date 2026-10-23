import './App.css';
import Background from './components/Background';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Calculator from './components/Calculator';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MotivationToggle from './components/MotivationToggle';

export default function App() {
  return (
    <div className="page-wrapper">
      <Background />
      <MotivationToggle />
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Portfolio />
        <Calculator />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
