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

document.addEventListener("DOMContentLoaded", function () {
	const typingElement = document.querySelector(".typing-effect")
	const text = typingElement.getAttribute("data-text")
	
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
})
  