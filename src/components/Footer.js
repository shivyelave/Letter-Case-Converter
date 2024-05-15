import React from 'react'

export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    
    <footer className="footer bg-dark text-light py-3">
    <div className="container text-center">
      <span>&copy; {currentYear} Shiv Yelave</span>
    </div>
  </footer>
      
  )
}
