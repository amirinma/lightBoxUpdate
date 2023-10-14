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
    lbImages.appendChild(image);
  }
 //function to move forward through the images list
  function showNext(){
   lbImages.appendChild(lbImages.firstElementChild);
   (currentImg < imgCount)? currentImg ++ : currentImg = 1;
   lbCounter.textContent = currentImg + " / " + imgCount;
   console.log(lbImages)
    console.log(currentImg)
  }
 //function to move backward through the images list
  function showPrev(){
   lbImages.insertBefore(lbImages.lastElementChild, lbImages.firstElementChild);
    (currentImg > 1) ? currentImg -- : currentImg = imgCount;
    lbCounter.textContent = currentImg + " / " + imgCount;
  }
}

