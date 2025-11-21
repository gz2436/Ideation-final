"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"

const navigationLinks = [
  {
    name: "Guide",
    href: "/guide",
  },
  {
    name: "Plans",
    href: "/plans",
  },
  {
    name: "FAQ",
    href: "/faq",
  },
  {
    name: "About",
    href: "/about",
  },
]

// @component: PortfolioNavbar
export const PortfolioNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    // Check login state
    const checkLoginStatus = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true")
    }

    checkLoginStatus()
    window.addEventListener("scroll", handleScroll)
    // Listen for storage events to update state across tabs/windows
    window.addEventListener("storage", checkLoginStatus)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("storage", checkLoginStatus)
    }
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    setIsLoggedIn(false)
    setIsMobileMenuOpen(false)
    window.location.href = "/"
  }

  // @return
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold text-foreground hover:text-primary transition-colors duration-200"
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
              }}
            >
              <span
                style={{
                  fontFamily: "Figtree",
                  fontWeight: "800",
                }}
              >
                GoUS
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-foreground hover:text-primary px-3 py-2 text-base font-medium transition-colors duration-200 relative group"
                  style={{
                    fontFamily: "Figtree, sans-serif",
                    fontWeight: "400",
                  }}
                >
                  <span>{link.name}</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="text-foreground hover:text-primary px-3 py-2 text-base font-medium transition-colors duration-200 relative group"
                style={{
                  fontFamily: "Figtree, sans-serif",
                  fontWeight: "400",
                }}
              >
                <span>Log Out</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
              </button>
            ) : (
              <Link
                href="/login"
                className="text-foreground hover:text-primary px-3 py-2 text-base font-medium transition-colors duration-200 relative group"
                style={{
                  fontFamily: "Figtree, sans-serif",
                  fontWeight: "400",
                }}
              >
                <span>Login</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
              </Link>
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-foreground hover:text-primary p-2 rounded-md transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-border"
          >
            <div className="px-4 sm:px-6 py-6 space-y-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-left text-foreground hover:text-primary py-3 text-lg font-medium transition-colors duration-200"
                  style={{
                    fontFamily: "Figtree, sans-serif",
                    fontWeight: "400",
                  }}
                >
                  <span>{link.name}</span>
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                {isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left rounded-md px-3 py-4 text-base font-medium text-[#555555] hover:bg-gray-50 hover:text-[#202020]"
                    style={{
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                    }}
                  >
                    Log Out
                  </button>
                ) : (
                  <Link
                    href="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-left rounded-md px-3 py-4 text-base font-medium text-[#555555] hover:bg-gray-50 hover:text-[#202020]"
                    style={{
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                    }}
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
