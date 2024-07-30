import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login/Login';
import PokemonList from './components/PokemonList/PokemonList';

import Navbar from './components/Navbar/Navbar';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PokemonList />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
