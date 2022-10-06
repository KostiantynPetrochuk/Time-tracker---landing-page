'use strict';
//header fixed
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const headerIner = document.querySelector('.header-iner');
    const anchor = document.querySelector('.anchor');
    if (window.scrollY > 0) {
        header.classList.add('header-fixed');
        headerIner.classList.add('header-fixed');
        anchor.classList.add('_active');
    } else {
        header.classList.remove('header-fixed');
        headerIner.classList.remove('header-fixed');
        anchor.classList.remove('_active');
    }
});

//scroll animations
const animItems = document.querySelectorAll('._anim-items');
if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        animItems.forEach(e => {
            const animItem = e;
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                animItem.classList.remove('_active');
            }
        });
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    animOnScroll();
}

const checkbox = document.querySelector('.real-checkbox');
checkbox.addEventListener('change', () => {
    const price = document.querySelector('#price');
    const period = document.querySelector('#period');
    if (checkbox.checked) {
        price.innerHTML = 120;
        period.innerHTML = '/year'
    } else {
        price.innerHTML = 30;
        period.innerHTML = '/month';
    }
});


// Burger menu
const mobileMenu = document.querySelector('.burger-menu');
const mobileMenuButton = document.querySelector('.header-burger');
const page = document.querySelector('body');
const menuLinks = document.querySelectorAll('.burger-menu-item');

menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        mobileMenuButton.classList.remove('_active');
        mobileMenu.classList.remove('_active');
        page.classList.remove('_active');
    });
});

mobileMenuButton.addEventListener('click', () => {
    if (mobileMenuButton.classList.contains('_active')) {
        mobileMenuButton.classList.remove('_active');
        mobileMenu.classList.remove('_active');
        page.classList.remove('_active');
    } else {
        mobileMenuButton.classList.add('_active');
        mobileMenu.classList.add('_active');
        page.classList.add('_active');
    }
});



