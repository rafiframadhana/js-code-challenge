import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Check } from 'lucide-react';
import { challengeData } from '../data/challenges';
import type { Challenge } from '../data/challenges';

interface SidebarProps {
  selectedChallenge: Challenge | null;
  onChallengeSelect: (challenge: Challenge) => void;
  completedChallenges: Set<string>;
  isDarkMode: boolean;
}

export default function Sidebar({ selectedChallenge, onChallengeSelect, completedChallenges, isDarkMode }: SidebarProps) {
  const [expandedLevels, setExpandedLevels] = useState<Set<string>>(new Set(['Beginner']));
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(new Set());

  const toggleLevel = (level: string) => {
    const newExpanded = new Set(expandedLevels);
    if (newExpanded.has(level)) {
      newExpanded.delete(level);
      // Also collapse all topics within this level
      const newExpandedTopics = new Set(expandedTopics);
      Object.keys(challengeData.levels[level]).forEach(topic => {
        newExpandedTopics.delete(`${level}-${topic}`);
      });
      setExpandedTopics(newExpandedTopics);
    } else {
      newExpanded.add(level);
    }
    setExpandedLevels(newExpanded);
  };

  const toggleTopic = (level: string, topic: string) => {
    const topicKey = `${level}-${topic}`;
    const newExpanded = new Set(expandedTopics);
    if (newExpanded.has(topicKey)) {
      newExpanded.delete(topicKey);
    } else {
      newExpanded.add(topicKey);
    }
    setExpandedTopics(newExpanded);
  };

  const getLevelProgress = (level: string) => {
    const topics = challengeData.levels[level];
    let totalChallenges = 0;
    let completedCount = 0;
    
    Object.values(topics).forEach(challenges => {
      totalChallenges += challenges.length;
      challenges.forEach(challenge => {
        if (completedChallenges.has(challenge.id)) {
          completedCount++;
        }
      });
    });
    
    return { completed: completedCount, total: totalChallenges };
  };

  const getTopicProgress = (level: string, topic: string) => {
    const challenges = challengeData.levels[level][topic];
    const completedCount = challenges.filter(challenge => completedChallenges.has(challenge.id)).length;
    return { completed: completedCount, total: challenges.length };
  };

  return (
    <div className={`w-80 h-full ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} border-r overflow-y-auto`}>
      <div className="p-6">
        <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
          Coding Challenges
        </h2>
        
        <div className="space-y-2">
          {Object.entries(challengeData.levels).map(([level, topics]) => {
            const isLevelExpanded = expandedLevels.has(level);
            const progress = getLevelProgress(level);
            
            return (
              <div key={level} className="space-y-1">
                <button
                  onClick={() => toggleLevel(level)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                    isDarkMode 
                      ? 'hover:bg-gray-800 text-gray-200' 
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    {isLevelExpanded ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                    <span className="font-medium">{level}</span>
                  </div>
                  <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {progress.completed}/{progress.total}
                  </div>
                </button>

                {isLevelExpanded && (
                  <div className="ml-6 space-y-1">
                    {Object.entries(topics).map(([topic, challenges]) => {
                      const isTopicExpanded = expandedTopics.has(`${level}-${topic}`);
                      const topicProgress = getTopicProgress(level, topic);
                      const isTopicCompleted = topicProgress.completed === topicProgress.total;
                      
                      return (
                        <div key={topic} className="space-y-1">
                          <button
                            onClick={() => toggleTopic(level, topic)}
                            className={`w-full flex items-center justify-between p-2 rounded-md transition-all duration-200 ${
                              isDarkMode 
                                ? 'hover:bg-gray-800 text-gray-300' 
                                : 'hover:bg-gray-50 text-gray-600'
                            }`}
                          >
                            <div className="flex items-center space-x-2">
                              {isTopicExpanded ? (
                                <ChevronDown className="w-3 h-3" />
                              ) : (
                                <ChevronRight className="w-3 h-3" />
                              )}
                              <span className="text-sm">{topic}</span>
                              {isTopicCompleted && (
                                <Check className="w-3 h-3 text-green-500" />
                              )}
                            </div>
                            <div className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                              {topicProgress.completed}/{topicProgress.total}
                            </div>
                          </button>

                          {isTopicExpanded && (
                            <div className="ml-5 space-y-1">
                              {challenges.map((challenge) => {
                                const isCompleted = completedChallenges.has(challenge.id);
                                const isSelected = selectedChallenge?.id === challenge.id;
                                
                                return (
                                  <button
                                    key={challenge.id}
                                    onClick={() => onChallengeSelect(challenge)}
                                    className={`w-full flex items-center justify-between p-2 rounded-md text-left transition-all duration-200 ${
                                      isSelected
                                        ? isDarkMode
                                          ? 'bg-blue-900 text-blue-200'
                                          : 'bg-blue-50 text-blue-700'
                                        : isDarkMode
                                          ? 'hover:bg-gray-800 text-gray-400'
                                          : 'hover:bg-gray-50 text-gray-500'
                                    }`}
                                  >
                                    <span className="text-sm truncate pr-2">{challenge.title}</span>
                                    {isCompleted && (
                                      <Check className="w-3 h-3 text-green-500 flex-shrink-0" />
                                    )}
                                  </button>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}