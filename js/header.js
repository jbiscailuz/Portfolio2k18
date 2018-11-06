const header = document.querySelector("header")

document.addEventListener("scroll", function (event) {

  const scroll = window.pageYOffset

  if (scroll > 50) {
  	header.classList.add("slide")
  } else {
    header.classList.remove("slide")
  }
})
