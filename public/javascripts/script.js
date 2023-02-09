
$(window).on('load', function () {  
  $(".center").fadeOut("fast");  
});

gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({
  repeat: 0,
  repeatDelay: 0,
  yoyo: true,
});
// tl.from(".women")

tl.from([".exp",".women",".local"], {
  opacity: 0,
  y: -100,
  ease: "back.out(4)",
  stagger: {
    amount: 0,
    from: "random"
  }
});

tl.from([".first-page-form",".clinic",".side-bar"],{
  y:100,
  opacity: 0,
  transformOrigin: "left",
  ease: Sine.easeInOut,
  ease: "expo.outIn",
  // css: { borderBottom: "1px solid rgb(13,110,253)" },
  stagger: {
    amount: 0.1,
    from: "random"
  }
})


const tl2 = gsap.timeline({
  transformOrigin: "left",
  // ease: Power0.easeInOut,
  repeat: 0,
  repeatDelay: 0,
  yoyo: true,
});


const consulting = document.querySelector(".top-page-bottom-center-div")

// if cwindow.onscroll()

tl.from([".top-page-bottom-center-div",".article-bottom-message"],{
  y:50,
  opacity: 0,
  duration:0.3,
  transformOrigin: "left",
  // ease: Sine.easeInOut,
  // ease: "expo.outIn",
  // css: { borderBottom: "1px solid rgb(13,110,253)" },
  stagger: {
    amount: 0.1,
    from: "random"
  },
  scrollTrigger:{
  trigger:".side-bar",
  start: "top 120px",
  end: "bottom 300px",
  // markers: true,
  scroller:"body",
  scrub:1,
  // pin:true,
  ease: "power1.inOut"
}

})



gsap.from("nav",{
  transformOrigin: "left",
  ease: Power0.easeInOut,
  repeat: 0,
  repeatDelay: 0,
  yoyo: true,
  opacity: 0,
  transformOrigin: "left",
  ease: Sine.easeInOut,
  ease: "expo.outIn",
  css: { backgroundColor : "transparent",boxShadow:"0 0 0 0" },
  stagger: {
    amount: 0.1,
    from: "random"
  },
  scrollTrigger:{
  trigger:"nav",
  start: "top 0px",
  end: "top -100px",
  // markers: true,
  scroller:"body",
  scrub:0.1,
  // pin:true,
  ease: "power1.inOut"
}

})

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

// $(document).ready(function() {
//   // Swiper: Slider
//       new Swiper('.swiper-container', {
//           loop: true,
//           nextButton: '.swiper-button-next',
//           prevButton: '.swiper-button-prev',
//           slidesPerView: 3,
//           paginationClickable: true,
//           spaceBetween: 20,
//           breakpoints: {
//               1920: {
//                   slidesPerView: 3,
//                   spaceBetween: 30
//               },
//               1028: {
//                   slidesPerView: 2,
//                   spaceBetween: 30
//               },
//               480: {
//                   slidesPerView: 1,
//                   spaceBetween: 10
//               }
//           }
//       });
//   });
  

var swiperr = document.getElementsByClassName("swiper-container");


var swiper = new Swiper(".swiper", {
  initialSlide: 2,
  speed: 1000,
  loop: true,
  roundLengths: true,
  // mousewheel: true,
  // grabCursor: true,
  // mousewheel: true,
  slidesPerView: 'auto',
  loop: false,
  autoplay: {
    enabled: true,
    delay: 1,
  },
  spaceBetween: 30,
  centeredSlides: true,

  autoplay: {
    delay: 1000,
    disableOnInteraction: false
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  
});





























// import LocomotiveScroll from "https://cdn.skypack.dev/locomotive-scroll";

// const scroller = new LocomotiveScroll({
//     el: document.querySelector('body'),
//     smooth: true
// })
// scroller.on('scroll', ScrollTrigger.update)

// ScrollTrigger.scrollerProxy(
//     '.container', {
//         scrollTop(value) {
//             return arguments.length ?
//             scroller.scrollTo(value, 0, 0) :
//             scroller.scroll.instance.scroll.y
//         },
//         getBoundingClientRect() {
//             return {
//                 left: 0, top: 0, 
//                 width: window.innerWidth,
//                 height: window.innerHeight
//             }
//         }
//     }
// )


// ScrollTrigger.create({
//     trigger: '.container',
//     scroller: '.container',
//     start: 'top+=30% 50%',
//     end: 'bottom-=40% 50%',
//     animation: gsap.to('.image-mask', {backgroundSize: '120%'}),
//     scrub: 2,
//     // markers: true
// })


// ScrollTrigger.addEventListener('refresh', () => scroller.update())


// ScrollTrigger.refresh()


// function show() {
//     gsap.registerPlugin(ScrollTrigger);

//     // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

//     const locoScroll = new LocomotiveScroll({
//         el: document.querySelector("container"),
//         smooth: true
//     });
//     // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
//     locoScroll.on("scroll", ScrollTrigger.update);

//     // tell ScrollTrigger to use these proxy methods for the "container" element since Locomotive Scroll is hijacking things
//     ScrollTrigger.scrollerProxy("container", {
//         scrollTop(value) {
//             return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//         }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//         getBoundingClientRect() {
//             return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//         },
//         // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//         pinType: document.querySelector("container").style.transform ? "transform" : "fixed"
//     });

//     // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//     // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
//     ScrollTrigger.refresh();

// }
// show();

// // gsap.to("#page3 h1",{
// //     scale:3,
// //     duration:1,
// //     ease: "Power0.easeNone",
// //     scrollTrigger:{
// //         trigger:"#page3 h1",
// //         scroller:"container",
// //         start:"top 60%",
// //     },
// //     repeat:-1,
// //     yoyo:true
// // })













