var crsr = document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
})







function ProjectAnimation() {
    var project = document.querySelectorAll(".project")
    var image = document.querySelector("#fixed-image")

    project.forEach(function (e) {
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
ProjectAnimation()


function page1Animation() {
    var h1 = document.querySelector("#content1 h1")
    var h2 = document.querySelector("#content2 h1")

    var h1text = h1.textContent
    var h2text = h2.textContent
    var splittedText1 = h1text.split("")
    var splittedText2 = h2text.split("")



    var clutter1 = ""
    splittedText1.forEach(function (e, idx) {
        clutter1 += `<span>${e}</span>`
    })
    h1.innerHTML = clutter1
    var clutter2 = ""
    splittedText2.forEach(function (e, idx) {
        clutter2 += `<span>${e}</span>`
    })
    h2.innerHTML = clutter2

    gsap.from("h1 span", {
        y: 30,
        duration: 0.1,
        stagger: 0.1,
        opacity: 0,
        rotate: 90,
    })
    gsap.from("h2 span", {
        x: 100,
        //    duration:0.1,
        stagger: 0.2,
        opacity: 0,
        rotate: -45
    })
    var buttons = document.querySelectorAll("#buttonss .elem")
    var para = document.querySelector("#content2 p")

    gsap.from(para, {
        y: 30,
        opacity: 0,
        stagger: 0.4
    })
    gsap.from(buttons, {
        y: 60,
        stagger: 0.3,
        opacity: 0
    })
}
page1Animation()


gsap.from("#top h4, #top p",{
    y:50,
    opacity:0,
    // delay:3,
    duration:1,
    scrollTrigger:{
        trigger: "#content3",
        scroller:"body",
        // markers: true,
        scrub:3,
        start: "top 30%",
        end: "top 28%"
    }
})
gsap.from("#left-info img",{
    y:50,
    opacity:0,
    // delay:3,
    duration:1,
    scrollTrigger:{
        trigger: "#top",
        scroller:"body",
        // markers: true,
        scrub:3,
        start: "top 30%",
        end: "top 28%"
    }
})
gsap.from("#right-info h5, #right-info p",{
    y:50,
    opacity:0,
    // delay:3,
    duration:1,
    stagger: 0.3,
    scrollTrigger:{
        trigger: "#top",
        scroller:"body",
        // markers: true,
        scrub:3,
        start: "top 30%",
        end: "top 28%"
    }
})
gsap.from("#right-info .elem",{
    y:50,
    opacity:0,
    // delay:3,
    duration:1,
    scrollTrigger:{
        trigger: "#top",
        scroller:"body",
        // markers: true,
        scrub:3,
        start: "top 30%",
        end: "top 28%"
    }
})
gsap.from("#skills h4,#skills p",{
    y:50,
    opacity:0,
    // delay:3,
    duration:1,
    scrollTrigger:{
        trigger: "#right-info .elem",
        scroller:"body",
        // markers: true,
        scrub:3,
        start: "top 30%",
        end: "top 28%"
    }
})
gsap.from(".b1",{
    x:-100,
    opacity:0,
    // delay:3,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger: "#skills",
        scroller:"body",
        // markers: true,
        scrub:3,
        start: "top 30%",
        end: "top 28%"
    }
})
gsap.from(".b2",{
    x:100,
    opacity:0,
    // delay:3,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
        trigger: "#skills",
        scroller:"body",
        // markers: true,
        scrub:3,
        start: "top 30%",
        end: "top 28%"
    }
})
gsap.from(".b3",{
    x:-100,
    opacity:0,
    // delay:3,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
        trigger: ".b2",
        scroller:"body",
        // markers: true,
        scrub:3,
        start: "top 40%",
        end: "top 35%"
    }
})
gsap.from(".b4",{
    x:100,
    opacity:0,
    // delay:3,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
        trigger: ".b2",
        scroller:"body",
        // markers: true,
        scrub:3,
        start: "top 40%",
        end: "top 35%"
    }
})

gsap.from(".skill-card",{
    y:40,
    opacity:0,
    duration:0.7,
    stagger:0.3,
    scrollTrigger:{
        trigger: ".skill-card",
        scroller: "body",
        // markers :true,
        start: "top 50%",
        end: "top 45%",
        scrub: 3
    }
})
gsap.from("#page4 h1",{
    y:40,
    opacity:0,
    duration:0.7,
    stagger:0.3,
    scrollTrigger:{
        trigger: "#page4",
        scroller: "body",
        // markers :true,
        start: "top 50%",
        end: "top 45%",
        scrub: 3
    }
})
gsap.from(".project",{
    y:40,
    opacity:0,
    duration:0.7,
    stagger:0.5,
    scrollTrigger:{
        trigger: "#page4 .project",
        scroller: "body",
        // markers :true,
        start: "top 50%",
        end: "top 45%",
        scrub: 3
    }
})



