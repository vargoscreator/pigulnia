let certificatesSwiper;
certificatesSwiper = new Swiper('.certificates__slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 35,
    allowTouchMove: true,
    navigation: {
        nextEl: ".certificates__slide-next",
        prevEl: ".certificates__slide-prev",
    },
    on: {
        slideChange: updateActiveDownloadLink,
    },
});

function updateActiveDownloadLink() {
    if(certificatesSwiper){
        const activeIndex = certificatesSwiper.realIndex;
        const downloadLinks = document.querySelectorAll('.certificates__slide-download');
        downloadLinks.forEach(link => link.classList.remove('active'));
        if (downloadLinks[activeIndex]) {
            downloadLinks[activeIndex].classList.add('active');
        }
    }
}
updateActiveDownloadLink();