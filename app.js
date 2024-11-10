// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Components for pages
const Home = () => (
  <div className="bg-white p-6 shadow-md rounded-lg text-center">
    <h1 className="text-3xl font-bold mb-4">Home Page</h1>
    <p>Welcome to our simple multi-page React website!</p>
  </div>
);

const About = () => (
  <div className="bg-white p-6 shadow-md rounded-lg text-center">
    <h1 className="text-3xl font-bold mb-4">About Us</h1>
    <p>Learn more about what we do and who we are.</p>
  </div>
);

const Contact = () => (
  <div className="bg-white p-6 shadow-md rounded-lg text-center">
    <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
    <p>Get in touch with us via email or phone.</p>
  </div>
);

// Main App component
const App = () => (
  <Router>
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      {/* Navigation */}
      <nav className="mb-8">
        <Link to="/" className="text-blue-500 mx-4 hover:text-blue-700">Home</Link>
        <Link to="/about" className="text-blue-500 mx-4 hover:text-blue-700">About</Link>
        <Link to="/contact" className="text-blue-500 mx-4 hover:text-blue-700">Contact</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </Router>
);

export default App;
