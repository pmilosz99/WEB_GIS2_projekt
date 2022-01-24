let mapDiv = document.getElementById("mapDiv");
let arrow = document.getElementById("arrow");

arrow.addEventListener("click", scrollDown);

function scrollDown() {
    mapDiv.scrollIntoView(false)
}