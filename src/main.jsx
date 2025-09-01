import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function ScrollAnimator() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)')?.matches
    if (prefersReduced) return

    const els = document.querySelectorAll('.reveal, .reveal-right, .reveal-left')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          obs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15, rootMargin: '100px 0px' })

    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])
  return null
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ScrollAnimator />
    <App />
  </StrictMode>,
)
