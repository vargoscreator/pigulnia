let certificatesSwiper = new Swiper(".certificates__slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 35,
    allowTouchMove: true,
    navigation: {
        nextEl: ".certificates__slide-next",
        prevEl: ".certificates__slide-prev",
    },
});