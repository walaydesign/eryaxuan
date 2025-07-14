AOS.init({ startEvent: "load" });
window.addEventListener("load", AOS.refresh);

$(".header_item").click(function () {
  let target = $(this).data("target");
  var top = $(target).offset().top - 70;
  $("html, body").animate({ scrollTop: top }, parseInt(300));
});

$(".btn-top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 300);
});

var swiperSpaceMain = new Swiper(".space_main_swiper", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".space_func_next",
    prevEl: ".space_func_prev",
  },
  speed: 800,
  allowTouchMove: false,
  pagination: {
    el: ".space_func_pagination",
    clickable: true,
  },
});

var swiperSpaceNaMe = new Swiper(".space_name_swiper", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".space_func_next",
    prevEl: ".space_func_prev",
  },
  speed: 800,
  allowTouchMove: false,
  pagination: {
    el: ".space_func_pagination",
    clickable: true,
  },
});

var swiperPlan = new Swiper(".plan_swiper", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".plan_next",
    prevEl: ".plan_prev",
  },
  speed: 800,
  // allowTouchMove: false,
  pagination: {
    el: ".plan_swiper_pagination",
    clickable: true,
  },
});