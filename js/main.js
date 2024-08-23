let h1 = document.querySelector("#page1 h1").textContent;

let splitedtext = h1.split("");
console.log(splitedtext);

let newtext = "";

splitedtext.forEach(function (item) {
  newtext += `<span>${item}</span>`;
});

document.querySelector("#page1 h1").innerHTML = newtext;

gsap.from("#page1 h1 span", {
  opacity: 0,
  delay: 1,
  transform: "translateY(-50%)",
  stagger: 0.1,
});

gsap.to("#page2 img", {
  width: "100%",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "top 0%",
    end: "top -100%",
    scrub: 2,
    pin: true,
  },
});

gsap.to("#page3 h1", {
  transform: "translateX(-170%)",
  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    start: "top 0%",
    pin: true,
    scrub: 2,
  },
});
