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

// Функция для обновления класса active
function updateActiveDownloadLink() {
    if(certificatesSwiper){
        const activeIndex = certificatesSwiper.realIndex; // Получаем индекс текущего слайда
        const downloadLinks = document.querySelectorAll('.certificates__slide-download');
    
        // Убираем класс active у всех ссылок
        downloadLinks.forEach(link => link.classList.remove('active'));
    
        // Добавляем класс active к соответствующей ссылке
        if (downloadLinks[activeIndex]) {
            downloadLinks[activeIndex].classList.add('active');
        }
    }
}

// Первоначальное обновление
updateActiveDownloadLink();