import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ICPProvider } from './context/ICPContext';
import { ThemeProvider } from './context/ThemeContext';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { DemoForm } from './components/DemoForm';
import { Documentation } from './pages/Documentation';
import { ThemeToggle } from './components/ThemeToggle';

function LandingPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Pricing />
      <FAQ />
      <DemoForm />

      <footer className="py-12 text-center text-gray-500 dark:text-gray-600 text-sm border-t border-slate-200 dark:border-white/5">
        <p>© {new Date().getFullYear()} Opti360. All rights reserved.</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ThemeProvider>
        <ICPProvider>
          <ThemeToggle />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/docs" element={<Documentation />} />
          </Routes>
        </ICPProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
