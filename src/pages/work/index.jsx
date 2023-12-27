import { usePageLoadContext } from '../../context/PageLoadContext'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import "./work.css"

const Work = () => {
  const { isPageLoaded } = usePageLoadContext()
  const [t, i18n] = useTranslation("global")

  return (
    <div className={`fade ${isPageLoaded ? 'loaded' : ''}`}>
      {isPageLoaded && (
        <main className="main-work">
            <div className="container-work">
                <div className="card">
                    <div className="container-img">
                        <Link to="https://ezequielbosco.github.io/Proyecto-final-Argentina-Programa/" target="_blank">
                            <div className="image-overlay">
                                <img src="./nike.png" alt="image nike web" />
                                <div className="overlay-text">
                                    <div className="container-logo">
                                        <div className="logo-work">
                                            <img src="./htmllogo.png" alt="HTML logo" />
                                        </div>
                                        <div className="logo-work">
                                            <img src="./csslogo.png" alt="CSS logo" />
                                        </div>
                                        <div className="logo-work">
                                            <img src="./bootstraplogo.png" alt="Bootstrap logo" />
                                        </div>
                                        <div className="logo-work">
                                            <img src="./jslogo.png" alt="Javascript logo" />
                                        </div>
                                    </div>
                                    <p>Argentina Programa 4.0 UTN</p>
                                    <p>Web Colaborativa</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="container-card">
                        <div className="left">
                            <p>NIKE</p>
                        </div>
                        <div className="right">
                            <Link to="https://github.com/EzequielBosco/Proyecto-final-Argentina-Programa" target="_blank">
                                <button>
                                    &lt;/&gt;
                                </button>
                            </Link>                    
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="container-img">
                        <Link to="https://clon-mlibre.vercel.app/" target="_blank">
                            <div className="image-overlay">
                                <img src="./mercadolibre.png" alt="image mercadolibre web" />
                                <div className="overlay-text">
                                    <div className="container-logo">
                                        <div className="logo-work">
                                            <img src="./htmllogo.png" alt="HTML logo" />
                                        </div>
                                        <div className="logo-work">
                                            <img src="./csslogo.png" alt="CSS logo" />
                                        </div>
                                        <div className="logo-work">
                                            <img src="./jslogo.png" alt="Javascript logo" />
                                        </div>
                                        <div className="logo-work">
                                            <img src="./node-logo.png" alt="Node logo" />
                                        </div>
                                    </div>
                                    <p>Clon Mercadolibre</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="container-card">
                        <div className="left">
                            <p>MERCADOLIBRE</p>
                        </div>
                        <div className="right">
                            <Link className="button" to="https://github.com/EzequielBosco/ProyectoFinal-Backend-Coderhouse" target="_blank">
                                <button>
                                    &lt;/&gt;
                                </button>
                            </Link>                    
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="container-img">
                        <Link to="https://e-commerce-react-coder-house.vercel.app/" target="_blank">
                            <div className="image-overlay">
                                <img src="./apple.png" alt="image apple web" />
                                <div className="overlay-text">
                                    <div className="container-logo">
                                        <div className="logo-work">
                                            <img src="./htmllogo.png" alt="HTML logo" />
                                        </div>
                                        <div className="logo-work">
                                            <img src="./csslogo.png" alt="CSS logo" />
                                        </div>
                                        <div className="logo-work">
                                            <img src="./bootstraplogo.png" alt="Bootstrap logo" />
                                        </div>
                                        <div className="logo-work">
                                            <img src="./jslogo.png" alt="Javascript logo" />
                                        </div>
                                        <div className="logo-work">
                                            <img src="./reactlogo.png" alt="React logo" />
                                        </div>
                                    </div>
                                    <p>Coderhouse</p>
                                    <p>React</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="container-card">
                        <div className="left">
                            <p>Apple E-Commerce</p>
                        </div>
                        <div className="right">
                            <Link className="button" to="https://github.com/EzequielBosco/Proyecto-final-Argentina-Programa" target="_blank">
                                <button>
                                    &lt;/&gt;
                                </button>
                            </Link>                    
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="container-img">
                        <Link to="https://radiohead-band.netlify.app//" target="_blank">
                            <div className="image-overlay">
                                <img src="./radiohead.png" alt="image radiohead web" />
                                <div className="overlay-text">
                                    <div className="container-logo">
                                        <div className="logo-work">
                                            <img src="./htmllogo.png" alt="HTML logo" />
                                        </div>
                                        <div className="logo-work">
                                            <img src="./csslogo.png" alt="CSS logo" />
                                        </div>
                                        <div className="logo-work">
                                            <img src="./bootstraplogo.png" alt="Bootstrap logo" />
                                        </div>
                                    </div>
                                    <p>Coderhouse</p>
                                    <p>Desarrollo Web</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="container-card">
                        <div className="left">
                            <p>RADIOHEAD</p>
                        </div>
                        <div className="right">
                            <Link className="button" to="https://github.com/EzequielBosco/ProyectoFinal-DesarrolloWeb-CoderHouse" target="_blank">
                                <button>
                                    &lt;/&gt;
                                </button>
                            </Link>                    
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="container-img">
                        <Link to="https://blog-rw86.onrender.com/" target="_blank">
                            <div className="image-overlay">
                                <img src="./blog.png" alt="image blog independiente web" />
                                <div className="overlay-text">
                                    <div className="container-logo">
                                        <div className="logo-work">
                                            <img src="./htmllogo.png" alt="HTML logo" />
                                        </div>
                                        <div className="logo-work">
                                            <img src="./csslogo.png" alt="CSS logo" />
                                        </div>
                                        <div className="logo-work">
                                            <img src="./bootstraplogo.png" alt="Bootstrap logo" />
                                        </div>
                                        <div className="logo-work">
                                            <img src="./jslogo.png" alt="Js logo" />
                                        </div>
                                        <div className="logo-work">
                                            <img src="./node-logo.png" alt="Node logo" />
                                        </div>
                                    </div>
                                    <p>EPICA, Argentina Programa 4.0</p>
                                    <p>Backend</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="container-card">
                        <div className="left">
                            <p>BLOG INDEPENDIENTE</p>
                        </div>
                        <div className="right">
                            <Link className="button" to="https://github.com/EzequielBosco/21523A-Ezequiel-Bosco-BLOG" target="_blank">
                                <button>
                                    &lt;/&gt;
                                </button>
                            </Link>                    
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="container-img">
                        <Link to="https://ezequielbosco.github.io/ProyectoFinal-Javascript-CoderHouse/index.html" target="_blank">
                            <div className="image-overlay">
                                <img src="./samsung.png" alt="image samsung web" />
                                <div className="overlay-text">
                                    <div className="container-logo">
                                        <div className="logo-work">
                                            <img src="./htmllogo.png" alt="HTML logo" />
                                        </div>
                                        <div className="logo-work">
                                            <img src="./csslogo.png" alt="CSS logo" />
                                        </div>
                                        <div className="logo-work">
                                            <img src="./bootstraplogo.png" alt="Bootstrap logo" />
                                        </div>
                                        <div className="logo-work">
                                            <img src="./jslogo.png" alt="Javascript Logo" />
                                        </div>
                                        <div className="logo-work">
                                            <img src="./toastifylogo.png" alt="Toastify Logo" />
                                        </div>
                                    </div>
                                    <p>Coderhouse</p>
                                    <p>Javascript</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="container-card">
                        <div className="left">
                            <p>SAMSUNG E-Commerce</p>
                        </div>
                        <div className="right">
                            <Link className="button" to="https://github.com/EzequielBosco/ProyectoFinal-Javascript-CoderHouse" target="_blank">
                                <button>
                                    &lt;/&gt;
                                </button>
                            </Link>                   
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="container-img">
                        <Link to="https://admin-anima-t.netlify.app/" target="_blank">
                            <div className="image-overlay">
                                <img src="./anima-t.png" alt="image anima-t web" />
                                <div className="overlay-text">
                                    <div className="container-logo">
                                        <div className="logo-work">
                                            <img src="./htmllogo.png" alt="HTML logo" />
                                        </div>
                                        <div className="logo-work">
                                            <img src="./csslogo.png" alt="CSS logo" />
                                        </div>
                                        <div className="logo-work">
                                            <img src="./bootstraplogo.png" alt="Bootstrap logo" />
                                        </div>
                                    </div>
                                    <p>Argentina Programa 4.0 UTN</p>
                                    <p>Desarrollo Web</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="container-card">
                        <div className="left">
                            <p>ANIMA-T</p>
                        </div>
                        <div className="right">
                            <Link className="button" to="https://github.com/EzequielBosco/Ejercicios-UTN-Desarrollador-WEB/tree/main/Clase-11-media-queries" target="_blank">
                                <button>
                                    &lt;/&gt;
                                </button>
                            </Link>                   
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="container-img">
                        <Link to="https://chat-live.glitch.me/users" target="_blank">
                            <div className="image-overlay">
                                <img src="./chat.png" alt="image anima-t web" />
                                <div className="overlay-text">
                                    <div className="container-logo">
                                        <div className="logo-work">
                                            <img src="./htmllogo.png" alt="HTML logo" />
                                        </div>
                                        <div className="logo-work">
                                            <img src="./csslogo.png" alt="CSS logo" />
                                        </div>
                                        <div className="logo-work">
                                            <img src="./jslogo.png" alt="Js logo" />
                                        </div>
                                        <div className="logo-work">
                                            <img src="./node-logo.png" alt="Node logo" />
                                        </div>
                                    </div>
                                    <p>Chat Websockets</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="container-card">
                        <div className="left">
                            <p>CHAT</p>
                        </div>
                        <div className="right">
                            <Link className="button" to="https://github.com/EzequielBosco/Chat-Websockets-Glitch.com" target="_blank">
                                <button>
                                    &lt;/&gt;
                                </button>
                            </Link>                   
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="container-img">
                        <Link to="https://do-keep.vercel.app/" target="_blank">
                            <div className="image-overlay">
                                <img src="./do-keep.png" alt="Do Keep web" />
                                <div className="overlay-text">
                                    <div className="container-logo">
                                        <div className="logo-work">
                                            <img src="./htmllogo.png" alt="HTML logo" />
                                        </div>
                                        <div className="logo-work">
                                            <img src="./csslogo.png" alt="CSS logo" />
                                        </div>
                                        <div className="logo-work">
                                            <img src="./jslogo.png" alt="Javascript logo" />
                                        </div>
                                        <div className="logo-work">
                                            <img src="./node-logo.png" alt="Node logo" />
                                        </div>
                                        <div className="logo-work">
                                            <img src="./toastifylogo.png" alt="Toastify Logo" />
                                        </div>
                                        <div className="logo-work">
                                            <img src="./reactlogo.png" alt="React logo" />
                                        </div>
                                    </div>
                                    <p>Clon GoogleKeep</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="container-card">
                        <div className="left">
                            <p>DO KEEP</p>
                        </div>
                        <div className="right">
                            <Link className="button" to="https://github.com/EzequielBosco/To-do-list" target="_blank">
                                <button>
                                    &lt;/&gt;
                                </button>
                            </Link>                    
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="container-img">
                        <Link to="https://app-clima-view.vercel.app/" target="_blank">
                            <div className="image-overlay">
                                <img src="./clima.png" alt="image mercadolibre web" />
                                <div className="overlay-text">
                                    <div className="container-logo">
                                        <div className="logo-work">
                                            <img src="./htmllogo.png" alt="HTML logo" />
                                        </div>
                                        <div className="logo-work">
                                            <img src="./csslogo.png" alt="CSS logo" />
                                        </div>
                                        <div className="logo-work">
                                            <img src="./jslogo.png" alt="Javascript logo" />
                                        </div>
                                        <div className="logo-work">
                                            <img src="./reactlogo.png" alt="React logo" />
                                        </div>
                                        <div className="logo-work">
                                            <img src="./materialui-logo.png" alt="Material UI logo" />
                                        </div>
                                    </div>
                                    <p>Clima API OpenWeatherMap</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="container-card">
                        <div className="left">
                            <p>CLIMA</p>
                        </div>
                        <div className="right">
                            <Link className="button" to="https://github.com/EzequielBosco/App-Clima" target="_blank">
                                <button>
                                    &lt;/&gt;
                                </button>
                            </Link>                    
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="container-img">
                        <Link to="https://ezequielbosco.github.io/Contador-de-Puntos/" target="_blank">
                            <div className="image-overlay">
                                <img src="./contador.png" alt="image count web" />
                                <div className="overlay-text">
                                    <div className="container-logo">
                                        <div className="logo-work">
                                            <img src="./htmllogo.png" alt="HTML logo" />
                                        </div>
                                        <div className="logo-work">
                                            <img src="./csslogo.png" alt="CSS logo" />
                                        </div>
                                        <div className="logo-work">
                                            <img src="./jslogo.png" alt="Js logo" />
                                        </div>
                                    </div>
                                    <p>{t("work.project-count")}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="container-card">
                        <div className="left">
                            <p>COUNT</p>
                        </div>
                        <div className="right">
                            <Link className="button" to="https://github.com/EzequielBosco/Contador-de-Puntos" target="_blank">
                                <button>
                                    &lt;/&gt;
                                </button>
                            </Link>                  
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="container-img">
                        <Link to="https://ezequielbosco.github.io/Web-Piano/" target="_blank">
                            <div className="image-overlay">
                                <img src="./piano.png" alt="image piano web" />
                                <div className="overlay-text">
                                    <div className="container-logo">
                                        <div className="logo-work">
                                            <img src="./htmllogo.png" alt="HTML logo" />
                                        </div>
                                        <div className="logo-work">
                                            <img src="./csslogo.png" alt="CSS logo" />
                                        </div>
                                        <div className="logo-work">
                                            <img src="./jslogo.png" alt="Bootstrap logo" />
                                        </div>
                                    </div>
                                    <p>{t("work.project-piano")}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="container-card">
                        <div className="left">
                            <p>PIANO</p>
                        </div>
                        <div className="right">
                            <Link className="button" to="https://github.com/EzequielBosco/Web-Piano" target="_blank">
                                <button>
                                    &lt;/&gt;
                                </button>
                            </Link>                   
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="container-img">
                        <Link to="https://ezequielbosco.github.io/Ticmas-Academy-CV/" target="_blank">
                            <div className="image-overlay">
                                <img src="./cv.png" alt="image cv web" />
                                <div className="overlay-text">
                                    <div className="container-logo">
                                        <div className="logo-work">
                                            <img src="./htmllogo.png" alt="HTML logo" />
                                        </div>
                                        <div className="logo-work">
                                            <img src="./csslogo.png" alt="CSS logo" />
                                        </div>
                                        <div className="logo-work">
                                            <img src="./bootstraplogo.png" alt="Bootstrap logo" />
                                        </div>
                                        <div className="logo-work">
                                            <img src="./jslogo.png" alt="Js logo" />
                                        </div>
                                    </div>
                                    <p>Ticmas Academy</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="container-card">
                        <div className="left">
                            <p>CURRICULUM VITAE</p>
                        </div>
                        <div className="right">
                            <Link className="button" to="https://github.com/EzequielBosco/Ticmas-Academy-CV" target="_blank">
                                <button>
                                    &lt;/&gt;
                                </button>
                            </Link>                    
                        </div>
                    </div>
                </div>
            </div>
        </main>
      )}
    </div>
  )
}
  
export default Work