const accordion__list = document.querySelectorAll('.accordion-item');

accordion__list.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        item.classList.toggle('active');
        
        let content = item.querySelector('.accordion-item__content');
        let content_scroll_height = content.scrollHeight;
        if(item.classList.contains('active')) {
            content.style.height = content_scroll_height + 'px';
        } else {
            content.style.height = 0 + 'px';
        }
        
    });
})