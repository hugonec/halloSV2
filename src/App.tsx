
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-xl font-bold">Third Person</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-sm font-medium">Work</a>
              <a href="#" className="text-sm font-medium">Studio</a>
              <a href="#" className="text-sm font-medium">Contact</a>
            </div>
            
            <div className="md:hidden">
              <button onClick={toggleMenu} className="p-2">
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-3 space-y-2">
              <a href="#" className="block py-2 text-sm font-medium">Work</a>
              <a href="#" className="block py-2 text-sm font-medium">Studio</a>
              <a href="#" className="block py-2 text-sm font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            We help brands <br />
            <span className="text-gray-400">find their voice</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-gray-600 max-w-2xl">
            A creative studio focused on strategy, design and technology.
          </p>
          <button className="mt-12 px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition">
            View our work
          </button>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">Featured Work</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg bg-gray-200">
                  <img 
                    src={`https://picsum.photos/800/600?random=${item}`} 
                    alt={`Project ${item}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <h3 className="mt-4 text-xl font-medium">Project Title {item}</h3>
                <p className="mt-1 text-gray-600">Client Name {item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Third Person</h3>
              <p className="text-gray-400">A creative studio focused on strategy, design and technology.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-medium mb-4">Navigation</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Work</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Studio</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-4">Connect</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Instagram</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">LinkedIn</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Third Person. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
  
