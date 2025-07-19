import React, { useState } from 'react';
import { Moon, Sun, RotateCcw } from 'lucide-react';
import { useProgress } from '../hooks/useProgress';
import ConfirmModal from './ConfirmModal';

interface HeaderProps {
  isDarkMode: boolean;
  onThemeToggle: () => void;
  onLogoClick?: () => void;
}

export default function Header({ isDarkMode, onThemeToggle, onLogoClick }: HeaderProps) {
  const { resetProgress } = useProgress();
  const [showResetModal, setShowResetModal] = useState(false);

  const handleResetProgress = () => {
    setShowResetModal(true);
  };

  const confirmReset = () => {
    resetProgress();
    window.location.reload();
  };

  return (
    <>
    <header className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b px-6 py-4`}>
      <div className="flex items-center justify-between">
        <button 
          onClick={onLogoClick}
          className="flex items-center space-x-3 hover:opacity-75 transition-opacity duration-200"
        >
          <img src="./logo.png" alt="JSCodeChallenge Logo" className="w-11 h-11" />
          <div className='text-left'>
            <h1 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              JSCodeChallenge
            </h1>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Learn. Solve. Repeat.
            </p>
          </div>
        </button>
        
        <div className="flex items-center space-x-3">
          <button
            onClick={handleResetProgress}
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
              isDarkMode
                ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
            }`}
            title="Reset all progress"
          >
            <RotateCcw className="w-4 h-4" />
            <span className="text-sm">Reset Progress</span>
          </button>
          
          <button
            onClick={onThemeToggle}
            className={`p-2 rounded-lg transition-colors ${
              isDarkMode
                ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
            }`}
            title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>
      
      <ConfirmModal
        isOpen={showResetModal}
        onClose={() => setShowResetModal(false)}
        onConfirm={confirmReset}
        title="Reset Progress"
        message="Are you sure you want to reset all progress? This action cannot be undone and you will lose all completed challenges."
        confirmText="Reset"
        cancelText="Cancel"
        isDarkMode={isDarkMode}
        variant="danger"
      />
    </>
  );
}