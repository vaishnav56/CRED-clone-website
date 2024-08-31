
const tl = gsap.timeline();

gsap.from(".part1",{
    opacity:0,
    y:30,
    duration:1.5,
})

tl.from("#img1",{
    left:"-90%",
    scrollTrigger: {
        trigger: ".part2 #img",
        scroller: "body",
        start: "100% center",
        end: "150% center",
        scrub:2
    }
})
tl.from("#img2",{
    left:"-90%",
    scrollTrigger: {
        trigger: ".part2 #img",
        scroller: "body",
        start: "100% center",
        end: "150% center",
        scrub:2
    }
})
tl.from("#img3",{
    top:"-205vh",
    scrollTrigger: {
        trigger: ".part2 #img",
        scroller: "body",
        start: "100% center",
        end: "150% center",
        scrub:2
    }
})
tl.from("#img4",{
    left:"178%",
    scrollTrigger: {
        trigger: ".part2 #img",
        scroller: "body",
        start: "100% center",
        end: "150% center",
        scrub:2
    }
})
tl.from("#img5",{
    left:"178%",
    scrollTrigger: {
        trigger: ".part2 #img",
        scroller: "body",
        start: "100% center",
        end: "150% center",
        scrub:2
    }
})



