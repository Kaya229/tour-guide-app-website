import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import VisionPage from './pages/VisionPage';
import AudioPage from './pages/AudioPage';
import ChatPage from './pages/ChatPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import ConsentBanner from './components/ConsentBanner';
import { LanguageProvider } from './context/LanguageContext';
import './App.css';

function HomePage() {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ConsentBanner />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features/vision" element={<VisionPage />} />
          <Route path="/features/audio" element={<AudioPage />} />
          <Route path="/features/chat" element={<ChatPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
