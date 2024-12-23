import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {currentPage === 'home' && (
        <Home handlePageChange={handlePageChange} />
      )}
      {currentPage === 'home1' && (
        <Home1 handlePageChange={handlePageChange} />
      )}
      {currentPage === 'login' && (
        <Login handlePageChange={handlePageChange} />
      )}
      {currentPage === 'signup' && (
        <Signup handlePageChange={handlePageChange} />
      )}
      {currentPage === 'courseSelection' && (
        <CourseSelection handlePageChange={handlePageChange} />
      )}
      {currentPage === 'welcome' && (
        <Welcome handlePageChange={handlePageChange} />
      )}
    </div>
  );
}


function Home({ handlePageChange }) {
  return (
    <div className="container">
      <img src="/pic/logo.png" alt="AI Mentee Logo" className="logo" />
      <div className="left-section">
        <button className="btn" onClick={() => handlePageChange('home1')}>
          Get Started
        </button>
      </div>
      <div className="right-section">
        <img src="/pic/home.jpg" alt="Illustration" className="illustration" />
      </div>
    </div>
  );
}
function Home1({ handlePageChange }) {
  return (
    <div>
      {/* Logo */}
      <img src="/pic/logo.png" alt="AI Mentee Logo" className="logo" />

      {/* Main Container */}
      <div className="container">
        {/* Left Section */}
        <div className="left-section">
          <a href="/login.html">
            <button className="btn" onClick={() => handlePageChange('login')}>Log In</button>
          </a>
          <a href="/signup.html">
            <button className="btn" onClick={() => handlePageChange('signup')}>Sign Up</button>
          </a>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <img
            src="/pic/home.jpg"
            alt="Illustration"
            className="illustration"
          />
        </div>
      </div>
    </div>
  );
}

function Login({ handlePageChange }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add login logic here
    handlePageChange('welcome');
  };

  return (
    <div className="container">
      <div className="image-container">
        <img src="/pic/login pic.png" alt="AI Mentee Illustration" />
      </div>
      <div className="login-form">
        <h2>AI MENTEE</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button type="submit" className="btn-login">
            Log In
          </button>
        </form>
        <button onClick={() => handlePageChange('home')}>Home</button>
      </div>
    </div>
  );
}

function Signup({ handlePageChange }) {
  return (
    <div>
      <h1>Signup Page</h1>
      <button onClick={() => handlePageChange('home')}>Home</button>
    </div>
  );
}

function CourseSelection({ handlePageChange }) {
  return (
    <div className="container">
      <label for="course">Please Select the Course:</label>
      <select id="course" name="course">
        <option value="" disabled selected>
          select
        </option>
        <option value="course1">Course 1</option>
        <option value="course2">Course 2</option>
        <option value="course3">Course 3</option>
      </select>
      <button onClick={() => handlePageChange('home')}>Home</button>
    </div>
  );
}

function Welcome({ handlePageChange }) {
  return (
    <div>
      <h1>Welcome Page</h1>
      <button onClick={() => handlePageChange('home')}>Home</button>
    </div>
  );
}

export default App;