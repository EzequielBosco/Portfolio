import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './footer.css'

const Footer = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [t, i18n] = useTranslation("global")

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
            <h3>{t("footer.find")}</h3>
            <div id="smedia-footer">
                <Link to="https://www.linkedin.com/in/ezequiel-bosco/" target="_blank"><img src="./linkedin.png" alt="Linkedin Ezequiel Bosco" /></Link>
                <Link to="https://github.com/EzequielBosco" target="_blank"><img src="./github.png" alt="Github Ezequiel Bosco" /></Link>
                <Link to="https://www.instagram.com/ezequiel_bosco/" target="_blank"><img src="./instagram.png" alt="Instagram Ezequiel Bosco" /></Link>
            </div>
        </div>
        <p> &copy; 2023 | Ezequiel Bosco | <span>{t("footer.rights")}</span>.</p>
        <hr className="final" />
      </footer>
    </>
  )
}

export default Footer