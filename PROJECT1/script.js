const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function hoverImageAnimation() {
    var elems = document.querySelectorAll(".elem")
    var image = document.querySelector("#fixed-image")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            image.style.display = "block"
            var i = e.getAttribute("data-image")
            image.style.backgroundImage = `url(${i})`
        })
        e.addEventListener("mouseleave", function () {
            image.style.display = "none"
        })

    })
}
hoverImageAnimation()

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
      });
}
swiperAnimation()