// header

const header = document.querySelector("header")

document.addEventListener("scroll", function (event) {

  const scroll = window.pageYOffset

  if (scroll > 50) {
  	header.classList.add("slide")
  } else {
    header.classList.remove("slide")
  }
})

// parallax

const sections = document.querySelectorAll("section")
const bodyTag = document.querySelector("body")

const changeBackground = function () {
  const topViewport = window.pageYOffset
	const midViewport = topViewport + (window.innerHeight / 2)

  sections.forEach(section => {
    const sectionTop = section.offsetTop
    const sectionMid = sectionTop + (section.offsetHeight / 2)

    if (sectionMid - 100 < midViewport) {
      if (section.hasAttribute("data-background")) {
        const background = section.getAttribute("data-background")
        bodyTag.style.backgroundColor = background
      } else {
        bodyTag.style.backgroundColor = ""
      }
    }
  })
}

changeBackground()

document.addEventListener("scroll", function (event) {
  changeBackground()
})


// Slides

let slideArea = document.querySelector("div.SlidesAction")
let images = slideArea.querySelectorAll("img.Slides101")

let currentSlide = 0
let zIndex = 1

slideArea.addEventListener("click", function () {
	currentSlide = currentSlide + 1
  currentSlide = currentSlide % images.length

  zIndex = zIndex + 1

  images[currentSlide].style.zIndex = zIndex

  images.forEach(img => {
    img.classList.remove("displayed")
  })

  images[currentSlide].classList.add("displayed")
})

slideArea.addEventListener("mouseover", function () {
  images.forEach(img => {
    const x = 20 * Math.floor(Math.random() * 5 - 2)
    const y = 20 * Math.floor(Math.random() * 5 - 2)
    img.style.transform = `translate(${x}px, ${y}px)`
  })
})

slideArea.addEventListener("mouseout", function () {
  images.forEach(img => {
    img.style.transform = ""
  })
})
