gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed"*/
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

var page = document.querySelector("#pagecontent")
var cur = document.querySelector("#cursor")
var curr = document.querySelector("#cursor")
var page2 =  document.querySelector("#page3")
page.addEventListener("mousemove" , function(dets){
    gsap.to(cursor,{
        x: dets.x, 
        y: dets.y
    })
})

page.addEventListener("mouseenter" , function(){
    gsap.to(cursor,{
        scale: 1
    })
})
page.addEventListener("mouseleave" , function(){
    gsap.to(cursor,{
        scale: 0
    })
})
page2.addEventListener("mousemove" , function(dets){
    gsap.to(cursorr,{
        x: dets.x , 
        y: dets.y 
    })
})

page2.addEventListener("mouseenter" , function(){
    gsap.to(cursorr,{
        scale: 1,
        opacity: 1
    })
})
page2.addEventListener("mouseleave" , function(){
    gsap.to(cursorr,{
        scale: 0
    })
})
function smooth(){
    gsap.from("#page2 p",{
        y: 120,
        stagger: {
            amount: 1, // Stagger each line by 1 second
            from: "start" // Stagger from the start of the animation
        },
        duration: 3,
        delay: 8,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 47%",
            end: "top 46%",

            scrub: 2
        }
    })
}
smooth()
function loading(){
    gsap.from("#page3top h2 ",{
        opacity: 0,
        delay: 4.3,
        duration: 3.9,
        stagger: 0.5
    })
    gsap.from("#page2 p", {
        opacity: 0,
        y: 50,
        rotation: 360,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.2,
        onComplete: function() {
            gsap.to("#page2 p", {
                opacity: 1,
                y: 30,
                rotation: 0,
                duration: 1,
                ease: "power1.inOut",
                stagger: 0.1,
                repeat: -1,
                yoyo: true
            });
        }
    });
}
loading()
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 1700,
        disableOnInteraction: false,
        duration: 30
      },
      speed: 2900
  });
  var ab= document.querySelector("#one");
  ab.addEventListener("mousemove" , function(){
    console.log("abab")
  })