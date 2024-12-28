document.addEventListener('DOMContentLoaded', () => {
    const personalButtons = document.querySelectorAll('.personal__select-btn');
    const leadersBlock = document.querySelector('.leaders');
    personalButtons.forEach(button => {
        button.addEventListener('click', () => {
            personalButtons.forEach(btn => btn.classList.remove('active'));    
            button.classList.add('active');
            
            const personalBlocks = document.querySelectorAll('.personal__selected');
            personalBlocks.forEach(block => block.classList.remove('active'));

            const targetId = button.dataset.personal;
            const targetBlock = document.getElementById(targetId);
            
            if (targetBlock) {
                targetBlock.classList.add('active');
            }

            if (targetId === 'personal-history' && leadersBlock) {
                leadersBlock.classList.remove('hide');
            } else if (leadersBlock) {
                leadersBlock.classList.add('hide');
            }
        });
    });
});
