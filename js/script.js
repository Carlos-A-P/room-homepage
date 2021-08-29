const hiddenNav = document.getElementById("hidden-nav")
const blackBackground = document.getElementById("black-background")
const mobileHeader = document.getElementById("mobile-header")
const desktopHeader = document.getElementById("desktop-header")
let slideIndex = 1
let buttonClicked = false
showSlides(slideIndex)
introAnimation()

// display mobile nav
function mobileNav() {
    hiddenNav.classList.toggle("drop-down")
    blackBackground.classList.toggle("visible")
    blackBackground.classList.toggle("hidden")
}



function introAnimation(){
    desktopHeader.style.display = "none"
    mobileHeader.style.display = "none"
 setTimeout(()=>{
    desktopHeader.style.display = "block"
    mobileHeader.style.display = "block"
}, 0)   
}


// next/previous controls
function plusSlides(n) {
    let buttonClicked = true
    showSlides(slideIndex += n, buttonClicked)
    slideAnimation()
}

function slideAnimation() {
    mobileHeader.classList.add('hidden')
    mobileHeader.classList.remove('visible')
    desktopHeader.classList.add('hidden')
    desktopHeader.classList.remove('visible')
    setTimeout(() => {
        mobileHeader.classList.add('visible')
        mobileHeader.classList.remove('hidden')
        desktopHeader.classList.add('visible')
        desktopHeader.classList.remove('hidden')
    }, 1500)
}


function showSlides(n, buttonActive) {
    const slides = document.getElementsByClassName("slide")
    // if slide on first one
    if (n > slides.length){
        slideIndex = 1
    }
    if(n < 1) {
        slideIndex = slides.length
    }
    
    if(buttonActive){
        setTimeout(()=>{
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
        }, 1500) 
    } else {
        mobileHeader.style.backgroundImage = "url(../images/mobile-image-hero-1.jpg)"
        desktopHeader.style.backgroundImage = "url(../images/desktop-image-hero-1.jpg)"
    }
         

    for(let i = 0; i<slides.length; i++){
        slides[i].style.display = "none"
    }
    slides[slideIndex-1].style.display = "block"
}