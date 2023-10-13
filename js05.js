window.addEventListener("load", createLightbox);

function createLightbox(){
  // lightBox container
  let lightBox = document.getElementById("lightbox")
  // parts of the lightBox
  let lbTitle = document.createElement("h1");
  let lbCounter = document.createElement("div");
  let lbPrev = document.createElement("div");
  let lbNext = document.createElement("div");
  let lbPlay = document.createElement("div");
  let lbImages = document.createElement("div");
  // design the lightbox title
  lightBox.appendChild(lbTitle);
  lbTitle.id = "lbTitle";
  //design the light box slide counter
  lightBox.appendChild(lbCounter);
  lbCounter.id = "lbCounter";

}
