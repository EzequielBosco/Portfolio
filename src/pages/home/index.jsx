import { usePageLoadContext } from '../../context/PageLoadContext'
import { Link } from 'react-router-dom'
import "./home.css"

const Home = () => {
  const { isPageLoaded } = usePageLoadContext()

  return (
    <div className={`fade ${isPageLoaded ? 'loaded' : ''}`}>
      {isPageLoaded && (
        <main className="main-index">
          <h1 className="my-name"><span className="word-color">Ezequiel</span> Bosco</h1>
          <h2 data-section="main-index" data-value="title">Full-Stack Developer</h2>
          <Link to="/work" className="see-work" data-section="main-index" data-value="btn-work"><button>SEE MY WORK</button></Link>
          <p className="float-effect" data-text="Welcome to My Website" data-section="main-index" data-value="typing-text">Welcome to My Website</p>
        </main>
      )}
    </div>
  )
}
  
export default Home