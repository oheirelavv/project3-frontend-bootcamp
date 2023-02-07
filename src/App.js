import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Profile } from './profile/components/Profile';
import { Navbar } from './navbar/components/Navbar';
import { Auth } from './auth/components/Auth';
import { Logout } from './logout/components/Logout';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <Routes>
              <Route index element={<Navbar />} />
              <Route path="profile" element={<Profile />} />
              <Route path="login" element={<Auth />} />
              <Route path="logout" element={<Logout />} />
            </Routes>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;
