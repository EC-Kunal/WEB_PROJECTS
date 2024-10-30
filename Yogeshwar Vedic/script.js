let slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let intervalId;

function showNextSlide() {
	slides[currentSlide].style.left = '-100%';
	currentSlide = (currentSlide + 1) % slides.length;
	slides[currentSlide].style.left = '0';
}

function showPrevSlide() {
	slides[currentSlide].style.left = '100%';
	currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	slides[currentSlide].style.left = '0';
}

document.querySelector('.next').addEventListener('click', showNextSlide);
document.querySelector('.prev').addEventListener('click', showPrevSlide);

intervalId = setInterval(showNextSlide, 3000);

document.querySelector('.slider').addEventListener('mouseover', () => {
	clearInterval(intervalId);
});

document.querySelector('.slider').addEventListener('mouseout', () => {
	intervalId = setInterval(showNextSlide, 3000);
});

let menuList = document.querySelector("#menulist")
menuList.style.maxHeight = "0px"

function toggleMenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "100vh"
        menuList.style.backgroundColor = "rgb(228, 158, 133)"
    } else {
        menuList.style.maxHeight = "0px"
    }
}