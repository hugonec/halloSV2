import React from 'react';
import './App.css';
import HalloLogo from './assets/HalloLogo.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen text-[#1f2b3e] font-sans">
      {/* NAVBAR */}
      <header className="flex justify-between items-center px-6 py-4 shadow-md">
        <div className="flex items-center space-x-2">
          <img src={HalloLogo} alt="Hallo Solutions Logo" className="h-10" />
        </div>
        <nav className="hidden md:flex space-x-6 font-medium">
          <a href="#" className="hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-600">How It Works</a>
          <a href="#" className="hover:text-blue-600">3PL Directory</a>
          <a href="#" className="hover:text-blue-600">Get Matched</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </nav>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden focus:outline-none">
          <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </header>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden px-6 py-4 space-y-4 bg-white shadow">
          <a href="#" className="block">About</a>
          <a href="#" className="block">How It Works</a>
          <a href="#" className="block">3PL Directory</a>
          <a href="#" className="block">Get Matched</a>
          <a href="#" className="block">Contact</a>
        </div>
      )}

      {/* HERO SECTION */}
      <main className="flex flex-col items-center justify-center text-center px-6 py-20 bg-white">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-4xl mb-6">
          Seamlessly connect with the right 3PL partner
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Hallo Solutions helps brands across Europe find and collaborate with top-tier logistics providers — efficiently, transparently, and smartly.
        </p>
        <a href="#" className="bg-[#1f2b3e] text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-800 transition">
          Get Matched
        </a>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#f5f5f5] text-sm text-gray-600 px-6 py-6 mt-20">
        <div className="flex justify-between items-center flex-col md:flex-row">
          <p>© 2025 Hallo Solutions — All rights reserved.</p>
          <a href="https://www.linkedin.com/in/hugonectoux/" target="_blank" rel="noreferrer" className="text-blue-700 hover:underline mt-2 md:mt-0">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
