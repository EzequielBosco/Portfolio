const footer = document.querySelector('footer');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        footer.style.display = 'block'
    } else {
        footer.style.display = 'none'
    }
})

//------------------------

const nav = document.getElementById('nav');
const navOffset = nav.offsetTop;

function checkStickyNav() {
    if (window.pageYOffset > navOffset) {
        nav.classList.add('nav-sticky')
    } else {
        nav.classList.remove('nav-sticky')
    }
}

window.addEventListener('scroll', checkStickyNav)

//-------------------------
// TEXTO
document.addEventListener("DOMContentLoaded", function () {
	const typingElement = document.querySelector(".typing-effect")
	const text = typingElement.getAttribute("data-text")
	
    const savedLanguage = localStorage.getItem("language")

    if (!savedLanguage) {
        
        currentText = ""
        let i = 0
        const typingInterval = setInterval(function () {
            currentText += text.charAt(i)
            typingElement.innerText += currentText.charAt(i)
            i++
            if (i >= text.length) {
                clearInterval(typingInterval)
            }}, 100)
        } else {
            changeLanguage(savedLanguage)
    }
})

// ------------------------------------------------------
// SCROLL
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-menu')
    const mobileMenu = document.getElementById('mobile-menu')

    toggleButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    })
})

// ------------------------------------------------------
// SANITY
// import sanityClient from '@sanity/client';

// const client = sanityClient({
//   projectId: process.env.SANITY_PROJECT_ID,
//   dataset: process.env.SANITY_DATASET,
//   token: process.env.SANITY_TOKEN,
//   useCdn: true
// })

// ------------------------------------------------------

// IDIOMAS
const changeLanguage = async language => {
    const requestJson = await fetch(`./languages/${language}.json`)
    const text = await requestJson.json()

    for(const textToChange of textChange) {
        const section = textToChange.dataset.section
        const value = textToChange.dataset.value

        if (textToChange.tagName === "INPUT") {
            textToChange.placeholder = text[section][value]
        } else {
            textToChange.innerText = text[section][value]
        }
    }

    localStorage.setItem('language', language)
}

const switchInput = document.getElementById("switch")
const switchLabel = document.querySelector(".checkbox-div label")
const textChange = document.querySelectorAll("[data-section]")

const savedSwitchState = localStorage.getItem('languageSwitchState')
if (savedSwitchState !== null) {
    switchInput.checked = savedSwitchState === "true";
}

const switchState = switchInput.checked
localStorage.setItem('languageSwitchState', switchState.toString())

// Cambio de estado
switchInput.addEventListener("change", () => {
    const newLanguage = switchInput.checked ? "es" : "en"
    changeLanguage(newLanguage)

    localStorage.setItem('languageSwitchState', switchInput.checked.toString())

    // Cambiar el texto
    const switchXText = document.querySelector(".switch-x-text")
    switchXText.textContent = `${newLanguage.toUpperCase()}` + " "
})

const savedLanguage = localStorage.getItem('language')
if (savedLanguage) {
    changeLanguage(savedLanguage)
}

// EFECTO
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.body.classList.remove('fade')
    }, 600)
})


// CONTACT FORM
const firebaseConfig = {
    apiKey: "AIzaSyCbbkJbEfF3wN5KTtB6thtEiw22e7sc368",
    authDomain: "portfolio-contacto-c3ee7.firebaseapp.com",
    databaseURL: "https://portfolio-contacto-c3ee7-default-rtdb.firebaseio.com",
    projectId: "portfolio-contacto-c3ee7",
    storageBucket: "portfolio-contacto-c3ee7.appspot.com",
    messagingSenderId: "798531995796",
    appId: "1:798531995796:web:b8253700a6d9eeec008c81"
}

firebase.initializeApp(firebaseConfig)

const contactFormDB = firebase.database().ref('PortfolioContactForm')

const contactForm = document.getElementById('contact-form')
contactForm.addEventListener('submit', submitForm)

function submitForm(e) {
    e.preventDefault()

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value

    saveMessages(name, email, message)
    alert()

    const form = e.target
    form.reset()
}

const saveMessages = (name, email, message) => {
    const newContactForm = contactFormDB.push()
    
    newContactForm.set({
        name: name,
        email: email,
        message: message
    })
}

// ALERT
const alert = () => {
    Swal.fire({
        icon: 'success',
        title: 'Enviado',
        showCancelButton: false,
    })
}