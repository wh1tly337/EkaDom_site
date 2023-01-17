var controls = document.querySelectorAll('.about-us-controls');
for (var i = 0; i < controls.length; i++) {
    controls[i].style.display = 'inline-block';
}

var slides = document.querySelectorAll('#about-us-slides .about-us-slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function previousSlide() {
    goToSlide(currentSlide - 1);
}

function goToSlide(n) {
    slides[currentSlide].className = 'about-us-slide';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'about-us-slide about-us-showing';
}


var playing = true;
var pauseButton = document.getElementById('about-us-pause');

function pauseSlideshow() {
    pauseButton.innerHTML = '&#9658;'; // play character
    playing = false;
    clearInterval(slideInterval);
}

function playSlideshow() {
    pauseButton.innerHTML = '&#10074;&#10074;'; // pause character
    playing = true;
    slideInterval = setInterval(nextSlide, 2000);
}

pauseButton.onclick = function () {
    if (playing) {
        pauseSlideshow();
    } else {
        playSlideshow();
    }
};

var next = document.getElementById('about-us-next');
var previous = document.getElementById('about-us-previous');

next.onclick = function () {
    pauseSlideshow();
    nextSlide();
};
previous.onclick = function () {
    pauseSlideshow();
    previousSlide();
};