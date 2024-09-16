var cursor = document.querySelector("#cursor")
var cursorB = document.querySelector("#cursor-blur")
var h4s = document.querySelectorAll("#nav h4")

function navBarAnimation(){   
h4s.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        elem.style.color = "#fff";
        cursor.style.scale = 3
        cursor.style.backgroundColor = "transparent"
        cursor.style.border = "0.5px solid black"
        cursor.style.transition = "all ease 0.3s"

    })
    elem.addEventListener("mouseleave",function(){
        elem.style.color = "#fff";
        cursor.style.scale = 1
        cursor.style.backgroundColor = "#95C11E"
        cursor.style.border = "none"
        cursor.style.transition = "none"
    })
})
}
navBarAnimation();

function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){
        cursor.style.left = dets.x + "px"
        cursor.style.top = dets.y + "px"
        cursorB.style.left = dets.x -400 + "px"
        cursorB.style.top = dets.y -400 + "px"
     })
}
cursorAnimation();

function cardsAnimation(){
    gsap.from(".card",{
        scale:0.8,
        opacity:0,
        duration:1,
        staggger:0.2,
        scrollTrigger:{
            trigger:".card",
            scroller:"body",
            // markers:true,
            scrub: 3,
            start: "top 70%",
            end: "top 65%"
        }
    })
}
cardsAnimation();

function quoteAnimation(){
    gsap.to("#colon1",{
        top : "27%",
        left: "22%",
        duration: 1,
        scrollTrigger:{
            trigger: "#colon1",
            scroller : "body",
            scrub:2,
            start: "top 50%",
            end: "top 40%",
        }
    })
    gsap.to("#colon2",{
        bottom : "30%",
        right: "24%",
        duration: 1,
        scrollTrigger:{
            trigger: "#colon1",
            scroller : "body",
            scrub:2,
            start: "top 50%",
            end: "top 40%",
        }
    })
}
quoteAnimation();

function upperSlidetextAnimation(){
    gsap.from("#page4 h1",{
        y:70,
        scrollTrigger:{
            trigger:"#page4 h1",
            scoller:"body",
            scrub: 1.5,
            start: "top 75%",
            end: "top 73%"
        }
    })
}
upperSlidetextAnimation();

function kuchAurAnimation(){
    gsap.to("#nav",{
        backgroundColor: "#000",
        height: "12vh",
        duration:0.5,
        scrollTrigger:{
            trigger : "#nav",
            scroller : "body",
            start : "top -10%",
            end : "top -11%",
            scrub : 1
        }
    
    })
    gsap.to("#main",{
        backgroundColor : "#000",
        scrollTrigger : {
            trigger : "#main",
            scroller : "body",
            start : "top -30%",
            end : "top -70%",
            scrub : 2
        }
    })
    gsap.from("#about-us img, #about-us-in",{
        y:80,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:"#about-us",
            scroller:"body",
            scrub: 3,
            start: "top 60%",
            end: "top 58%"
        }
    })
}
kuchAurAnimation();
