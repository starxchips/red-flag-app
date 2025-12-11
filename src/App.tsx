import { useState } from 'react';
import { WelcomePage } from './components/WelcomePage';
import { SelectionPage } from './components/SelectionPage';
import { ResultsPage } from './components/ResultsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'welcome' | 'selection' | 'results'>('welcome');
  const [selectedFlags, setSelectedFlags] = useState<string[]>([]);

  const navigateToSelection = () => setCurrentPage('selection');
  const navigateToResults = (flags: string[]) => {
    setSelectedFlags(flags);
    setCurrentPage('results');
  };
  const navigateToWelcome = () => {
    setCurrentPage('welcome');
    setSelectedFlags([]);
  };

  return (
    <div className="min-h-screen w-full">
      {currentPage === 'welcome' && <WelcomePage onStart={navigateToSelection} />}
      {currentPage === 'selection' && <SelectionPage onComplete={navigateToResults} />}
      {currentPage === 'results' && (
        <ResultsPage 
          selectedFlags={selectedFlags} 
          onRestart={navigateToWelcome}
        />
      )}
    </div>
  );
}
