import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Trails from './pages/Trails';
import Trail from './pages/Trail';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';

function App() {
  React.useEffect(() => {
    // Init overcentric with your project ID from environment variable here
    // use "process.env.REACT_APP_OVERCENTRIC_PROJECT_ID" to get the project id
  }, []);

  const handleThrowError = () => {
    const errors = [
      'Test Error',
      'Test Error 2',
      'Test Error 3',
      'Test Error 4'
    ]

    throw new Error(errors[Math.floor(Math.random() * errors.length)]);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/" className="text-2xl font-bold text-green-600">TrailSeeker</Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link to="/" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    Home
                  </Link>
                  <Link to="/trails" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    Trails
                  </Link>
                  <Link to="/about" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    About
                  </Link>
                </div>
              </div>
              <div className="ml-6 flex items-center gap-2">
                <button
                  onClick={handleThrowError}
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-600 hover:bg-orange-700"
                >
                  Throw Error
                </button>
                {
                  localStorage.getItem('trailSeeker_userID') ? (
                    <Link
                      to="/profile"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                    >
                      Profile
                    </Link>
                  ) : (
                    <Link
                      to="/signin"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                    >
                      Sign in
                    </Link>
                  )
                }
              </div>
            </div>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={
              <Home />
            } />
            <Route path="/about" element={<About />} />
            <Route path="/trails" element={<Trails />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/trail/:id" element={<Trail />} />
          </Routes>
        </main>

        <footer className="bg-white mt-auto">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
            <div className="mt-8 md:mt-0 md:order-1">
              <p className="text-center text-base text-gray-400">
                &copy; 2025 TrailSeeker - <a href="https://overcentric.com" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-500">Overcentric</a> demo app. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
