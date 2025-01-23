for (let i = 1; i <= 50; i++) {
    gsap.to(`.card${i}`, {
      scale: 0.7,
      opacity: 0,
      scrollTrigger: {
        trigger: `.card${i}`,
        start: "top 15%",
        end: "bottom 15%",
        scrub: true,
      }
    });
  }
  