import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPageComponent from './components/LandingPageComponent';
import ChallengePage from './components/ChallengePage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageComponent />} />
        <Route path="/challenge/:challengeId" element={<ChallengePage />} />
      </Routes>
    </Router>
  );
}