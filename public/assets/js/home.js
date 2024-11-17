import $ from "jquery";

$(document).ready(function () {
  $(".open-menu").on("click", function () {
    $(".top-navbar").addClass("menu-open");
    $(".open-menu").hide();
    $(".close-menu").show();
  });

  $(".close-menu").on("click", function () {
    $(".top-navbar").removeClass("menu-open");
    $(".close-menu").hide();
    $(".open-menu").show();
  });
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 16,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000, // Sets the speed of the autoplay transition (in milliseconds)
    smartSpeed: 1000, // Sets the speed of other animations (in milliseconds)
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1.5,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
});

function typeWriter(element, speed, callback) {
  const text = element.innerHTML;
  element.innerHTML = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else if (callback) {
      callback(); // Trigger the callback once typing is done
    }
  }

  type();
}

function fadeInElement(element, callback) {
  element.style.opacity = 1;
  element.style.transform = "translateY(0)";
  if (callback) {
    setTimeout(callback, 1000); // Waits for animation to finish before calling callback
  }
}

function expandElementHeight(element, targetHeight, callback) {
  element.style.height = targetHeight;
  if (callback) {
    setTimeout(callback, 1000); // Waits for height transition to complete before calling callback
  }
}

// Target elements
const h1 = document.getElementById("typewriter").querySelector("span");
const p = document.getElementById("fadeInText");
const midBox = document.querySelector(".hbm-box-mid");
const leftBox = document.querySelector(".hbm-box-left");
const rightBox = document.querySelector(".hbm-box-right");
const standlines = document.querySelectorAll(".hbm-box .standline");
const showreel = document.querySelector(".home-bottom-showreel");
const bannerAction = document.querySelector(".home-banner-bottom-action");

// Run the animations in sequence
typeWriter(h1, 20, function () {
  fadeInElement(p, function () {
    fadeInElement(midBox, function () {
      fadeInElement(leftBox, function () {
        fadeInElement(rightBox, function () {
          // Animate each .standline after .hbm-boxes have faded in
          standlines.forEach((standline, index) => {
            setTimeout(() => {
              expandElementHeight(standline, "100px");
            }, index * 200); // Delay each standline for a slight staggered effect
          });

          // After standline animations, animate home-bottom-showreel
          setTimeout(() => {
            fadeInElement(showreel, function () {
              expandElementHeight(showreel, "330px", function () {
                fadeInElement(bannerAction);
              });
            });
          }, 1000); // Wait for all standlines to complete
        });
      });
    });
  });
});
