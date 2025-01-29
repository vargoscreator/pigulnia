document.addEventListener("DOMContentLoaded", function () {
    let heroSwiper = new Swiper(".hero__slider", {
        loop: true,
        slidesPerView: 1,
        allowTouchMove: true,
        pagination: {
            el: ".hero__slider-pagination",
            clickable: true
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false, 
        },
    });

    

});