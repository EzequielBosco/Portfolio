import { usePageLoadContext } from '../../context/PageLoadContext'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import "./home.css"

const Home = () => {
  const { isPageLoaded } = usePageLoadContext()
  const [t, i18n] = useTranslation("global")

  return (
    <div className={`fade ${isPageLoaded ? 'loaded' : ''}`}>
      {isPageLoaded && (
        <main className="main-index">
          <h1 className="my-name"><span className="word-color">Ezequiel</span> Bosco</h1>
          <h2>{t("index.title")}</h2>
          <Link to="/work" className="see-work"><button>{t("index.btn-work")}</button></Link>
          <p className="float-effect">{t("index.typing-text")}</p>
        </main>
      )}
    </div>
  )
}
  
export default Home