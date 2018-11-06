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
