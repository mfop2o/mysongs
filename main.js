let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Initialize Swiper for the home section
var homeSwiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Initialize Swiper for the coming soon section
var comingSwiper = new Swiper(".coming-container", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 5000, // Adjusted to a more reasonable time
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 2, // Corrected spelling from slidesPerview to slidesPerView
        },
        568: {
            slidesPerView: 3, // Corrected spelling from slidesPerview to slidesPerView
        },
        768: {
            slidesPerView: 4, // Corrected spelling from slidesPerview to slidesPerView
        },
        968: {
            slidesPerView: 5, // Corrected spelling from slidesPerview to slidesPerView
        },
    }
});















