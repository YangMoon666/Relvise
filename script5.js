window.onload = function () {
    document.querySelector('.load').classList.add('_un_active');
}
// Меню
// const iconMenu = document.querySelector('.header_burger');
const menuBody = document.querySelector('.menu');
// if (iconMenu) {
//     iconMenu.addEventListener('click', function (e) {
//         document.body.classList.toggle('_lock');
//         iconMenu.classList.toggle('_active');
//         menuBody.classList.toggle('_active');
//     });
// }
// Навигация
const menuLinks = document.querySelectorAll('.navigator-system[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
            
            // if (iconMenu.classList.contains('_active')) {
            //     document.body.classList.remove('_lock');
            //     iconMenu.classList.remove('_active');
            //     menuBody.classList.remove('_active');
            // }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            });
            e.preventDefault();
        }
    }
}

const animItems = document.querySelectorAll('.services__item');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_look');
            } else {
                animItem.classList.remove('_look');
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    animOnScroll();
}


const animItems2 = document.querySelectorAll('.contant-block-block');

if (animItems2.length > 0) {
    window.addEventListener('scroll', animOnScroll2);
    function animOnScroll2() {
        for (let index = 0; index < animItems2.length; index++) {
            const animItem2 = animItems2[index];
            const animItemHeight2 = animItem2.offsetHeight;
            const animItemOffset2 = offset2(animItem2).top;
            const animStart2 = 4;

            let animItemPoint2 = window.innerHeight - animItemHeight2 / animStart2;

            if (animItemHeight2 > window.innerHeight) {
                animItemPoint2 = window.innerHeight - window.innerHeight / animStart2;
            }
            if ((pageYOffset > animItemOffset2 - animItemPoint2) && pageYOffset < (animItemOffset2 + animItemHeight2)) {
                animItem2.classList.add('_look');
            } else {
                animItem2.classList.remove('_look');
            }
        }
    }
    function offset2(el2) {
        const rect2 = el2.getBoundingClientRect(),
            scrollLeft2 = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop2 = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect2.top + scrollTop2, left: rect2.left + scrollLeft2 }
    }
    animOnScroll2();
}

const animItems3 = document.querySelectorAll('.body-flex-contant-block-text-2_box');

if (animItems3.length > 0) {
    window.addEventListener('scroll', animOnScroll3);
    function animOnScroll3() {
        for (let index = 0; index < animItems3.length; index++) {
            const animItem3 = animItems3[index];
            const animItemHeight3 = animItem3.offsetHeight;
            const animItemOffset3 = offset3(animItem3).top;
            const animStart3 = 4;

            let animItemPoint3 = window.innerHeight - animItemHeight3 / animStart3;

            if (animItemHeight3 > window.innerHeight) {
                animItemPoint3 = window.innerHeight - window.innerHeight / animStart3;
            }
            if ((pageYOffset > animItemOffset3 - animItemPoint3) && pageYOffset < (animItemOffset3 + animItemHeight3)) {
                animItem3.classList.add('_look');
            } else {
                animItem3.classList.remove('_look');
            }
        }
    }
    function offset3(el3) {
        const rect3 = el3.getBoundingClientRect(),
            scrollLeft3 = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop3 = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect3.top + scrollTop3, left: rect3.left + scrollLeft3 }
    }
    animOnScroll3();
}

const animItems4 = document.querySelectorAll('.body-flex-contant-block-text-2_box');

if (animItems4.length > 0) {
    window.addEventListener('scroll', animOnScroll4);
    function animOnScroll4() {
        for (let index = 0; index < animItems4.length; index++) {
            const animItem4 = animItems4[index];
            const animItemHeight4 = animItem4.offsetHeight;
            const animItemOffset4 = offset4(animItem4).top;
            const animStart4 = 4;

            let animItemPoint4 = window.innerHeight - animItemHeight4 / animStart4;

            if (animItemHeight4 > window.innerHeight) {
                animItemPoint4 = window.innerHeight - window.innerHeight / animStart4;
            }
            if ((pageYOffset > animItemOffset4 - animItemPoint4) && pageYOffset < (animItemOffset4 + animItemHeight4)) {
                animItem4.classList.add('_look');
            } else {
                animItem4.classList.remove('_look');
            }
        }
    }
    function offset4(el4) {
        const rect4 = el4.getBoundingClientRect(),
            scrollLeft4 = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop4 = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect4.top + scrollTop4, left: rect4.left + scrollLeft4 }
    }
    animOnScroll4();
}


const animItems5 = document.querySelectorAll('.contakts-body-item_box');

if (animItems5.length > 0) {
    window.addEventListener('scroll', animOnScroll5);
    function animOnScroll5() {
        for (let index = 0; index < animItems5.length; index++) {
            const animItem5 = animItems5[index];
            const animItemHeight5 = animItem5.offsetHeight;
            const animItemOffset5 = offset5(animItem5).top;
            const animStart5 = 4;

            let animItemPoint5 = window.innerHeight - animItemHeight5 / animStart5;

            if (animItemHeight5 > window.innerHeight) {
                animItemPoint5 = window.innerHeight - window.innerHeight / animStart5;
            }
            if ((pageYOffset > animItemOffset5 - animItemPoint5) && pageYOffset < (animItemOffset5 + animItemHeight5)) {
                animItem5.classList.add('_look');
            } else {
                animItem5.classList.remove('_look');
            }
        }
    }
    function offset5(el5) {
        const rect5 = el5.getBoundingClientRect(),
            scrollLeft5 = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop5 = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect5.top + scrollTop5, left: rect5.left + scrollLeft5 }
    }
    animOnScroll5();
}


"use strict"
// Паралакс
const parallax = document.querySelector('.page__main-block');
if (parallax){
    const img = document.querySelector('.page__img_parallax_item_img');

    const forImg = 40;

    const speed = 0.05;

    let positionX = 0, positionY = 0;
    let coordXprocent = 0, coordYprocent = 0;

    function setMouseParallaxStyle() {
        const distX = coordXprocent - positionX;
        const distY = coordYprocent - positionY;

        positionX = positionX + (distX * speed);
        positionY = positionY + (distY * speed);

        img.style.cssText = `transform: translate(${positionX / forImg}%,${positionY / forImg}%);`;

        requestAnimationFrame(setMouseParallaxStyle);
    }
    setMouseParallaxStyle();

    parallax.addEventListener("mousemove", function (e) {
        const parallaxWidth = parallax.offsetWidth;
        const parallaxHeight = parallax.offsetHeight;

        const coordX = e.pageX - parallaxWidth / 2;
        const coordY = e.pageY - parallaxHeight / 2;

        coordXprocent = coordX / parallaxWidth * 100;
        coordYprocent = coordY / parallaxHeight * 100;
    });
}



