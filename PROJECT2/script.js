const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var play = document.querySelector("#play")
var vdoCon = document.querySelector("#video-container")

function videoAnimation(){
    

vdoCon.addEventListener("mouseenter",function(){
    gsap.to(play,{
        opacity:1,
        scale:1
    })
})
vdoCon.addEventListener("mouseleave",function(){
    gsap.to(play,{
        opacity:0,
        scale:0
    })
})
vdoCon.addEventListener("mousemove",function(dets){
   gsap.to(play,{
    left:dets.x-60,
    top:dets.y-60
   })
})
}
videoAnimation()

function loadAnimation(){
    var title = document.querySelectorAll("#page1 h1")

gsap.from(title,{
    y:100,
    stagger:0.3,
    opacity:0,
    duration:0.8,
    delay:0.5
})
gsap.from(vdoCon,{
    scale:0.8,
    opacity:0,
    duration:0.3,
    delay:1.5
})
}
loadAnimation()

document.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
        left:dets.x,
        top:dets.y,   
    })
})
document.querySelector("#child1").addEventListener("mouseenter",function(){
    gsap.to("#cursor",{
        transform: 'translate(-50%,-50%) scale(1)'
    })
})