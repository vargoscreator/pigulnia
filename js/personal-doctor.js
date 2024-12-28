document.addEventListener("DOMContentLoaded", () => {
    const moreButtons = document.querySelectorAll(".personal__history-more");
    moreButtons.forEach(button => {
        button.addEventListener("click", () => {
            const parentContent = button.closest(".personal__history-product-content");
            parentContent.classList.toggle("active");
        });
    });
});
