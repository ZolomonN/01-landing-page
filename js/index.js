
/* Слайдеры */
const mainSlider = new Swiper('.main__slider', {
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 5000,
    },
    speed: 1000,
    effect: 'fade',
});

const reviewSlider = new Swiper('.reviews__slider', {
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 1000,
    },
    speed: 5000,
    breakpoints: {
        1024: {
            slidesPerView: 2,
        },
    },
});

/* Липкое меню, скролл к секциям */

const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (pageYOffset !== 0) {
        header.classList.add('sticky');
    } else if (pageYOffset === 0) {
        header.classList.remove('sticky');
    };
})

const about = document.querySelector('.about');
const products = document.querySelector('.products');
const reviews = document.querySelector('.reviews');
const feedback = document.querySelector('.feedback');

const toSroll = (event, top) => {
    event.preventDefault();
    scrollTo({
        top,
        behavior: 'smooth'
    });
}
document.querySelectorAll('.nav__item a').forEach(navLink => {
    let currentHref = navLink.getAttribute('href')
    switch(currentHref) {
        case '#home':
            navLink.addEventListener('click', (e) => {
                toSroll(e, 0);
            });
            break;
        case '#aboutUs':
            navLink.addEventListener('click', (e) => {
                toSroll(e, about.offsetTop);
            });
            break;
        case '#products':
            navLink.addEventListener('click', (e) => {
                toSroll(e, products.offsetTop);
            });
            break;
        case '#reviews':
            navLink.addEventListener('click', (e) => {
                toSroll(e, reviews.offsetTop);
            });
            break;
        case '#feedback':
            navLink.addEventListener('click', (e) => {
                toSroll(e, feedback.offsetTop);
            });
            break;
    }
})

const clearColor = () => {
    document.querySelectorAll('.nav__item').forEach(item => {
        if (item.classList.contains('main-link--equator')) {
            item.classList.remove('main-link--equator')
        };
    });
};
window.addEventListener('scroll', () => {
    clearColor();
    document.querySelector('.feedback__descr').style.color = 'rgba(0, 0, 0, 0.05)'
    if (pageYOffset < about.offsetTop && pageYOffset >= 0) {
        document.querySelector('.home-link').parentElement.classList.add('main-link--equator');
    } else if (pageYOffset < products.offsetTop && pageYOffset >= about.offsetTop) {
        document.querySelector('.aboutUs-link').parentElement.classList.add('main-link--equator');
    } else if (pageYOffset < reviews.offsetTop && pageYOffset >= products.offsetTop) {
        document.querySelector('.products-link').parentElement.classList.add('main-link--equator');
    } else if (pageYOffset < feedback.offsetTop && pageYOffset >= reviews.offsetTop) {
        document.querySelector('.reviews-link').parentElement.classList.add('main-link--equator');
    } else if (pageYOffset >= feedback.offsetTop) {
        document.querySelector('.feedback__descr').style.color = '#e5b463';
        document.querySelector('.feedback-link').parentElement.classList.add('main-link--equator');
    };
})

document.querySelector('.header__contacts').addEventListener('mouseover', (e) => {
    e.preventDefault();
    e.currentTarget.textContent = '+7-905-313-61-32';
});
document.querySelector('.header__contacts').addEventListener('mouseout', (e) => {
    e.preventDefault();
    e.currentTarget.textContent = 'Контакты';
});

document.querySelectorAll('.productInSlide__btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        toSroll(e, feedback.offsetTop);
    });
})


document.querySelector('.fixedBtn').addEventListener('click', (e) => {
    toSroll(e, 0);
});

document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('nav--active');
})
