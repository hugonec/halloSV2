
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center">
              <span className="text-xl font-bold tracking-tight">THIRDPERSON</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-10">
              <a href="#" className="text-sm font-medium uppercase tracking-wider hover:text-gray-500 transition">Work</a>
              <a href="#" className="text-sm font-medium uppercase tracking-wider hover:text-gray-500 transition">Studio</a>
              <a href="#" className="text-sm font-medium uppercase tracking-wider hover:text-gray-500 transition">Contact</a>
            </div>
            
            <div className="md:hidden">
              <button onClick={toggleMenu} className="p-2">
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-5 py-3 space-y-4">
              <a href="#" className="block py-2 text-sm font-medium uppercase tracking-wider">Work</a>
              <a href="#" className="block py-2 text-sm font-medium uppercase tracking-wider">Studio</a>
              <a href="#" className="block py-2 text-sm font-medium uppercase tracking-wider">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-5 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            We help brands <br />
            <span className="text-gray-400">find their voice</span>
          </h1>
          <div className="mt-12 max-w-2xl">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              We're a creative studio working at the intersection of strategy, design and technology.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition text-sm uppercase tracking-wider">
                View our work
              </button>
              <button className="px-8 py-3 border border-black rounded-full font-medium hover:bg-gray-100 transition text-sm uppercase tracking-wider">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 px-5 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Featured Work</h2>
            <a href="#" className="text-sm font-medium uppercase tracking-wider hover:text-gray-500 transition">
              View all work
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: "The New York Times", 
                description: "Redesigning the world's most trusted news source",
                image: "https://picsum.photos/800/600?random=1"
              },
              { 
                title: "Spotify", 
                description: "Reimagining music discovery for a new generation",
                image: "https://picsum.photos/800/600?random=2"
              },
              { 
                title: "Airbnb", 
                description: "Creating a more inclusive travel experience",
                image: "https://picsum.photos/800/600?random=3"
              },
              { 
                title: "Nike", 
                description: "Elevating digital performance storytelling",
                image: "https://picsum.photos/800/600?random=4"
              }
            ].map((project, index) => (
              <div key={index} className="group">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg bg-gray-200">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
                  <p className="mt-2 text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Section */}
      <section className="py-20 px-5 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">The Studio</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Founded in 2015, Third Person is a creative studio working at the intersection of strategy, design and technology.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We partner with ambitious brands to create meaningful digital experiences that connect with audiences and drive results.
              </p>
              <button className="px-8 py-3 border border-black rounded-full font-medium hover:bg-gray-100 transition text-sm uppercase tracking-wider">
                Learn more about us
              </button>
            </div>
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://picsum.photos/800/600?random=5" 
                alt="Third Person Studio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-5 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold tracking-tight mb-6">THIRDPERSON</h3>
              <p className="text-gray-400">
                A creative studio working at the intersection of strategy, design and technology.
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium uppercase tracking-wider mb-6">Navigation</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Work</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Studio</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-medium uppercase tracking-wider mb-6">Connect</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Instagram</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Third Person. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
  
