import Link from 'next/link'
import { Search, Server, Code } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div>
            <h1 className="text-4xl font-bold">My Web Creations</h1>
            <p className="text-sm mt-1">Transforming Ideas into Digital Reality</p>
          </div>
        </div>
        <nav className="bg-gray-800 rounded-lg p-2">
          <div className="flex flex-wrap items-center">
            <div className="flex items-center">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search projects..."
                  className="bg-gray-700 text-white px-4 py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 pl-10"
                  autoComplete="off"
                />
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
            </div>
            <div className="flex flex-wrap items-center space-x-4 ml-auto">
              <div className="relative group">
                <button className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors duration-300">
                  <Server className="inline-block mr-2 w-4 h-4" />Hosting
                </button>
                {/* Dropdown content */}
              </div>
              <div className="relative group">
                <button className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors duration-300">
                  <Code className="inline-block mr-2 w-4 h-4" />Language
                </button>
                {/* Dropdown content */}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

