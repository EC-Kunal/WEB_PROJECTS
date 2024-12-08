function books() {
    document.querySelectorAll(".book").forEach(function (elem) {
        elem.addEventListener("mousemove", function (dets) {
            var diff = dets.clientY - elem.getBoundingClientRect().top;
            gsap.to(elem.querySelector("img"), {
                opacity: 1,
                ease: Power1,
                top: diff,
                left: dets.clientX
            });

        });
    });
    document.querySelectorAll(".book").forEach(function (elem) {
        elem.addEventListener("mouseleave", function (dets) {
            gsap.to(elem.querySelector("img"), {
                opacity: 0,
                ease: Power1,
            })
        })
    })
}

books();

function cursor() {
    var crsr = document.querySelector("#cursor")
    window.addEventListener("mousemove", function (dets) {
        crsr.style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`
    })
}
cursor()

document.querySelectorAll(".ach").forEach(function (elem) {
    elem.addEventListener("mousemove", function () {
        elem.querySelector("p").style.opacity = 1;
    })
    elem.addEventListener("mouseleave", function () {
        elem.querySelector("p").style.opacity = 0;
    })
})

gsap.from("#hero h1", {
    opacity: 0,
    y: 30,
    duration: 1,
})
var tl = gsap.timeline();
tl.from("#infos p", {
    opacity: 0,
    y: 60,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
        trigger: "#infos p",
        scroller: "body",
        start: "top 60%",
        end: "top 55%",
        scrub: 3
    }
})
tl.from(".book", {
    y: 40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.5,
    scrollTrigger: {
        trigger: "#page3 .book",
        scroller: "body",
        start: "top 70%",
        end: "top 35%",
        scrub: 3
    }
})
tl.from(".ach", {
    y: 40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.5,
    scrollTrigger: {
        trigger: "#page4 .ach",
        scroller: "body",
        start: "top 70%",
        end: "top 35%",
        scrub: 3
    }
})
tl.from("#short-intro", {
    y: 30,
    opacity: 0,
    stagger: 1
})
tl.from("#hero-title-3 p", {
    y: 30,
    opacity: 0,
    stagger: 1
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

var SplitH1 = document.querySelector("#hero-title-1 h1")
var SplitH1text = SplitH1.textContent
var splittedText = SplitH1text.split("")

var clutter = ""
var halfLength = splittedText.length / 2
splittedText.forEach(function (elem, idx) {
    if (idx < halfLength) clutter += `<span class="a">${elem}</span>`
    else clutter += `<span  class="b">${elem}</span>`
})

SplitH1.innerHTML = clutter

gsap.from(".a, .b", {
    y: 100,
    duration: 1,
    stagger: 0.15,
    opacity: 0
});

var SplitH12 = document.querySelector("#heroes #hero-title-2 h1");
var SplitH12text = SplitH12.textContent.replace(/ /g, "  "); // Add an extra space
var splittedText2 = SplitH12text.split("");

var clutter2 = "";
var halfLength2 = splittedText2.length / 2;
splittedText2.forEach(function(elem, idx) {
    if (idx < halfLength2) clutter2 += `<span class="c">${elem}</span>`;
    else clutter2 += `<span class="d">${elem}</span>`;
});
SplitH12.innerHTML = clutter2;

gsap.from(".c, .d", {
    y: 100,
    duration: 1,
    stagger: 0.15,
    opacity: 0
});


var SplitH13 = document.querySelector("#heroes #hero-title-2 h2");
var SplitH13text = SplitH13.textContent.replace(/ /g, "  "); 
var splittedText3 = SplitH13text.split("");

var clutter3 = "";
var halfLength3 = splittedText3.length / 2;
splittedText3.forEach(function(elem, idx) {
    if (idx < halfLength3) clutter3 += `<span class="e">${elem}</span>`;
    else clutter3 += `<span class="f">${elem}</span>`;
});
SplitH13.innerHTML = clutter3;

gsap.from(".e, .f", {
    y: 100,
    duration: 1,
    stagger: 0.15,
    opacity: 0
});