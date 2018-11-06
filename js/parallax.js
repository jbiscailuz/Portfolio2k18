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
