function adjustBlogItem() {
    const blogItems = document.querySelectorAll('.blogBlock__item');
    const screenWidth = window.innerWidth;
    blogItems.forEach(item => {
        const descr = item.querySelector('.blogBlock__item-descr');
        const bottom = item.querySelector('.blogBlock__item-bottom');
        if (descr && bottom) {
            if (screenWidth < 768) {
                item.appendChild(descr);
                item.appendChild(bottom);
            } else {
                const content = item.querySelector('.blogBlock__item-content');
                if (content) {
                    content.insertBefore(descr, content.querySelector('.blogBlock__item-bottom'));
                    content.appendChild(bottom);
                }
            }
        }
    });

    const blogItemsContent = document.querySelectorAll('.blogBlock__content .blogBlock__item');
    blogItemsContent.forEach(item => {
        const descr = item.querySelector('.blogBlock__item-descr');
        const bottom = item.querySelector('.blogBlock__item-bottom');
        if (descr && bottom) {
            if (screenWidth < 1000) {
                item.appendChild(descr);
                item.appendChild(bottom);
            } else {
                const content = item.querySelector('.blogBlock__item-content');
                if (content) {
                    content.insertBefore(descr, content.querySelector('.blogBlock__item-bottom'));
                    content.appendChild(bottom);
                }
            }
        }
    });
}
adjustBlogItem()
window.addEventListener('resize', adjustBlogItem);
