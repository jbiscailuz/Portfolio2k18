$(document).ready(function() {

  let number = 0

  const stamps = [
    "data/random/00.png",
    "data/random/01.png",
    "data/random/02.png",
    "data/random/03.png",
    "data/random/04.png",
    "data/random/05.png",
    "data/random/06.png",
    "data/random/07.png",
    "data/random/08.png",
    "data/random/09.png"
  ]

  const stampsTag = document.querySelector("div.stamps")

  const addStamp = function(x,y) {
    const img = document.createElement("img")
    img.setAttribute("src", stamps[number])

    img.style.left = (x - (window.innerWidth / 2)) + "px"
    img.style.top = y + "px"

    stampsTag.appendChild(img)

    number = number + 1
    if (number > stamps.length - 1) {
      number = 0
    }
  }

  document.addEventListener("click", function (event) {
  	addStamp(event.pageX, event.pageY)
  })

});
