window.addEventListener('DOMContentLoaded', () => {
    //Tabs menu
const tabsItem = document.querySelectorAll('.dishes-button__item'),
tabsContent = document.querySelectorAll('.index-dishes'),
tabsList = document.querySelector('.dishes-button__list');

function tabsbContentHide() {
    tabsContent.forEach( item => { 
        item.classList.add('index-dishes__hide');
        item.classList.remove('index-dishes__show', 'index-dishes__fade');
    });
    
    tabsItem.forEach( tab => {
        tab.classList.remove('dishes-button__item-active');
    });
}
function tabsContentShow(i) {
    tabsContent[i].classList.add('index-dishes__show', 'index-dishes__fade');
    tabsContent[i].classList.remove('index-dishes__hide');
    tabsItem[i].classList.add('dishes-button__item-active');
}
tabsbContentHide();//запускаем скрытие
tabsContentShow(0);

tabsList.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('dishes-button__item')) {
    tabsItem.forEach( (item, i) => {
        if ( target == item ) {
            tabsbContentHide();
            tabsContentShow(i);
        }
    });
    }
})

//Скрипты связанные со скроллом страницы
const headerFixed = document.querySelector('.header-fixed'),
documentBody = document.querySelector('body'), 
currentScroll = document.querySelector('.current-scroll'),
scrollProgresTop = document.querySelector('.scroll-progress__top'),
allHeight = documentBody.scrollHeight,
clientScroll = documentBody.clientHeight; 

window.addEventListener('scroll', () => {
let actualScroll = Math.round(pageYOffset), //Текущий скролл страницы
heighDifference = allHeight - clientScroll, //Разность высоты всей страницы и открытого окна
percentHeight = actualScroll / heighDifference*100, //Переводим высоту пикселей в проценты
percentRounding = Math.round(percentHeight); //Округляем отображение процентов

if (actualScroll >= 600) {
headerFixed.classList.add('sticky-open');
}
else {
headerFixed.classList.remove('sticky-open');
}

if (percentRounding >= 80 ) {
scrollProgresTop.style.opacity = 1;
scrollProgresTop.style.left = "30px";        

}
else {
scrollProgresTop.style.opacity = 0;
scrollProgresTop.style.left = "-130px";
}


if (percentRounding >= 10 ) {
currentScroll.classList.remove('current-scroll__none');
}
else {
currentScroll.classList.add('current-scroll__none');
}

currentScroll.innerHTML = `
<svg viewBox="0 0 64 64" class="scroll-progress">
    <circle class="scroll-progress__background" r="25%" cx="50%" cy="50%"></circle>
    <circle class="scroll-progress__chart" r="25%" cx="50%" cy="50%" stroke-dasharray="${percentRounding} 100">
            
    </circle>
    <p class="scroll-progress__percent">
        <span>${percentRounding}</span>
    </p>
</svg>
`;
})




//Модальные окна
const showModalBtn = document.querySelectorAll('[data-modal]'),
showVideoModal = document.querySelectorAll('[data-modal-video]'),
closeModalBtn = document.querySelector('[data-close]'),
closeModalVideo = document.querySelector('.modal-video__close'),
dataVideoId = document.querySelectorAll('[data-video-id]'),
modal = document.querySelector('.modal'),
modalVideo = document.querySelector('.modal-video'),
modalVideoContent = document.querySelector('.modal-video__content');



//Модальное окно для формы
function modalShow () {
documentBody.style.overflow = 'hidden';
modal.classList.add('modal-show');
}

function modalClose () {
documentBody.style.overflow = 'inherit';
modal.classList.remove('modal-show');
}

showModalBtn.forEach(btn =>{
btn.addEventListener('click', modalShow);
});

modal.addEventListener('click', (e)=>{
if (e.target === modal) {
modalClose();
}
});
closeModalBtn.addEventListener('click', ()=>{
modalClose();
});

document.addEventListener('keydown', (e) => {
if (e.code === "Escape" && modal.classList.contains('modal-show')) {
modalClose();
}
});

//Модальное окно для видео
let dataValueAttribute = 0;
dataVideoId.forEach(item => {
item.onclick = function () {
modalVideoContent.innerHTML = `
<iframe width="800" height="404" autoplay src="https://www.youtube.com/embed/${item.dataset.videoId}" 
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   
`;
};
})


function modalVideoShow() {
documentBody.style.overflow = 'hidden';
modalVideo.classList.add('modal-video-show');
}

function modalVideoClose () {
documentBody.style.overflow = 'inherit';
modalVideo.classList.remove('modal-video-show');
}

showVideoModal.forEach(btn =>{
btn.addEventListener('click', modalVideoShow);
});

modalVideo.addEventListener('click', (e)=>{
if (e.target === modalVideo) {
modalVideoClose();
}
});
closeModalVideo.addEventListener('click', ()=>{
modalVideoClose();
});

document.addEventListener('keydown', (e) => {
if (e.code === "Escape" && modalVideo.classList.contains('modal-video-show')) {
modalVideoClose();
}
});
 });