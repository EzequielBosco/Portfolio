import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import './header.css'

const Header = () => {
  const [isNavSticky, setIsNavSticky] = useState(false)
  const [isMenuActive, setIsMenuActive] = useState(false)
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en')

  const [t, i18n] = useTranslation("global")

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive)
  }

  const changeLanguage = (newLanguage) => {
    i18n.changeLanguage(newLanguage)
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
  }

  useEffect(() => {
    const nav = document.getElementById('nav')
    const navOffset = nav.offsetTop

    const checkStickyNav = () => {
      if (window.pageYOffset > navOffset) {
        setIsNavSticky(true)
      } else {
        setIsNavSticky(false)
      }
    }

    window.addEventListener('scroll', checkStickyNav)

    return () => {
      window.removeEventListener('scroll', checkStickyNav)
    }
  }, [])

  const navClassName = `nav ${isNavSticky ? 'nav-sticky' : ''}`
  const mobileMenuClassName = `${isMenuActive ? 'active' : ''}`;

  return (
    <>
      <header>
          <nav id="nav" className={navClassName}>
              <div id="logo">
                  <NavLink to="/"><h2><span className="word-color">EZ</span>B</h2></NavLink>
              </div>
              <button id="toggle-menu" onClick={toggleMenu}>☰</button>
              <ul className="categories">
                  <NavLink to="/work"><li>{t('nav-categories.nav-work')}</li></NavLink>
                  <NavLink to="/about"><li>{t('nav-categories.nav-about')}</li></NavLink>
                  <NavLink to="/contact"><li>{t('nav-categories.nav-contact')}</li></NavLink>
                  <div className="checkbox-div">
                      <input 
                        value="private" 
                        name="switch" 
                        id="switch" 
                        type="checkbox" 
                        className="switch" 
                        checked={language === 'es'}
                        onChange={() => changeLanguage(language === 'en' ? 'es' : 'en')}
                      />
                      <label htmlFor="switch">
                        <span className="switch-x-text"></span>
                        <span className="switch-x-toggletext">
                          <span className="switch-x-unchecked"><span className="switch-x-hiddenlabel"></span><img src="./eeuu.png" alt="Logo EEUU" /></span>
                          <span className="switch-x-checked"><span className="switch-x-hiddenlabel"></span><img src="./argentina.png" alt="Logo Argentina" /></span>
                        </span>
                      </label>
                  </div>
              </ul>
              <div id="smedia">
                  <Link to="https://www.Linkedin.com/in/ezequiel-bosco/" target="_blank"><img src="./linkedin.png" alt="Linkedin Ezequiel Bosco" /></Link>
                  <Link to="https://github.com/EzequielBosco" target="_blank"><img src="./github.png" alt="Github Ezequiel Bosco" /></Link>
                  <Link to="https://www.instagram.com/ezequiel_bosco/" target="_blank"><img src="./instagram.png" alt="Instagram Ezequiel Bosco" /></Link>
              </div>
              <div id="mobile-menu" className={`${mobileMenuClassName}`}>
                  <ul className='categories-mobile'>
                      <NavLink to="/work"><li>{t('nav-categories.nav-work')}</li></NavLink>
                      <NavLink to="/about"><li>{t('nav-categories.nav-about')}</li></NavLink>
                      <NavLink to="/contact"><li>{t('nav-categories.nav-contact')}</li></NavLink>
                      <div className="checkbox-div">
                          <input 
                            value="private" 
                            name="switch" 
                            id="switch-m" 
                            type="checkbox" 
                            className="switch" 
                            checked={language === 'es'}
                            onChange={() => changeLanguage(language === 'en' ? 'es' : 'en')}
                          />
                          <label htmlFor="switch-m">
                            <span className="switch-x-text"></span>
                            <span className="switch-x-toggletext">
                              <span className="switch-x-unchecked"><span className="switch-x-hiddenlabel"></span><img src="./eeuu.png" height="20px" alt="Logo EEUU" /></span>
                              <span className="switch-x-checked"><span className="switch-x-hiddenlabel"></span><img src="./argentina.png" height="20px" alt="Logo Argentina" /></span>
                            </span>
                          </label>
                      </div>
                  </ul>
              </div>
          </nav>
      </header>
    </>
  )
}
    
export default Header