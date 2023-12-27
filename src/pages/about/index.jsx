import { usePageLoadContext } from '../../context/PageLoadContext'
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next'
import "./about.css"

const About = () => {
  const { isPageLoaded } = usePageLoadContext()
  const [t, i18n] = useTranslation("global")

  return (
    <div className={`fade ${isPageLoaded ? 'loaded' : ''}`}>
      {isPageLoaded && (
        <main className="main-about">
            <div id="my-info">
                <div className="info">
                    <img className="perfil-img" src="./about.jpg" alt="Ezequiel Bosco Portfolio" />
                    <div className="personal">
                        <div className="div-text">
                            <h1><strong className="word-color">Ezequiel </strong>Bosco</h1>
                            <p id="text">{t("about.text-about")}</p>
                            <div id="follow-about">
                                <small>{t("about.follow-about")}</small> <Link to="https://www.linkedin.com/in/ezequiel-bosco/" target="_blank"><img src="./linkedin.png" alt="linkedin" /></Link>
                            </div>
                        </div>
                        <Link to="/contact"><button>{t("about.btn-contact-about")}</button></Link>
                    </div>
                </div>
            </div>
            <section className="section-about">
                <div className="skills">
                    <h3>{t("about.skills-about")}</h3>
                    <hr />
                    <div className="skill-container">
                        <div className="skill-card-container">
                            <div className="skill-card">
                                <div className="logo">
                                    <img src="./htmllogo.png" alt="HTML logo" />
                                </div>
                            </div>
                            <p>HTML</p>
                        </div>
                        <div className="skill-card-container">
                            <div className="skill-card">
                                <div className="logo">
                                    <img src="./csslogo.png" alt="CSS logo" />
                                </div>
                            </div>
                            <p>CSS</p>
                        </div>
                        <div className="skill-card-container">
                            <div className="skill-card">
                                <div className="logo">
                                    <img src="./jslogo.png" alt="Javascript logo" />
                                </div>
                            </div>
                            <p>Javascript</p>
                        </div>
                        <div className="skill-card-container">
                            <div className="skill-card">
                                <div className="logo">
                                    <img src="./bootstraplogo.png" alt="Bootstrap logo" />
                                </div>
                            </div>
                            <p>Bootstrap</p>
                        </div>
                        <div className="skill-card-container">
                            <div className="skill-card">
                                <div className="logo">
                                    <img src="./tailwindlogo.png" alt="TailWind logo" />
                                </div>
                            </div>
                            <p>TailWind</p>
                        </div>
                        <div className="skill-card-container">
                            <div className="skill-card">
                                <div className="logo">
                                    <img src="./sasslogo.png" alt="Sass logo" />
                                </div>
                            </div>
                            <p>Sass</p>
                        </div>
                        <div className="skill-card-container">
                            <div className="skill-card">
                                <div className="logo">
                                    <img src="./gitlogo.png" alt="Git logo" />
                                </div>
                            </div>
                            <p>Git</p>
                        </div>
                        <div className="skill-card-container">
                            <div className="skill-card">
                                <div className="logo">
                                    <img src="./reactlogo.png" alt="React logo" />
                                </div>
                            </div>
                            <p>React</p>
                        </div>
                        <div className="skill-card-container">
                            <div className="skill-card">
                                <div className="logo">
                                    <img src="./djangologo.png" alt="Django logo" />
                                </div>
                            </div>
                            <p>Django</p>
                        </div>
                        <div className="skill-card-container">
                            <div className="skill-card">
                                <div className="logo">
                                    <img src="./pythonlogo.png" alt="Python logo" />
                                </div>
                            </div>
                            <p>Python</p>
                        </div>
                        <div className="skill-card-container">
                            <div className="skill-card">
                                <div className="logo">
                                    <img src="./expresslogo.png" alt="Express logo" />
                                </div>
                            </div>
                            <p>Express</p>
                        </div>
                        <div className="skill-card-container">
                            <div className="skill-card">
                                <div className="logo">
                                    <img src="./nodelogo.png" alt="Node logo" />
                                </div>
                            </div>
                            <p>Node</p>
                        </div>
                        <div className="skill-card-container">
                            <div className="skill-card">
                                <div className="logo">
                                    <img src="./MongoDBLogo.png" alt="MongoDB logo" />
                                </div>
                            </div>
                            <p>MongoDB</p>
                        </div>
                        <div className="skill-card-container">
                            <div className="skill-card">
                                <div className="logo">
                                    <img src="./sqllogo.png" alt="SQL logo" />
                                </div>
                            </div>
                            <p>SQL Server</p>
                        </div>
                        <div className="skill-card-container">
                            <div className="skill-card">
                                <div className="logo">
                                    <img src="./clogo.png" alt="C# logo" />
                                </div>
                            </div>
                            <p>C#</p>
                        </div>
                        <div className="skill-card-container">
                            <div className="skill-card">
                                <div className="logo">
                                    <img src="./photoshoplogo.png" alt="Photoshop logo" />
                                </div>
                            </div>
                            <p>Photoshop</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
      )}
    </div>
  )
}
  
export default About