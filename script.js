gsap.registerPlugin(ScrollTrigger);

//FIRST PART -----------------------------------------------------------------

gsap.to(".a-background", {
    backgroundPosition: "0 300px",
    ease: "none",
    scrollTrigger: {
        trigger: ".a-background",
        scrub: 0,
    },
});

gsap.to(".b-background", {
    backgroundPosition: "0 300px",
    ease: "none",
    scrollTrigger: {
        trigger: ".b-background",
        scrub: 0,
    },
});

gsap.to(".c-background", {
    backgroundPosition: "0 300px",
    ease: "none",
    scrollTrigger: {
        trigger: ".c-background",
        scrub: 0,
    },
});