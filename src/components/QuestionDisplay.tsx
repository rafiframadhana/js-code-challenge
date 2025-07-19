import React, { useState } from 'react';
import { Lightbulb, CheckCircle } from 'lucide-react';
import type { Challenge } from '../data/challenges';
import HintModal from './HintModal';

interface QuestionDisplayProps {
  challenge: Challenge;
  isCompleted: boolean;
  isDarkMode: boolean;
}

export default function QuestionDisplay({ challenge, isCompleted, isDarkMode }: QuestionDisplayProps) {
  const [showHint, setShowHint] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-3">
            <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {challenge.title}
            </h1>
            {isCompleted && (
              <CheckCircle className="w-6 h-6 text-green-500" />
            )}
          </div>
          <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {challenge.description}
          </p>
        </div>
        
        <button
          onClick={() => setShowHint(true)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
            isDarkMode
              ? 'bg-yellow-900/20 hover:bg-yellow-900/30 text-yellow-400 border border-yellow-700'
              : 'bg-yellow-50 hover:bg-yellow-100 text-yellow-700 border border-yellow-200'
          }`}
        >
          <Lightbulb className="w-4 h-4" />
          <span className="text-sm font-medium">Hint</span>
        </button>
      </div>

      {/* Test Cases Preview */}
      <div className="space-y-3">
        <h3 className={`font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
          Example Test Cases
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {challenge.testCases.slice(0, 2).map((testCase, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border ${
                isDarkMode
                  ? 'bg-gray-800 border-gray-700'
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              <div className="space-y-2">
                <div className="text-sm">
                  <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Input:
                  </span>
                  <code className={`ml-2 font-mono ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    {testCase.input}
                  </code>
                </div>
                <div className="text-sm">
                  <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Expected:
                  </span>
                  <code className={`ml-2 font-mono ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
                    {JSON.stringify(testCase.expected)}
                  </code>
                </div>
                {testCase.description && (
                  <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {testCase.description}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {challenge.testCases.length > 2 && (
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            + {challenge.testCases.length - 2} more test cases will be evaluated
          </p>
        )}
      </div>

      <HintModal
        isOpen={showHint}
        onClose={() => setShowHint(false)}
        hint={challenge.hint}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}