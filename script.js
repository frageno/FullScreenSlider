let sliderImages = document.querySelectorAll('.slide');
let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');
let current = 0; // Default

// Function which run every time before any slide to hide them
function reset() {
    for(let i = 0; i < sliderImages.length; i++){
        sliderImages[i].classList.remove('active');
    }
}

// Init slider
function startSlide() {
    reset();
    sliderImages[0].classList.add('active'); // Set the first slide visible
}

// Show previous slide
function slideLeft(){
    reset();
    sliderImages[current - 1].classList.add('active'); // Decreasing current index
    current--;
}

// Show next slide
function slideRight(){
    reset();
    sliderImages[current + 1].classList.add('active'); // Increasing current index
    current++;
}

// Left arrow click
arrowLeft.addEventListener('click',function(){
    if(current === 0){
        current = sliderImages.length; // Setting current index to the lenght of array
    }
    slideLeft();
})

// Right arrow click
arrowRight.addEventListener('click',function(){
    if(current === sliderImages.length -1){
        current = -1; // Setting current index to the first element in the array
    }
    slideRight();
})

startSlide();

