let text = new SplitType('#name-text')

let characters = document.querySelectorAll('.char')

for(i=0; i<characters.length; i++) {
    characters[i].classList.add('translate-y-[200%]')
}

gsap.to('#navbar', {
    y: 0,
    stagger: 0.05,
    opacity: 1,
    delay: 0.02,
    duration: 0.5
})
gsap.to('.appear-first', {
    stagger: 0.02,
    opacity: 1,
    delay: 0.07,
    duration: 0.5
}) 
gsap.to('.char', {
    y: 0,
    stagger: 0.04,
    delay: 0.7,
    duration: 0.5
})

gsap.to('.right-text', {
    y: 0,
    stagger: 0.05,
    opacity: 1,
    delay: 2,
    duration: 1
})



// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Select all elements with the class `.text` and apply animation
gsap.utils.toArray(".text").forEach((element) => {
  gsap.to(element, {
    color: "black", // Target color
    scrollTrigger: {
      trigger: element, // Each element triggers its own animation
      start: "top bottom", // Start animation when the element is 80% from the top of the viewport
      end: "top 50%",   // End animation when the element is 50% from the top
      scrub: false,      // Smooth scroll effect
      markers: false     // Debugging markers (optional)
    }
  });
});

gsap.utils.toArray(".image").forEach((element) => {
    gsap.to(element, {
      y: "0",
      opacity: "100", // Target color
      stagger: 0.04,
      duration: 0.5,
      scrollTrigger: {
        trigger: element, // Each element triggers its own animation
        start: "top bottom", // Start animation when the element is 80% from the top of the viewport
        end: "top 50%",   // End animation when the element is 50% from the top
        scrub: false,      // Smooth scroll effect
        markers: false,
        // toggleActions: 'play'     // Debugging markers (optional)
      }
    });
  });

  gsap.utils.toArray(".show-up").forEach((element) => {
    gsap.to(element, {
      y: "0",
      stagger: 0.04,
      delay: 0.4,
      duration: 0.5,
      scrollTrigger: {
        trigger: element, // Each element triggers its own animation
        start: "top 90%", // Start animation when the element is 80% from the top of the viewport
        end: "top 50%",   // End animation when the element is 50% from the top
        scrub: false,      // Smooth scroll effect
        markers: false,
        // toggleActions: 'play'     // Debugging markers (optional)
      }
    });
  });