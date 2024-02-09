import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import OTP from './components/OTP';
import AccountCreated from './components/AccountCreated';
import Dashboard from './components/Dashboard';
import AllPost from './components/AllPosts/AllPost';
import CreatePost from './components/AllPosts/CreatePost';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='app'>
        <div className='header'>
          <div className='logo-name'>
            <img src="https://cranbow.ca/upload/iblock/692/692d91ff6f65bfc1b01ea8deac4f4532.jpg" alt='logo' className='title-logo' />
            <h2 className='logo-name'>ANONYMOUS</h2>
          </div>
          <h4 className='user-name' style={{ display: "none" }}>Welcome, Name</h4>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/account-created" element={<AccountCreated />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/all-posts" element={<AllPost />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
