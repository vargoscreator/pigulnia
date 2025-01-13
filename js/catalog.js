const slider = document.querySelector('.price-slider');
const priceRange = document.getElementById('price-range');
function updateSlider() {
    const value = (slider.value - slider.min) / (slider.max - slider.min) * 100; 
    slider.style.background = `linear-gradient(to right, #245435 ${value}%, transparent ${value}%)`;
    priceRange.textContent = `${slider.value} - ${slider.max}`;
}
updateSlider();
slider.addEventListener('input', updateSlider);

document.querySelectorAll('.catalog__filter-top').forEach(top => {
    top.addEventListener('click', () => {
        const filterBox = top.closest('.catalog__filter-box');
        filterBox.classList.toggle('active');
    });
});

document.querySelectorAll('.catalog__filter-open, .catalog__filter-close, .catalog__filter-bg').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.catalog__filter').classList.toggle('active');
        document.querySelector('.catalog__filter-bg').classList.toggle('active');
      document.querySelector('.body').classList.toggle('no-scroll');
    });
});
  