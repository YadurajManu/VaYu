'use client'

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { MoonIcon, SunIcon, MenuIcon, XIcon } from 'lucide-react'
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

const menuItems = [
  { href: "/", label: "🏠 Home Base" },
  { href: "/services", label: "🚀 App Magic" },
  { href: "/portfolio", label: "💫 Our Creations" },
  { href: "/about", label: "🤝 The Squad" },
  { href: "/contact", label: "📱 Connect" },
]

export function Navigation() {
  const { setTheme, theme } = useTheme()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <nav className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="flex items-center">
            <motion.span 
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF1CF7] to-[#00F0FF]"
              whileHover={{ scale: 1.05 }}
            >
              VaYu
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <motion.div
                key={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-4"
            >
              <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
            </Button>
          </div>

          {/* Mobile Navigation */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 right-0 bg-black/90 backdrop-blur-lg border-b border-white/10 py-4"
          >
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  )
}

