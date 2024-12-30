document.addEventListener("DOMContentLoaded", () => {
    const moreButtons = document.querySelectorAll(".personal__history-more");
    moreButtons.forEach(button => {
        button.addEventListener("click", () => {
            const parentContent = button.closest(".personal__history-product-content");
            parentContent.classList.toggle("active");
        });
    });
});


document.querySelectorAll('.personal__promo-btn').forEach(button => {
    button.addEventListener('click', () => {
        const promoItem = button.closest('.personal__promo-item');
        const promoText = promoItem.querySelector('p').innerText;
        
        navigator.clipboard.writeText(promoText);
        
        const popup = document.querySelector('.copypopup');
        if (popup && !popup.classList.contains('active')) {
            popup.classList.add('active');
            setTimeout(() => {
                popup.classList.remove('active');
            }, 3000);
        }
    });
});
  