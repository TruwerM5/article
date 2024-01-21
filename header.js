let navbar_nested_links = document.querySelectorAll('.navbar__link_nested');


navbar_nested_links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        let submenu = e.target.nextElementSibling;

        link.classList.toggle('is-open');

        if (link.classList.contains('is-open')) {
            
            let scrollHeight = submenu.scrollHeight;
            submenu.style.height = scrollHeight+'px';
            return;
        }

        submenu.style.height = 0+'px';
            
        
    })
});


let navbar_nav = document.querySelectorAll('[data-navbar]');
let navbar__items = document.querySelectorAll('.navbar__item:not(.navbar__item_nested)');
const navbar__toggler = document.querySelector('.navbar__toggler');

navbar__toggler.addEventListener('click', (e) => {
    e.preventDefault();
    navbar_nav.forEach(nav => {
        nav.classList.toggle('active');

        if (nav.classList.contains('active')) {
            document.body.style.overflowY = 'hidden';
            return;
        }
        document.body.style.overflowY = 'scroll';
    })
});

navbar__items.forEach(item => {
    item.addEventListener('click', e => {
        navbar_nav.forEach(nav => {
            nav.classList.remove('active');
        });
    });
});