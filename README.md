# Room Homepage

- Live website -(https://cpwd-room-homepage.netlify.app/)

## Table of contents

- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

## My process

### Screenshot

### End Result

This is the desktop view
![result-desktop](https://user-images.githubusercontent.com/85038929/131232941-92d0e687-6313-4dc7-aff0-2078e5446b97.JPG)

This is the mobile navigation bar which slides down when active
![result-mobile-nav](https://user-images.githubusercontent.com/85038929/131232944-1503c67d-f71d-4bce-bc5e-6b9e7e3b319a.JPG)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS FlexBox
- CSS Grid
- JavaScript
- Media Queries

### What I learned

This challenge really tested my grid-layout skills and I tried to use the least amount of code possible. This is also the first project where I added animations and transitions which was really fun to play around with. Lastly, I was able to add smooth transitions between slides and header images smoothly in multiple screens.

- This is the selector that allowed me to add animations to the elements that I wanted, as long as it had a "fade" class

```CSS
@-webkit-keyframes fade {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

@keyframes fade {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

.fade {
	-webkit-animation-name: fade;
	-webkit-animation-duration: 1.5s;
	animation-name: fade;
	animation-duration: 1.5s;
}
```

```CSS
@-webkit-keyframes fade {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

@keyframes fade {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

.fade {
	-webkit-animation-name: fade;
	-webkit-animation-duration: 1.5s;
	animation-name: fade;
	animation-duration: 1.5s;
}
```

- The most difficult part was adding animation to my header image. I didn't want to do the same as my slides where I had to make seperate elements for each slide. So instead, I gave my parent div for header a set hieght and was able to give it animations by changing its display and adding a setTimeout()

```JavaScript
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
```

### Useful resources

- [How TO - Slideshow](https://www.w3schools.com/howto/howto_js_slideshow.asp) - This documentation from w3schools helped me understand how to make slideshows.

- [transition](https://www.w3schools.com/howto/howto_js_slideshow.asp) - this documentation is about CSS transition property and how you can use its

- [Debugging JavaScript in Visual Studio Code and Google Chrome](https://developer.mozilla.org/en-US/docs/Web/CSS/transition) - this video taught me how to debug my javascript using the debugger tool in developer tools

## Author

- Website - [Carlos Perez](https://github.com/Carlos-A-P/room-homepage.git)
- Frontend Mentor - [@Carlos-A-P](https://www.frontendmentor.io/profile/Carlos-A-P)
- Twitter - [@WDCarlosP](https://www.twitter.com/WDCarlosP)
