let lightboxTitle = "My Western Vacation";
let imgFiles = ["image01", "image02", "image03", "image04", "image05"];
let imgCount = imgFiles.length;
let imgCaptions = new Array(5);
imgCaptions[0] = "Picture taken in a sand beach.";
imgCaptions[1] = "Picture taken inside amazon jungle.";
imgCaptions[2] = "Picture taken in oldtown lake.";
imgCaptions[3] = "Picture taken in Asna park.";
imgCaptions[4] = "Picture taken in Richmond guest house.";

let node = document.getElementById("ul");
node.className = "my_class";
console.log(node)
console.log(document.getElementsByClassName("my_class"))
console.log(document.querySelectorAll("ul"))




