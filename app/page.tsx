"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Music,
  Zap,
  Clock,
  TrendingUp,
  Youtube,
  Music2,
  Mail,
  Twitter,
  Instagram,
  Sparkles,
  ChevronDown,
} from "lucide-react"
import Link from "next/link"

export default function LifeTalesLanding() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [showTools, setShowTools] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToTools = () => {
    setShowTools(true)
    setTimeout(() => {
      const toolsSection = document.getElementById("tools-section")
      if (toolsSection) {
        toolsSection.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  const FloatingNote = ({ delay, duration, size }: { delay: number; duration: number; size: number }) => (
    <div
      className="absolute animate-bounce opacity-30"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    >
      <Music size={size} className="text-cyan-400" />
    </div>
  )

  const SoundWave = ({ delay }: { delay: number }) => (
    <div
      className="absolute w-1 bg-gradient-to-t from-cyan-400 to-purple-500 animate-pulse opacity-40"
      style={{
        height: `${Math.random() * 100 + 20}px`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${delay}s`,
        animationDuration: "1.5s",
      }}
    />
  )

  const GlowOrb = ({ delay }: { delay: number }) => (
    <div
      className="absolute w-4 h-4 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full animate-ping opacity-20"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${delay}s`,
        animationDuration: "3s",
      }}
    />
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white overflow-hidden relative">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <FloatingNote key={i} delay={i * 0.3} duration={2 + Math.random() * 3} size={12 + Math.random() * 16} />
        ))}
        {[...Array(30)].map((_, i) => (
          <SoundWave key={i} delay={i * 0.05} />
        ))}
        {[...Array(15)].map((_, i) => (
          <GlowOrb key={i} delay={i * 0.4} />
        ))}
      </div>

      {/* Enhanced Mouse Glow Effect */}
      <div
        className="fixed w-[600px] h-[600px] rounded-full bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-3xl pointer-events-none transition-all duration-500 ease-out"
        style={{
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
        }}
      />

      {/* Header */}
      <header className="relative z-10 p-4">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Music2 className="w-8 h-8 text-cyan-400 animate-pulse" />
              <div className="absolute inset-0 w-8 h-8 bg-cyan-400/20 rounded-full animate-ping" />
            </div>
            <h1 className="text-2xl font-black tracking-widest bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              LIFETALES
            </h1>
          </div>
          <div className="hidden md:flex space-x-6">
            <a
              href="#features"
              className="hover:text-cyan-400 transition-all duration-300 font-semibold hover:scale-110"
            >
              Features
            </a>
            <a
              href="#about"
              className="hover:text-purple-400 transition-all duration-300 font-semibold hover:scale-110"
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:text-pink-400 transition-all duration-300 font-semibold hover:scale-110"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Main Hero Section - Fits in one viewport */}
      <section className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-120px)] px-6 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Animated Title with Enhanced Effects */}
          <div className="relative mb-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent leading-tight tracking-tight animate-gradient bg-[length:200%_200%]">
              Tools to Elevate Your Music Video Content
            </h1>
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 blur-2xl animate-pulse rounded-3xl" />
          </div>

          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 font-light max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
            Smart Tag and Description Generators for Artists and Creators
          </p>

          {/* Enhanced Stats with Animations - Compact */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-8">
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-2xl md:text-3xl font-black text-cyan-400 mb-1 animate-bounce">10K+</div>
              <div className="text-gray-300 text-sm">Tags Generated</div>
              <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-1 rounded-full" />
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div
                className="text-2xl md:text-3xl font-black text-purple-400 mb-1 animate-bounce"
                style={{ animationDelay: "0.2s" }}
              >
                5K+
              </div>
              <div className="text-gray-300 text-sm">Descriptions Created</div>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-1 rounded-full" />
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div
                className="text-2xl md:text-3xl font-black text-pink-400 mb-1 animate-bounce"
                style={{ animationDelay: "0.4s" }}
              >
                1K+
              </div>
              <div className="text-gray-300 text-sm">Happy Creators</div>
              <div className="w-12 h-1 bg-gradient-to-r from-pink-400 to-cyan-400 mx-auto mt-1 rounded-full" />
            </div>
          </div>

          {/* Get Started Button */}
          <div>
            <Button
              onClick={scrollToTools}
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 hover:from-cyan-400 hover:via-purple-500 hover:to-pink-400 text-white font-bold py-4 px-12 rounded-2xl text-xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-cyan-500/50 border-2 border-cyan-400/30"
            >
              <span className="relative z-10 flex items-center space-x-3">
                <span>Get Started</span>
                <ChevronDown className="w-6 h-6 animate-bounce" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 animate-pulse" />
            </Button>
          </div>
        </div>
      </section>

      {/* Tools Selection Section - Only shows after Get Started is clicked */}
      {showTools && (
        <section id="tools-section" className="relative z-10 py-20 px-6 animate-fade-in-up">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
              Choose Your Tool
            </h2>

            {/* Tool Selection Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
              <Link href="/tag-generator">
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold py-6 px-12 rounded-2xl text-xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-cyan-500/50 border-2 border-cyan-400/30"
                >
                  <span className="relative z-10 flex items-center space-x-3">
                    <span className="text-2xl">🎧</span>
                    <span>Tag Generator</span>
                    <Sparkles className="w-6 h-6 animate-spin" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 animate-pulse" />
                </Button>
              </Link>

              <Link href="/description-generator">
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-bold py-6 px-12 rounded-2xl text-xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-pink-500/50 border-2 border-pink-400/30"
                >
                  <span className="relative z-10 flex items-center space-x-3">
                    <span className="text-2xl">📺</span>
                    <span>Description Generator</span>
                    <Sparkles className="w-6 h-6 animate-spin" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-purple-400/20 animate-pulse" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Enhanced Features Section */}
      <section id="features" className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-20 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
            Powerful Features
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <Card className="bg-gray-800/30 border-cyan-500/30 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-500 group hover:scale-105 hover:border-cyan-400/60">
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-125 transition-transform duration-500 shadow-lg shadow-cyan-500/30">
                  <Zap className="w-10 h-10 text-white animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white">AI-Powered</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Advanced AI algorithms generate relevant tags and descriptions tailored to your music content
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/30 border-purple-500/30 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-500 group hover:scale-105 hover:border-purple-400/60">
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-125 transition-transform duration-500 shadow-lg shadow-purple-500/30">
                  <TrendingUp className="w-10 h-10 text-white animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white">SEO Optimized</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Boost your video visibility with SEO-optimized tags and descriptions that rank higher
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/30 border-pink-500/30 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-500 group hover:scale-105 hover:border-pink-400/60">
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-125 transition-transform duration-500 shadow-lg shadow-pink-500/30">
                  <Clock className="w-10 h-10 text-white animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white">Time Saving</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Generate professional content in seconds, not hours. Focus on creating, not writing
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black/60 backdrop-blur-sm border-t border-purple-500/30 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <Music2 className="w-8 h-8 text-cyan-400" />
                <h3 className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  LIFETALES
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed">Empowering music creators with AI-powered content tools</p>
            </div>

            {/* Navigation */}
            <div className="col-span-1">
              <h4 className="font-bold mb-6 text-purple-400 text-lg">Navigation</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-2 inline-block"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-2 inline-block"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-2 inline-block"
                  >
                    Tag Generator
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-2 inline-block"
                  >
                    Description Generator
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-1">
              <h4 className="font-bold mb-6 text-purple-400 text-lg">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-5 h-5" />
                  <span>hello@lifetales.com</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="col-span-1">
              <h4 className="font-bold mb-6 text-purple-400 text-lg">Connect</h4>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-red-500 transition-all duration-300 hover:scale-125">
                  <Youtube className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-green-500 transition-all duration-300 hover:scale-125">
                  <Music className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-pink-500 transition-all duration-300 hover:scale-125">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">© 2024 LIFETALES. All rights reserved. | Crafted with ❤️ for music creators</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
