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
    // scrollTrigger : {
    //     trigger : ".ach",
    //     scroller : "body",
    //     markers: true,
    //     start : "top 30%",
    //     end : "top 40%"
    // }
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

function setRandomDimensions() {
    // const images = document.querySelectorAll('.image'); // Select all images
    images.forEach(img => {
        const randomHeight = Math.floor(Math.random() * 300) + 100; // Random height between 100 and 400
        const aspectRatio = 4 / 3; // Assuming a 4:3 aspect ratio
        const randomWidth = randomHeight * aspectRatio; // Calculate width based on height

        img.style.height = randomHeight + 'px'; // Set the random height
        img.style.width = randomWidth + 'px'; // Set the calculated width
    });
}

// Call the function to set random dimensions
setRandomDimensions();



// document.querySelector('.scroll-indicator').addEventListener('click', () => {
//     document.querySelector('#page2').scrollIntoView({
//         behavior: 'smooth'
//     });
// });

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