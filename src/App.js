import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PlushiePage from './pages/PlushiePage';
import RankingPage from './pages/RankingPage';
import CustomizationPage from './pages/CustomizationPage';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';

import './variables.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/plushies"
                element={
                  <PrivateRoute>
                    <PlushiePage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/rankings"
                element={
                  <PrivateRoute>
                    <RankingPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/customize"
                element={
                  <PrivateRoute>
                    <CustomizationPage />
                  </PrivateRoute>
                }
              />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;