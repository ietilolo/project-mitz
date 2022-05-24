
let firstSlide = document.querySelector("li");
let imgOn = document.querySelector("li.on");

// Loop through images and add/remove on class to li
function nextImage(){

    // remove on from current active slide
    imgOn.classList.remove("on");

    // check if at end
    if ( imgOn.nextElementSibling === null ){
        imgOn = firstSlide;
        imgOn.classList.add("on");
    } else {
        // get next image to activate
        let nextImg = imgOn.nextElementSibling;
        nextImg.classList.add("on");
        // Setup imgOn for next iteration
        imgOn = nextImg;
    }

}

setInterval(function(e){
    nextImage()
}, 5000)
