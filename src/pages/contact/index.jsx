import { usePageLoadContext } from '../../context/PageLoadContext'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'
import "./contact.css"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { db, ref, push, set } from '../../services/firebaseConfig'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { isPageLoaded } = usePageLoadContext()
  const [t, i18n] = useTranslation("global")

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleInputChange = (event) => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value)
        break
      case "email":
        setEmail(event.target.value)
        break;
      case "message":
        setMessage(event.target.value)
        break
      default:
        break
    }
  }
  
  const navigate = useNavigate()
  
  const handleSubmitForm = async (e) => {
    e.preventDefault()

    const contactRef = ref(db, 'PortfolioContactForm')
    const newContact = push(contactRef)
    set(newContact, {
      name: name,
      email: email,
      message: message
    })

    alert()
    e.target.reset()
    setTimeout(() => {
      navigate('/')
    }, 3000)

  }

  const alert = () => {
    Swal.fire({
      icon: 'success',
      title: 'Enviado',
      showCancelButton: false,
      showConfirmButton: false,
      timer: 2500
    })
    Swal.getTimerLeft()
  }

  return (
    <div className={`fade ${isPageLoaded ? 'loaded' : ''}`}>
      {isPageLoaded && (
        <main className="contact-main">
            <div className="form-container">
                <div className="form-inside">
                    <h2>{t("contact.contact-title")}</h2>
                    <form className="contact-form" id="contact-form" onSubmit={handleSubmitForm}>
                        <div className="contact-group">
                            <label name="name">{t("contact.contact-name")}</label>
                            <input type="text" name="name" id="name" placeholder={t("contact.contact-name-ph")} required onChange={handleInputChange} />
                        </div>
                        <div className="contact-group">
                            <label name="email">{t("contact.contact-email")}</label>
                            <input type="email" name="email" id="email" placeholder={t("contact.contact-email-ph")} required onChange={handleInputChange} />
                        </div>
                        <div className="contact-group">
                            <label name="message">{t("contact.contact-message")}</label>
                            <input type="text" name="message" id="message" placeholder={t("contact.contact-message-ph")} onChange={handleInputChange} />
                        </div>
                        <button type="submit">{t("contact.contact-btn")}</button>
                    </form>
                </div>
            </div>
            <aside>
                <div id="cv">
                    <h4 id="cv-title">Curriculum Vitae</h4>
                    <iframe src="./CV.pdf"></iframe>
                </div>
                <div className="email-link">
                    <p>Ezequiel_bosco@hotmail.com</p>
                </div>
            </aside>              
        </main>
      )}
    </div>
  )
}
  
export default Contact