import { challengeData } from '../data/challenges';
import type { Challenge } from '../data/challenges';

export function getChallengeDifficulty(challenge: Challenge): string | null {
  // Search through all levels to find which level contains this challenge
  for (const levelName in challengeData.levels) {
    const level = challengeData.levels[levelName];
    for (const topicName in level) {
      const challenges = level[topicName];
      if (challenges.some(c => c.id === challenge.id)) {
        return levelName;
      }
    }
  }
  return null;
}

export function findNextUncompletedChallenge(
  currentChallenge: Challenge,
  completedChallenges: Set<string>
): Challenge | null {
  const allChallenges: Challenge[] = [];
  
  // Flatten all challenges into a single array while maintaining order
  Object.keys(challengeData.levels).forEach(levelName => {
    const level = challengeData.levels[levelName];
    Object.keys(level).forEach(topicName => {
      const challenges = level[topicName];
      allChallenges.push(...challenges);
    });
  });

  // Find current challenge index
  const currentIndex = allChallenges.findIndex(challenge => challenge.id === currentChallenge.id);
  
  if (currentIndex === -1) return null;

  // Look for the next uncompleted challenge starting from the next position
  for (let i = currentIndex + 1; i < allChallenges.length; i++) {
    const challenge = allChallenges[i];
    if (!completedChallenges.has(challenge.id)) {
      return challenge;
    }
  }

  // If no uncompleted challenge found after current one, look from the beginning
  for (let i = 0; i < currentIndex; i++) {
    const challenge = allChallenges[i];
    if (!completedChallenges.has(challenge.id)) {
      return challenge;
    }
  }

  // If all challenges are completed, return null
  return null;
}
