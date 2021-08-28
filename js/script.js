const hiddenNav = document.getElementById("hidden-nav")
const blackBackground = document.getElementById("black-background")

// display mobile nav
function mobileNav() {
    hiddenNav.classList.toggle("hidden")
    blackBackground.classList.toggle("hidden")
}

const mobileHeader = document.getElementById("mobile-header")
const desktopHeader = document.getElementById("desktop-header")
let slideIndex = 1
showSlides(slideIndex)

// next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n)
    mobileHeader.style.display = 'none'
    desktopHeader.style.display = 'none'
    setTimeout(() => {
        mobileHeader.style.display = 'block'
        desktopHeader.style.display = 'block'
    }, 0)
}


function showSlides(n) {
    const slides = document.getElementsByClassName("slide")
    // if slide on first one
    if (n > slides.length){
        slideIndex = 1
        
    }
    if(n < 1) {
        slideIndex = slides.length
    }
    
    if(slideIndex === 1) {
        mobileHeader.style.backgroundImage = "url(../images/mobile-image-hero-1.jpg)"
        desktopHeader.style.backgroundImage = "url(../images/desktop-image-hero-1.jpg)"
    } else if (slideIndex === 2) {
        mobileHeader.style.backgroundImage = "url(../images/mobile-image-hero-2.jpg)"
        desktopHeader.style.backgroundImage = "url(../images/desktop-image-hero-2.jpg)"
    } else {
        mobileHeader.style.backgroundImage = "url(../images/mobile-image-hero-3.jpg)"
        desktopHeader.style.backgroundImage = "url(../images/desktop-image-hero-3.jpg)"
    }
            

    for(let i = 0; i<slides.length; i++){
        slides[i].style.display = "none"
    }
    slides[slideIndex-1].style.display = "block"
}