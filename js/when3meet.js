var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
	showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" activ", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " activ";
}


var slideIndex2 = 1;
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides2(n) {
	showSlides2(slideIndex2 += n);
}

// Thumbnail image controls
function currentSlide2(n) {
	showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides2");
	var dots = document.getElementsByClassName("dot2");
	if (n > slides.length) {slideIndex2 = 1}
	if (n < 1) {slideIndex2 = slides.length}
	for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" activ2", "");
	}
	slides[slideIndex2-1].style.display = "block";
	dots[slideIndex2-1].className += " activ2";
}


var slideIndex3 = 1;
showSlides3(slideIndex3);

// Next/previous controls
function plusSlides3(n) {
	showSlides3(slideIndex3 += n);
}

// Thumbnail image controls
function currentSlide3(n) {
	showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides3");
	var dots = document.getElementsByClassName("dot3");
	if (n > slides.length) {slideIndex3 = 1}
	if (n < 1) {slideIndex3 = slides.length}
	for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" activ3", "");
	}
	slides[slideIndex3-1].style.display = "block";
	dots[slideIndex3-1].className += " activ3";
}
