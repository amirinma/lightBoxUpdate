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
  lbTitle.textContent = lightboxTitle;
  //design the light box slide counter
  lightBox.appendChild(lbCounter);
  lbCounter.id = "lbCounter";
  let currentImg = 1;
  lbCounter.textContent = currentImg + " / " + imgCount;
  //design the lightbox previous slide button
  lightBox.appendChild(lbPrev);
  lbPrev.id = "lbPrev";
  lbPrev.innerHTML = "&#9664";
  lbPrev.onclick = showPrev;
  //design the light box next slide button
  lightBox.appendChild(lbNext);
  lbNext.id = "lbNext";
  lbNext.innerHTML = "&#9654"
  lbNext.onclick = showNext;
  //design the lightbox play-pause button
  lightBox.appendChild(lbPlay);
  lbPlay.id = "lbPlay";
  lbPlay.innerHTML = "&#9199"
  let timeID;
  lbPlay.onclick = function (){
    if (timeID){
      window.clearInterval(timeID);
      timeID = undefined;
    } else {
      showNext();
      timeID = window.setInterval(showNext, 1500);
    }
  }

  //design the lightbox images container
  lightBox.appendChild(lbImages);
  lbImages.id = "lbImages";
  //add images from the imgFiles array to the container
 for (let i = 0; i < imgCount; i++){
    let image = document.createElement("img");
    image.src = imgFiles[i];
    image.alt = imgCaptions[i];
   image.onclick = createOverlay;
    lbImages.appendChild(image);

  }
 //function to move forward through the images list
  function showNext(){
   lbImages.appendChild(lbImages.firstElementChild);
   (currentImg < imgCount)? currentImg ++ : currentImg = 1;
   lbCounter.textContent = currentImg + " / " + imgCount;
  }
 //function to move backward through the images list
  function showPrev(){
   lbImages.insertBefore(lbImages.lastElementChild, lbImages.firstElementChild);
    (currentImg > 1) ? currentImg -- : currentImg = imgCount;
    lbCounter.textContent = currentImg + " / " + imgCount;
  }
// opening a new browser tab
  lightBox.appendChild(document.createElement("button")).setAttribute("id", "btn");
  document.getElementById("btn").textContent = "Open New Window";

 document.getElementById("btn").onclick = openWindow;

 function openWindow(){
   let newWind = window.open("", "Wind", "width = 400, height = 400, toolbar = 0, manubar = 0, scrollbars = 0, status = 0");
   let mainHeading = document.createElement("h1");
   mainHeading.textContent = "My Slideshow";
   let closeBtn = document.createElement("button");
   newWind.document.body.appendChild(mainHeading)
   newWind.document.body.appendChild(closeBtn).setAttribute("id", "closeBtn");
   closeBtn.textContent = "Close it!";
  closeBtn.onclick = function (){window.close()};

   function closeFu(){console.log("Hellow Close")}

 console.log("test" + this)


  }
  function createOverlay(){
   let overlay = document.createElement("div");
   overlay.id = "lbOverlay";
   //add the figure box to the overlay
    let figureBox = document.createElement("figure");
    overlay.appendChild(figureBox);
    //add the image to the figure box
    let overlayImage = this.cloneNode(true);
    figureBox.appendChild(overlayImage);
    //add the caption to the figure box
    let overlayCaption = document.createElement("figcaption");
    overlayCaption.textContent = this.alt;
    figureBox.appendChild(overlayCaption);
    // add a close button to the overlay
    let closeBox = document.createElement("div");
    closeBox.id = "lbOverlayClose";
    closeBox.innerHTML = "&times";
    closeBox.onclick = function (){
      document.body.removeChild(overlay);
    }
    overlay.appendChild(closeBox)

    document.body.appendChild(overlay);
    console.log(("I was clicked!"))
    console.log(overlay)
    console.log(figureBox)
    console.log(document.body)
  }
  window.alert("Welcom!");
 window.confirm("Do you play?");
 window.prompt("Do you play?", "Yes");
}

