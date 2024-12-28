document.querySelectorAll('.order__select-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.order__select-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        document.querySelectorAll('.order__content').forEach(content => content.classList.remove('active'));
        const targetId = button.getAttribute('data-order-type');
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
            targetContent.classList.add('active');
        }
    });
});