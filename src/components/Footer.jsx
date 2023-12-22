import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './footer.css'

const Footer = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Verifico scroll
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    // Agrego scroll
    window.addEventListener('scroll', handleScroll)

    // Limpio el evento
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const footerClassName = `${isScrolled ? '' : 'footer-hidden'}`

  return (
    <>
      <footer className={footerClassName}>
        <hr />
        <div className="footer">
            <h3 data-section="footer" data-value="find">FIND ME ON</h3>
            <div id="smedia-footer">
                <Link to="https://www.linkedin.com/in/ezequiel-bosco/" target="_blank"><h3>| LINKEDIN |</h3></Link>
                -
                <Link to="https://github.com/EzequielBosco" target="_blank"><h3>| GITHUB |</h3></Link>
                -
                <Link to="https://www.instagram.com/ezequiel_bosco/" target="_blank"><h3>| INSTAGRAM |</h3></Link>
            </div>
        </div>
        <p> &copy; 2023 | Ezequiel Bosco | <span data-section="footer" data-value="rights">All rights reserved</span>.</p>
        <hr className="final" />
      </footer>
    </>
  )
}

export default Footer