'use strict';

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const headerIner = document.querySelector('.header-iner');
    if (window.scrollY > 0) {
        header.classList.add('header-fixed');
        headerIner.classList.add('header-fixed');
    } else {
        header.classList.remove('header-fixed');
        headerIner.classList.remove('header-fixed');
    }
});

//-------------------------
const animItems = document.querySelectorAll('._anim-items');
console.log(animItems);
if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        console.log('scroll');
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




