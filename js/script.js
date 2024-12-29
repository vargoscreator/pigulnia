moveHeaderBlock()
window.addEventListener('resize', moveHeaderBlock);
function moveHeaderBlock() {
  const catalogBlock = document.querySelector('.header__catalog');
  const menuBlock = document.querySelector('.header__menu');
  const innerBlock = document.querySelector('.header__inner');
  const telBlock = document.querySelector('.header__end-tel');
  const endBlock = document.querySelector('.header__end');

  if (window.innerWidth < 1000) {
    if (catalogBlock.parentElement !== menuBlock) {
      menuBlock.appendChild(catalogBlock);
    }
  } else {
    if (catalogBlock.parentElement !== innerBlock) {
      innerBlock.appendChild(catalogBlock);
    }
  }

  if (window.innerWidth < 768) {
    if (telBlock.parentElement !== menuBlock) {
      menuBlock.appendChild(telBlock);
    }
  } else {
    if (telBlock.parentElement !== endBlock) {
      endBlock.appendChild(telBlock);
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
    if (typeof Swiper !== 'undefined' && Swiper !== null) {
        let leadersSwiper = new Swiper(".leaders__slider", {
            loop: false,
            spaceBetween: 10,
            slidesPerView: 2,
            allowTouchMove: true,
            breakpoints: {
                768: {
                    spaceBetween: 10,
                    slidesPerView: 3,
                },
                1000: {
                    spaceBetween: 15,
                    slidesPerView: 4,
                },
                1280: {
                    spaceBetween: 17,
                    slidesPerView: 5,
                },
            },
            pagination: {
                el: ".leaders__slider-pagination",
                clickable: true
            },
        });
    
        let basketSwiper = new Swiper(".basket__recommendation", {
            loop: false,
            spaceBetween: 15,
            slidesPerView: 1,
            allowTouchMove: true,
            navigation: {
                nextEl: ".basket__recommendation-next",
                prevEl: ".basket__recommendation-prev",
            },
        });
    
        let reviewsSwiper = new Swiper(".reviews__slider", {
            loop: false,
            spaceBetween: 8,
            slidesPerView: 1,
            allowTouchMove: true,
            breakpoints: {
                768: {
                    spaceBetween: 28,
                    slidesPerView: 2,
                },
            },
            pagination: {
                el: ".reviews__slider-pagination",
                clickable: true
            },
        });
    
        let videoblogsSwiper = new Swiper(".videoblogs__slider", {
            loop: false,
            spaceBetween: 10,
            slidesPerView: 1,
            allowTouchMove: true,
            breakpoints: {
                768: {
                    spaceBetween: 15,
                },
                1000: {
                    spaceBetween: 20,
                },
                1280: {
                    spaceBetween: 29,
                },
            },
        });
    
        const blogsSliderElement = document.querySelector(".blogsSlider__slider");
        const hasArticleClass = blogsSliderElement?.classList.contains("blogsSlider__slider-article");
        const slidesPerViewFor1280 = hasArticleClass ? 3 : 4;

        let blogsSliderSwiper = new Swiper(".blogsSlider__slider", {
            loop: false,
            spaceBetween: 8,
            slidesPerView: 1,
            allowTouchMove: true,
            pagination: {
                el: ".blogsSlider__slider-pagination",
                clickable: true
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1000: {
                    slidesPerView: 3,
                },
                1280: {
                    slidesPerView: slidesPerViewFor1280,
                },
            },
        });
    }
});
const body = document.querySelector('.body');
const userBtn = document.querySelector('.header__user-btn');
const endUserBlock = document.querySelector('.header__end-user');
userBtn.addEventListener('click', function (event) {
    endUserBlock.classList.toggle('active');
});
document.addEventListener('click', function (event) {
    if (!endUserBlock.contains(event.target) && !userBtn.contains(event.target)) {
        endUserBlock.classList.remove('active');
    }
});

const catalogBtn = document.querySelector('.header__catalog-btn');
const catalogBlock = document.querySelector('.header__catalog');
catalogBtn.addEventListener('click', function (event) {
    catalogBlock.classList.toggle('active');
});
document.addEventListener('click', function (event) {
    if (!catalogBlock.contains(event.target) && !catalogBtn.contains(event.target)) {
        catalogBlock.classList.remove('active');
    }
});

function checkScroll() {
    const header = document.querySelector('header');
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
}
checkScroll();
window.addEventListener('resize', checkScroll);
window.addEventListener('scroll', checkScroll);

const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
headerBurger.addEventListener('click', function() {
    headerBurger.classList.toggle('active');
    headerMenu.classList.toggle('active');
});

const openButtons = document.querySelectorAll('.header__user-open');
const popup = document.querySelector('.userpopup');
const contents = document.querySelectorAll('.userpopup__content');
const closeButton = document.querySelector('.userpopup__close'); 
const innerPopup = document.querySelector('.userpopup__inner');
openButtons.forEach(button => {
    button.addEventListener('click', () => {
        endUserBlock.classList.toggle('active');
        const targetId = button.id;
        popup.classList.add('active');
        contents.forEach(content => content.classList.remove('active'));
        if (targetId === 'login-client') {
            document.querySelector('.userpopup__content:first-of-type').classList.add('active');
        } else if (targetId === 'login-doctor') {
            document.querySelector('.userpopup__content:last-of-type').classList.add('active');
        }
    });
});
closeButton.addEventListener('click', () => {
    popup.classList.remove('active');
    setTimeout(() => {
        document.querySelectorAll('.userpopup__form-block').forEach(block => {
            block.classList.remove('active');
        });
        document.querySelectorAll('.userpopup__form-block:first-of-type').forEach(block => {
            block.classList.add('active');
        });
        contents.forEach(content => content.classList.remove('active'));
    }, 200);
});
document.addEventListener('click', (e) => {
    if (!innerPopup.contains(e.target) && !endUserBlock.contains(event.target)) {
        popup.classList.remove('active');
        setTimeout(() => {
            document.querySelectorAll('.userpopup__form-block').forEach(block => {
                block.classList.remove('active');
            });
            document.querySelectorAll('.userpopup__form-block:first-of-type').forEach(block => {
                block.classList.add('active');
            });
            contents.forEach(content => content.classList.remove('active'));
        }, 200);
    }
});
document.querySelectorAll('.userpopup__btn[type="button"]').forEach(button => {
    button.addEventListener('click', () => {
        const currentBlock = button.closest('.userpopup__form-block');
        const nextBlock = currentBlock.nextElementSibling;
        if (currentBlock.querySelector('input[name="tel"]').value.trim() !== '' && nextBlock && nextBlock.classList.contains('userpopup__form-block')) {
            currentBlock.classList.remove('active');
            nextBlock.classList.add('active');
        }
    });
});

const basketButton = document.getElementById('basket-btn');
const basket = document.querySelector('.basket');
const basketInner = document.querySelector('.basket__inner');
const basketClose = document.querySelectorAll('.basket__close, .basket__close-btn');
const openBasket = () => {
  basket.classList.add('active');
  body.classList.add('no-scroll')
};
const closeBasket = () => {
  basket.classList.remove('active');
  body.classList.remove('no-scroll')
};
basketClose.forEach(element => {
    element.addEventListener('click', closeBasket);
});
basketButton.addEventListener('click', openBasket);
document.addEventListener('click', (event) => {
    if (basket.contains(event.target) && !basketInner.contains(event.target)) {
        closeBasket();
    }
});

const faqItems = document.querySelectorAll(".faq__item");
faqItems.forEach((item) => {
    const itemName = item.querySelector("h3");
    itemName.addEventListener("click", () => {
        if (item.classList.contains("active")) {
            item.classList.remove("active");
        } else {
            faqItems.forEach((el) => el.classList.remove("active"));
            item.classList.add("active");
        }
    });
});