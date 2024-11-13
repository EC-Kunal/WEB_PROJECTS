function books(){
    document.querySelectorAll(".book").forEach(function (elem) {
        elem.addEventListener("mousemove", function (dets) {
           var diff = dets.clientY - elem.getBoundingClientRect().top ;
            gsap.to(elem.querySelector("img"),{
                opacity : 1,
                ease : Power1,
                top : diff,
                left : dets.clientX
            });
    
        });
    });
    document.querySelectorAll(".book").forEach(function(elem){
        elem.addEventListener("mouseleave", function(dets){
            gsap.to(elem.querySelector("img"),{
                opacity : 0,
                ease : Power1,
            })
        })
    })
}

books();

function cursor(){
    var crsr = document.querySelector("#cursor")
window.addEventListener("mousemove",function(dets){
    crsr.style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`
})
}
cursor()

document.querySelectorAll(".ach").forEach(function(elem){
    elem.addEventListener("mousemove",function(){
        elem.querySelector("p").style.opacity = 1;
    })
    elem.addEventListener("mouseleave",function(){
        elem.querySelector("p").style.opacity = 0;
    })
})

gsap.from("#hero h1",{
    opacity : 0,
    y : 30,
    duration : 1,
})
var tl = gsap.timeline();
tl.from("#infos p",{
    opacity : 0,
    y : 60,
    duration : 1,
    stagger: 0.5,
    scrollTrigger : {
        trigger : "#infos p",
        scroller : "body",
        start : "top 60%",
        end : "top 55%",
        scrub: 3
    }
})
tl.from(".book",{
    y:40,
    opacity:0,
    duration:0.7,
    stagger:0.5,
    scrollTrigger:{
        trigger: "#page3 .book",
        scroller: "body",
        start: "top 70%",
        end: "top 35%",
        scrub: 3
    }
})
tl.from(".ach",{
    y:40,
    opacity:0,
    duration:0.7,
    stagger:0.5,
    scrollTrigger:{
        trigger: "#page4 .ach",
        scroller: "body",
        start: "top 70%",
        end: "top 35%",
        scrub: 3
    }
})
tl.from("#short-intro",{
    y : 30,
    opacity : 0,
    stagger : 1
})
tl.from("#hero-title-3 p",{
    y : 30,
    opacity : 0,
    stagger : 1
})

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.scroll-indicator').addEventListener('click', () => {
        const targetSection = document.querySelector('#page2');
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error("Element with ID 'page2' not found.");
        }
    });
});