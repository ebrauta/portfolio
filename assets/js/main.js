/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

// SHOW
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})

// HIDDEN
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show')
})

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', () => linkAction()))

/* === SCROLL TO TOP BUTTON === */
const btnTop = document.querySelector(".backToTop");
btnTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')
window.addEventListener('scroll', () => scrollActive())

function scrollActive(){
    btnTop.style.display = window.scrollY >= 630 ? 'block' : 'none'
    const scrollY = window.scrollY
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId+']').classList.add('active')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId+']').classList.remove('active')
        }
    })
}
