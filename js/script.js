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
          }
        }, 100)
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

const flagsBtn = document.getElementById('flags')
const textChange = document.querySelectorAll("[data-section]")

const savedLanguage = localStorage.getItem('language')
if (savedLanguage) {
    changeLanguage(savedLanguage)
    const activeButton = document.querySelector(`[data-language="${savedLanguage}"]`)
    activeButton.classList.add('active')
}

flagsBtn.addEventListener('click', (e) => {
    console.log("click")
    const newLanguage = e.target.parentElement.dataset.language
    changeLanguage(newLanguage)

    flagsBtn.querySelectorAll('.flags-item').forEach(item => {
        item.classList.remove('active')
    })
    e.target.parentElement.classList.add('active')
})


