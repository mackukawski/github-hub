import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { Pricing } from "../components/Pricing";
import { FAQ } from "../components/FAQ";
import { DemoForm } from "../components/DemoForm";

const Index = () => {
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
};

export default Index;
