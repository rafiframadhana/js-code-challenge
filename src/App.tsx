import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import QuestionDisplay from './components/QuestionDisplay';
import CodeEditor from './components/CodeEditor';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import { useTheme } from './hooks/useTheme';
import { useProgress } from './hooks/useProgress';
import { useSound } from './hooks/useSound';
import { useDeviceType } from './hooks/useDeviceType';
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
  const { isSoundOn, toggleSound } = useSound();
  const isMobile = useDeviceType();
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);
  const [showLanding, setShowLanding] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(() => {
    const stored = localStorage.getItem('desktopSidebarOpen');
    return stored !== null ? JSON.parse(stored) : false; // Default to closed
  });

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
    setIsMobileSidebarOpen(false);
  };

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  const toggleDesktopSidebar = () => {
    const newState = !isDesktopSidebarOpen;
    setIsDesktopSidebarOpen(newState);
    localStorage.setItem('desktopSidebarOpen', JSON.stringify(newState));
  };

  const handleCodeEvaluate = (code: string, results: TestResult[]) => {
    if (selectedChallenge && results.length > 0 && results.every(r => r.passed)) {
      markCompleted(selectedChallenge.id);
    }
  };

  const handleChallengeSelect = (challenge: Challenge) => {
    setSelectedChallenge(challenge);
    setShowLanding(false);
    setIsMobileSidebarOpen(false); // Close mobile sidebar when challenge is selected
    if (!isMobile) {
      setIsDesktopSidebarOpen(false); // Close desktop sidebar when challenge is selected
      localStorage.setItem('desktopSidebarOpen', JSON.stringify(false));
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-200`}>
      <Header 
        isDarkMode={isDarkMode} 
        onThemeToggle={toggleTheme} 
        isSoundOn={isSoundOn}
        onSoundToggle={toggleSound}
        onLogoClick={handleLogoClick} 
        onMobileSidebarToggle={toggleMobileSidebar}
        onDesktopSidebarToggle={toggleDesktopSidebar}
        showMobileSidebarToggle={!showLanding}
        showDesktopSidebarToggle={!showLanding}
      />
      
      {showLanding ? (
        <LandingPage isDarkMode={isDarkMode} onGetStarted={handleGetStarted} />
      ) : (
        <div className="flex flex-1 min-h-0 flex-col lg:flex-row relative">
          {/* Main content area - always takes full space */}
          <div className="flex-1 flex overflow-hidden flex-col lg:flex-row min-h-0">
            {selectedChallenge && (
              <>
                {/* Question Panel */}
                <div className="w-full lg:w-1/2 overflow-y-auto">
                  <div className="p-4 sm:p-6">
                    <QuestionDisplay
                      challenge={selectedChallenge}
                      isCompleted={isCompleted(selectedChallenge.id)}
                      isDarkMode={isDarkMode}
                    />
                  </div>
                </div>
                
                {/* Code Editor Panel */}
                <div className={`w-full lg:w-1/2 border-t lg:border-t-0 lg:border-l ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} overflow-y-auto flex-1 min-h-0`}>
                  <div className="p-4 sm:p-6 h-full">
                    <CodeEditor
                      key={selectedChallenge.id} // Force re-render when challenge changes
                      challenge={selectedChallenge}
                      onCodeEvaluate={handleCodeEvaluate}
                      isDarkMode={isDarkMode}
                      isSoundOn={isSoundOn}
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Mobile sidebar - left side overlay */}
          {isMobileSidebarOpen && (
            <>
              <div 
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden animate-fade-in"
                onClick={() => setIsMobileSidebarOpen(false)}
              />
              <div className="fixed inset-y-0 left-0 z-50 w-80 lg:hidden animate-slide-in-left">
                <Sidebar
                  selectedChallenge={selectedChallenge}
                  onChallengeSelect={handleChallengeSelect}
                  completedChallenges={completedChallenges}
                  isDarkMode={isDarkMode}
                  isMobileOpen={true}
                  onMobileClose={() => setIsMobileSidebarOpen(false)}
                />
              </div>
            </>
          )}

          {/* Desktop sidebar - right side overlay */}
          {!isMobile && isDesktopSidebarOpen && (
            <>
              <div 
                className="fixed inset-0 bg-black/50 z-40 animate-fade-in"
                onClick={() => {
                  setIsDesktopSidebarOpen(false);
                  localStorage.setItem('desktopSidebarOpen', JSON.stringify(false));
                }}
              />
              <div className="fixed inset-y-0 right-0 z-50 w-80 animate-slide-in-right">
                <Sidebar
                  selectedChallenge={selectedChallenge}
                  onChallengeSelect={handleChallengeSelect}
                  completedChallenges={completedChallenges}
                  isDarkMode={isDarkMode}
                  isMobileOpen={false}
                  onMobileClose={() => {
                    setIsDesktopSidebarOpen(false);
                    localStorage.setItem('desktopSidebarOpen', JSON.stringify(false));
                  }}
                />
              </div>
            </>
          )}
        </div>
      )}
      
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}