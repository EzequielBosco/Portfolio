import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Work from './pages/work'
import About from './pages/about'
import Contact from './pages/contact'
import Header from './components/Header'
import Footer from './components/Footer'
import { PageLoadProvider } from './context/PageLoadContext'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import I18next from 'i18next'
import global_en from './translations/en/global.json'
import global_es from './translations/es/global.json'
import ParticlesBack from './components/Particles'
const storedLanguage = localStorage.getItem('language') || 'en'

I18next.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: storedLanguage,
  resources: {
    en: {
      global: global_en
    },
    es: {
      global: global_es
    }
  }
})

function App() {
  return (
    <BrowserRouter>
      <I18nextProvider I18n={I18next}>
      <PageLoadProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/work' element={<Work />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
        <ParticlesBack />
      </PageLoadProvider>
      </I18nextProvider>
    </BrowserRouter>
  )
}

export default App
