import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import QuestionDisplay from './components/QuestionDisplay';
import CodeEditor from './components/CodeEditor';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import { useTheme } from './hooks/useTheme';
import { useProgress } from './hooks/useProgress';
import { challengeData } from './data/challenges';
import type { Challenge } from './data/challenges';

interface TestResult {
  passed: boolean;
  input: string;
  expected: any;
  actual: any;
  error?: string;
  description?: string;
}

export default function App() {
  const { isDarkMode, toggleTheme } = useTheme();
  const { completedChallenges, markCompleted, isCompleted } = useProgress();
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);
  const [showLanding, setShowLanding] = useState(true);

  // Don't auto-select first challenge on load anymore since we start with landing page
  const handleGetStarted = () => {
    setShowLanding(false);
    if (!selectedChallenge) {
      const firstChallenge = challengeData.levels.Beginner.Arrays[0];
      setSelectedChallenge(firstChallenge);
    }
  };

  const handleLogoClick = () => {
    setShowLanding(true);
    setSelectedChallenge(null);
  };

  const handleCodeEvaluate = (code: string, results: TestResult[]) => {
    if (selectedChallenge && results.length > 0 && results.every(r => r.passed)) {
      markCompleted(selectedChallenge.id);
    }
  };

  const handleChallengeSelect = (challenge: Challenge) => {
    setSelectedChallenge(challenge);
    setShowLanding(false);
  };

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-200`}>
      <Header isDarkMode={isDarkMode} onThemeToggle={toggleTheme} onLogoClick={handleLogoClick} />
      
      {showLanding ? (
        <LandingPage isDarkMode={isDarkMode} onGetStarted={handleGetStarted} />
      ) : (
        <div className="flex flex-1 h-[calc(100vh-73px-auto)]">
          <Sidebar
            selectedChallenge={selectedChallenge}
            onChallengeSelect={handleChallengeSelect}
            completedChallenges={completedChallenges}
            isDarkMode={isDarkMode}
          />
          
          <div className="flex-1 flex overflow-hidden">
            {selectedChallenge && (
              <>
                {/* Question Panel */}
                <div className="w-1/2 overflow-y-auto">
                  <div className="p-6">
                    <QuestionDisplay
                      challenge={selectedChallenge}
                      isCompleted={isCompleted(selectedChallenge.id)}
                      isDarkMode={isDarkMode}
                    />
                  </div>
                </div>
                
                {/* Code Editor Panel */}
                <div className={`w-1/2 border-l ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} overflow-y-auto`}>
                  <div className="p-6 h-full">
                    <CodeEditor
                      key={selectedChallenge.id} // Force re-render when challenge changes
                      challenge={selectedChallenge}
                      onCodeEvaluate={handleCodeEvaluate}
                      isDarkMode={isDarkMode}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
      
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}