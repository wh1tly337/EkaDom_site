var partners_controls = document.querySelectorAll('.partners-controls');
for (var i = 0; i < partners_controls.length; i++) {
  partners_controls[i].style.display = 'inline-block';
}

var partners_slides = document.querySelectorAll('#partners-slides .partners-slide');
var partners_currentSlide = 0;
var partners_slideInterval = setInterval(partners_nextSlide, 5000);

function partners_nextSlide() {
  partners_goToSlide(partners_currentSlide + 1);
}

function partners_previousSlide() {
  partners_goToSlide(partners_currentSlide - 1);
}

function partners_goToSlide(n) {
  partners_slides[partners_currentSlide].className = 'partners-slide';
  partners_currentSlide = (n + partners_slides.length) % partners_slides.length;
  partners_slides[partners_currentSlide].className = 'partners-slide partners-showing';
}

var partners_next = document.getElementById('partners-next');
var partners_previous = document.getElementById('partners-previous');

partners_next.onclick = function () {
  partners_nextSlide();
};
partners_previous.onclick = function () {
  partners_previousSlide();
};