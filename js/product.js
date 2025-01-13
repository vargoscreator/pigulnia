let productSwiper = new Swiper(".product__slider", {
    loop: true,
    slidesPerView: 1,
    allowTouchMove: true,
    pagination: {
        el: ".product__slider-pagination",
        clickable: true
    },
});

const ratingInputs = document.querySelectorAll('.reviewPopup__rating input[type="radio"]');
const ratingLabels = document.querySelectorAll('.reviewPopup__rating label');

function updateStars() {
    ratingInputs.forEach((input, index) => {
        const label = ratingLabels[index];
        const svg = label.querySelector('svg path');
        if (index <= Array.from(ratingInputs).findIndex(input => input.checked)) {
            svg.setAttribute('fill', '#FDC714');
        } else {
            svg.setAttribute('fill', 'rgba(31, 31, 31, 0.18)');
        }
    });
}

ratingLabels.forEach((label, index) => {
    label.addEventListener('mouseenter', () => {
        ratingInputs.forEach((input, i) => {
            const svg = label.querySelector('svg path');
            const labelSvg = ratingLabels[i].querySelector('svg path');
            if (i <= index) {
                labelSvg.setAttribute('fill', '#FDC714');
            } else {
                labelSvg.setAttribute('fill', 'rgba(31, 31, 31, 0.18)');
            }
        });
    });
    label.addEventListener('mouseleave', () => {
        updateStars();
    });
});
ratingInputs.forEach(input => {
    input.addEventListener('change', updateStars);
});
updateStars();


const imageInput = document.getElementById('reviewPopup-image');
const imagePreviewContainer = document.querySelector('.reviewPopup__imagePreview');
const imagePreview = document.getElementById('imagePreview');
const deleteButton = document.querySelector('.reviewPopup__imagePreview-delete');
imageInput.addEventListener('change', function() {
    const file = imageInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview.src = e.target.result;
            imagePreviewContainer.style.display = 'flex';
        };
        reader.readAsDataURL(file);
    } else {
        imagePreviewContainer.style.display = 'none';
    }
});
deleteButton.addEventListener('click', function() {
    imageInput.value = '';
    imagePreview.src = '';
    imagePreviewContainer.style.display = 'none';
});

const reviewProductAdd = document.querySelector('.reviewProduct__add');
const reviewPopup = document.querySelector('.reviewPopup');
const reviewPopupClose = document.querySelector('.reviewPopup__close');
const reviewPopupInner = document.querySelector('.reviewPopup__inner');
const activateReviewProduct = () => {
    reviewPopup.classList.add('active');
};
const deactivateReviewProduct = () => {
    reviewPopup.classList.remove('active');
};
reviewProductAdd.addEventListener('click', (e) => {
    e.stopPropagation();
    activateReviewProduct();
});
reviewPopupClose.addEventListener('click', (e) => {
    e.stopPropagation();
    deactivateReviewProduct();
});

const popupFast = document.querySelector('.popupFast');
const popupFastInner = document.querySelector('.popupFast__inner');
const openPopupFastBtn = document.querySelector('.popupFast-open');
const closePopupFastBtn = document.querySelector('.popupFast__close');
openPopupFastBtn.addEventListener('click', () => {
    popupFast.classList.add('active');
});
const closePopupFast = () => {
    popupFast.classList.remove('active');
};
closePopupFastBtn.addEventListener('click', closePopupFast);
document.addEventListener('click', (e) => {
    if (!reviewPopupInner.contains(e.target) && !reviewPopupClose.contains(e.target)) {
        deactivateReviewProduct();
    }
    if (!popupFastInner.contains(e.target) && !openPopupFastBtn.contains(e.target)) {
        closePopupFast();
    }
});

const productAboutButtons = document.querySelectorAll('.productAbout__select-btn');

productAboutButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        if (button.href && button.href.includes('#reviewProduct')) {
            return;
        }
        productAboutButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active'); 
        const targetId = button.getAttribute('data-productAbout');
        const contentBlocks = document.querySelectorAll('.productAbout__content');
        contentBlocks.forEach(block => {
            block.classList.remove('active');
        });
        const targetBlock = document.getElementById(targetId);
        if (targetBlock) {
            targetBlock.classList.add('active');
        }
    });
});


const likeButtons = document.querySelectorAll('.reviewProduct__item-like');
const dislikeButtons = document.querySelectorAll('.reviewProduct__item-dislike');
function handleAnimation(button, animationClass) {
    button.addEventListener('mouseenter', () => {
        button.classList.add(animationClass); 
    });
    button.addEventListener('animationend', () => {
        button.classList.remove(animationClass);
    });
}
likeButtons.forEach(button => handleAnimation(button, 'like-animation-active'));
dislikeButtons.forEach(button => handleAnimation(button, 'dislike-animation-active'));