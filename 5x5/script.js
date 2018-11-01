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

// const addMovement = function () {
//   const topViewport = window.pageYOffset
//   const midViewport = topViewport + (window.innerHeight / 2)
//
//   sections.forEach(section => {
//     const midSection = section.offsetTop + (section.offsetHeight / 2)
//     const distanceToSection = midViewport - midSection
//
//     const image = section.querySelector("img")
//     const content = section.querySelector("div")
//
//     let rotation = distanceToSection / 100
// 		let dist = -1 * distanceToSection / 2
//
//     if (section.classList.contains("reverse")) {
//       rotation = -1 * rotation
//     }
//
//     image.style.transform = `rotate(${rotation}deg)`
//     content.style.transform = `rotate(${-1 * rotation}deg)`
//
//     content.style.top = `${dist}px`
//   })
// }
//
// addMovement()
changeBackground()

document.addEventListener("scroll", function (event) {
  // addMovement()
  changeBackground()
})
