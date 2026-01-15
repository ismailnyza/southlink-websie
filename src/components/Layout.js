import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import '../styles/global.css'

const Layout = ({ children, isHomePage = false }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(true)
      return
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
          isScrolled || !isHomePage || isMobileMenuOpen
            ? 'shadow-md'
            : 'shadow-none backdrop-blur-0'
        }`}
      >
        <div
          className="absolute inset-0 bg-white"
          style={{
            clipPath: isScrolled || !isHomePage
              ? 'inset(0 0 0% 0)'
              : isMobileMenuOpen
              ? 'inset(0 0 0% 0)'
              : 'inset(0 0 100% 0)',
            transition: 'clip-path 350ms cubic-bezier(0.32,0.72,0,1)',
            animation: isMobileMenuOpen && isHomePage && !isScrolled
              ? 'fillDown 350ms cubic-bezier(0.32,0.72,0,1) forwards'
              : !isMobileMenuOpen && isHomePage && !isScrolled
              ? 'fillUp 350ms cubic-bezier(0.32,0.72,0,1) forwards'
              : 'none'
          }}
        />
        <nav className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 min-[1920px]:px-24 min-[2000px]:px-28 relative z-10">
          <div className="flex items-center justify-between h-14">
            <Link
              to="/"
              className={`text-xl min-[375px]:text-[1.25rem] min-[414px]:text-2xl min-[480px]:text-[1.5rem] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl min-[1920px]:text-6xl min-[2000px]:text-7xl font-bold transition-colors ${
                isScrolled || !isHomePage || isMobileMenuOpen ? 'text-primary' : 'text-white'
              }`}
            >
              Southlink Travels
            </Link>
            <div className="hidden md:flex gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 min-[1920px]:gap-14 min-[2000px]:gap-16">
              <a
                href="/#flight-planner"
                onClick={(e) => {
                  if (window.location.pathname === '/') {
                    e.preventDefault()
                    const planner = document.getElementById('flight-planner')
                    if (planner) {
                      planner.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }
                }}
                className={`transition-colors font-medium ${
                  isScrolled || !isHomePage
                    ? 'text-gray-700 hover:text-primary'
                    : 'text-white hover:text-gray-200'
                }`}
              >
                Flights
              </a>
              <Link
                to="/tours/inbound"
                className={`transition-colors font-medium ${
                  isScrolled || !isHomePage
                    ? 'text-gray-700 hover:text-primary'
                    : 'text-white hover:text-gray-200'
                }`}
                activeStyle={{ color: '#D32F2F' }}
              >
                Sri Lanka Experiences
              </Link>
              <Link
                to="/tours/outbound"
                className={`transition-colors font-medium ${
                  isScrolled || !isHomePage
                    ? 'text-gray-700 hover:text-primary'
                    : 'text-white hover:text-gray-200'
                }`}
                activeStyle={{ color: '#D32F2F' }}
              >
                World Travel
              </Link>
              <Link
                to="/corporate"
                className={`transition-colors font-medium ${
                  isScrolled || !isHomePage
                    ? 'text-gray-700 hover:text-primary'
                    : 'text-white hover:text-gray-200'
                }`}
                activeStyle={{ color: '#D32F2F' }}
              >
                Corporate Travel
              </Link>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 transition-colors ${
                isScrolled || !isHomePage || isMobileMenuOpen ? 'text-gray-700' : 'text-white'
              }`}
              aria-label="Menu"
            >
              <div className="relative w-6 h-6">
                <svg
                  className={`w-6 h-6 absolute inset-0 transition-all ease-out ${
                    isMobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                  }`}
                  style={{ transitionDuration: '350ms' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`w-6 h-6 absolute inset-0 transition-all ease-out ${
                    isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                  }`}
                  style={{ transitionDuration: '350ms' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </button>
          </div>
          <div
            className={`md:hidden overflow-hidden transition-all ease-[cubic-bezier(0.32,0.72,0,1)] ${
              isMobileMenuOpen
                ? 'max-h-64 opacity-100 translate-y-0'
                : 'max-h-0 opacity-0 -translate-y-2'
            }`}
            style={{ transitionDuration: '550ms' }}
          >
            <div className="pb-4 mt-2 pt-4 bg-transparent">
              <a
                href="/#flight-planner"
                onClick={(e) => {
                  setIsMobileMenuOpen(false)
                  if (window.location.pathname === '/') {
                    e.preventDefault()
                    setTimeout(() => {
                      const planner = document.getElementById('flight-planner')
                      if (planner) {
                        planner.scrollIntoView({ behavior: 'smooth', block: 'start' })
                      }
                    }, 100)
                  }
                }}
                className="block py-2 text-gray-700 hover:text-primary transition-colors active:bg-gray-50 rounded-lg -mx-2 px-2"
              >
                Flights
              </a>
              <Link
                to="/tours/inbound"
                className="block py-2 text-gray-700 hover:text-primary transition-colors active:bg-gray-50 rounded-lg -mx-2 px-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sri Lanka Experiences
              </Link>
              <Link
                to="/tours/outbound"
                className="block py-2 text-gray-700 hover:text-primary transition-colors active:bg-gray-50 rounded-lg -mx-2 px-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                World Travel
              </Link>
              <Link
                to="/corporate"
                className="block py-2 text-gray-700 hover:text-primary transition-colors active:bg-gray-50 rounded-lg -mx-2 px-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Corporate Travel
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-1 pt-14">
        {children}
      </main>

      <footer className={`bg-slate-900 text-white py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28 min-[1920px]:py-32 min-[2000px]:py-36 ${isHomePage ? '' : 'mt-16'}`}>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 min-[1920px]:px-24 min-[2000px]:px-28">
          <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl min-[1920px]:max-w-[90rem] min-[2000px]:max-w-[100rem] mx-auto">
            <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 2xl:mb-20">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl min-[1920px]:text-7xl min-[2000px]:text-8xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6 xl:mb-8">Southlink Travels</h3>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl min-[1920px]:text-4xl min-[2000px]:text-5xl mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-8">Flights • Tours • Corporate</p>
              <p className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl min-[1920px]:text-3xl min-[2000px]:text-4xl">IATA Certified • Established in Galle</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl min-[1920px]:text-4xl min-[2000px]:text-5xl text-gray-400 mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 2xl:mb-20">
              <Link to="/flights" className="hover:text-white transition-colors">
                Flights
              </Link>
              <span className="text-gray-600">|</span>
              <Link to="/tours" className="hover:text-white transition-colors">
                Tours
              </Link>
              <span className="text-gray-600">|</span>
              <Link to="/corporate" className="hover:text-white transition-colors">
                Corporate
              </Link>
              <span className="text-gray-600">|</span>
              <Link to="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </div>
            <div className="text-center text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl min-[1920px]:text-3xl min-[2000px]:text-4xl">
              <p>&copy; {new Date().getFullYear()} Southlink Travels</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
