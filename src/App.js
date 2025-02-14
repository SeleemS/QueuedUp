import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ModalProvider } from './ModalContext';
import firebase from './firebaseConfig';
import './App.css';
import OnboardingModal from './components/OnboardingModal';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import WatchlistPage from './pages/WatchlistPage';
import SearchResultsPage from './pages/SearchResultsPage';
import ProfilePage from './pages/ProfilePage';
import Footer from './components/Footer';
import { Box, Flex } from '@chakra-ui/react';  // Import Chakra Flex utilities

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      console.log("Auth state changed, user:", user);
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <ModalProvider>
      <OnboardingModal currentUser={currentUser} />
      <Router>
        {/* Full-height Flex container */}
        <Flex direction="column" minHeight="100vh">
          
          {/* Main content area takes up remaining space */}
          <Box flex="1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/homepage" element={<HomePage user={currentUser} />} />
              <Route path="/watchlist" element={<WatchlistPage user={currentUser} />} />
              <Route path="/search" element={<SearchResultsPage user={currentUser} />} />
              <Route path="/profile" element={<ProfilePage user={currentUser} />} />
            </Routes>
          </Box>

          {/* Footer stays at the bottom */}
          <Footer />

        </Flex>
      </Router>
    </ModalProvider>
  );
};

export default App;
