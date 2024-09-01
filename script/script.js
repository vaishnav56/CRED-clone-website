
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


const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".part5",
        scroller: "body",
        start: "top 0%",
        end: "bottom -100%",
        scrub: 2,
        pin: true,
    }
});

var images = document.querySelectorAll(".phone img");
var scrollTexts = document.querySelectorAll(".scroll-text");

scrollTexts.forEach(function(slide, index) {
    // Animate the scroll texts
    

    // Animate the corresponding image; index+1 checks for out-of-bound error
    if (index + 1 < scrollTexts.length) {
        tl2.to(scrollTexts[index], {
            marginTop: `-100%`,
            opacity: 1,
        });
        };
    
    if (index + 1 < images.length) {
        tl2.to(images[index + 1], {
            marginLeft: "-100%",
            opacity: 1,
        });
    }

    // Fade out the current image
    tl2.to(images[index], {
        opacity: 0,
    }, "<");

    tl2.to(images[images.length - 1], {
        opacity: 1,
    }); // "<" syncs this animation with the previous one
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

  });