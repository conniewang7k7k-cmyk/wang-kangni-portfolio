import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorksPreview from './components/WorksPreview'
import Works from './components/Works'
import About from './components/About'
import Contact from './components/Contact'
import './App.css'

function App() {
  // Scroll-triggered reveal animation
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )
    elements.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <WorksPreview />
        <Works />
        <About />
        <Contact />
      </main>
    </div>
  )
}

export default App
