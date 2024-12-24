var tl =  gsap.timeline()
tl.from("#right img" ,{
    x : 200,
    duration: 1,
    scrub: 3
})

tl.from("#left h1" ,{
    opacity : 0,
    duration : 2,
    scrub: 3,
    stagger : 5
})
tl.from("#left-left p" ,{
    opacity : 0,
    y : 100,
    // duration : 2,
    // scrub: 3,
    stagger : 1
})
tl.from("#left-left button" ,{
    opacity : 0,
    x : -100,
    // duration : 2,
    // scrub: 3,
    stagger : 5
})

// gsap.from("#leftC img", {
//     x : -100,
//     opacity : 0,
//     scrollTrigger : {
//         // markers : true,
//         scroller: "body",
//         trigger : "#leftC",
//         start : "top 80%",
//         end : "top 60%",
//         scrub : true
//     }
// })
gsap.from("#rightC p", {
    y : -300,
    opacity : 0,
    stagger : 0.7,
    scrollTrigger : {
        // markers : true,
        scroller: "body",
        trigger : "#leftC",
        start : "top 60%",
       
        end : "top 50%",
        scrub : true
    }
})