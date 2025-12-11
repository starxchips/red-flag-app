import { useState, useEffect } from 'react';
import { WelcomePage } from './components/WelcomePage';
import { SelectionPage } from './components/SelectionPage';
import { ResultsPage } from './components/ResultsPage';

type ResultData = {
  selectedFlags: string[];
  totalPoints: number;
  maxPoints: number;
  percentage: number;
};

export default function App() {
  const [step, setStep] = useState<'welcome' | 'select' | 'results'>('welcome');
  const [result, setResult] = useState<ResultData | null>(null);

  // ⭐ Fade animation
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
    const timeout = setTimeout(() => setFade(false), 400);
    return () => clearTimeout(timeout);
  }, [step]);

  const fadeClass =
    fade
      ? "opacity-0 transition-opacity duration-500"
      : "opacity-100 transition-opacity duration-500";

  // ------------------------
  // PAGE HANDLERS
  // ------------------------

  const handleStart = () => {
    setResult(null);
    setStep('select');
    window.scrollTo(0, 0);
  };

  const handleComplete = (data: ResultData) => {
    setResult(data);
    setStep('results'); // ⬅ DIRECTLY GO TO RESULTS
    window.scrollTo(0, 0);
  };  

  const handleRevealDone = () => {
    setStep('results');
    window.scrollTo(0, 0);
  };

  const handleRestart = () => {
    setResult(null);
    setStep('welcome');
    window.scrollTo(0, 0);
  };

  // ------------------------
  // RENDER
  // ------------------------

  return (
    <div className={fadeClass}>
      {step === 'welcome' && (
        <WelcomePage onStart={handleStart} />
      )}

      {step === 'select' && (
        <SelectionPage onComplete={handleComplete} />
      )}

      {step === 'results' && result && (
        <ResultsPage result={result} onRestart={handleRestart} />
      )}
    </div>
  );
}
