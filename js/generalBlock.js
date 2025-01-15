document.addEventListener("DOMContentLoaded", () => {
    const generalBlockInner = document.querySelector(".generalBlock__inner");
    const selectBlock = document.querySelector(".generalBlock__select");
    const contentBlock = document.querySelector(".generalBlock__content");
    
    const moveSelectBlock = () => {
        if(contentBlock){
            if (window.innerWidth < 768) {
                if (!contentBlock.contains(selectBlock)) {
                    contentBlock.insertBefore(selectBlock, contentBlock.firstChild);
                }
            } else {
                generalBlockInner.insertBefore(selectBlock, generalBlockInner.firstChild);
            }
        }
    };
    moveSelectBlock();

    window.addEventListener("resize", moveSelectBlock);
});
