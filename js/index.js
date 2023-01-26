new Swiper('.hero__slider',{
    loop: true,
    autoplay:{
        delay: 1500,
        stopOnLastSlide: false,
    },
    speed: 1500,
    keyboard: {
    enabled: true,
    onlyInViewport: false,
    },
});

const mainBtn = document.querySelectorAll('.btn');
const modalActiv = document.querySelector('.modal__overlay');
const modalCloce = document.querySelector('.modal__cloce');
    mainBtn.forEach(function(e){
        e.addEventListener('click',removeClass);
});
    modalCloce.addEventListener('click',removeClass );
    function removeClass(){
        modalActiv.classList.toggle('modal__overlay--visible');
};

const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
    burger.addEventListener('click',()=>{
        burger.classList.toggle('burger_active');
        navigation.classList.toggle('navigation_active');
    });


const apartsList =[{
    category: 'studio',
    id: 1,
    info: 'Студия на третьем этаже.',
    image: ['/image/photos/studios/lev3_stu1_01.jpg','/image/photos/studios/lev3_stu1_02.jpg','/image/photos/studios/lev3_stu1_03.jpg','/image/photos/studios/lev3_stu1_04.jpg','/image/photos/studios/lev3_stu1_05.jpg','/image/photos/studios/lev3_stu1_06.jpg']
    
},
{
    category: 'studio',
    id: 2,
    info: 'Студия на шестом этаже.',
    image: ['/image/photos/studios/lev6_stu2_01.jpg','/image/photos/studios/lev6_stu2_02.jpg','/image/photos/studios/lev6_stu2_03.jpg']
},
{
    category: 'terrace',
    id: 3,
    info: 'Cтудия на пятом этажею',
    image: ['/image/photos/terrace/lev5_ter_01.jpg','/image/photos/terrace/lev5_ter_02.jpg','/image/photos/terrace/lev5_ter_03.jpg','/image/photos/terrace/lev5_ter_04.jpg','/image/photos/terrace/lev5_ter_05.jpg']
},
{
    category: 'studio',
    id: 4,
    info: 'Студия на третьем этаже.',
    image: ['/image/photos/studios/lev3_stu25m_01.jpg','/image/photos/studios/lev3_stu25m_02.jpg','/image/photos/studios/lev3_stu25m_03.jpg','/image/photos/studios/lev3_stu25m_04.jpg','/image/photos/studios/lev3_stu25m_05.jpg','/image/photos/studios/lev3_stu25m_06.jpg','/image/photos/studios/lev3_stu25m_07.jpg','/image/photos/studios/lev3_stu25m_08.jpg']
},
{
    category: 'tworooms',
    id: 5,
    info: 'Двухкомнатные апартаменты на  третьем этаже. ',
    image: ['/image/photos/room2/lev3_room2_01.jpg','/image/photos/room2/lev3_room2_02.jpg','/image/photos/room2/lev3_room2_03.jpg','/image/photos/room2/lev3_room2_04.jpg','/image/photos/room2/lev3_room2_05.jpg']
},
{
    category: 'threerooms',
    id: 6,
    info: 'Трёхкомнатные апартаменты на пятом этаже.',
    image: ['/image/photos/room3/lev5_room3_01.jpg','/image/photos/room3/lev5_room3_02.jpg','/image/photos/room3/lev5_room3_03.jpg','/image/photos/room3/lev5_room3_04.jpg','/image/photos/room3/lev5_room3_05.jpg','/image/photos/room3/lev5_room3_06.jpg']
},
{
    category: 'threerooms',
    id: 7,
    info: 'Трёхкомнатные апартаменты на шестом этаже.',
    image: ['/image/photos/room3/lev6_room3_01.jpg','/image/photos/room3/lev6_room3_02.jpg','/image/photos/room3/lev6_room3_03.jpg','/image/photos/room3/lev6_room3_04.jpg','/image/photos/room3/lev6_room3_04.jpg','/image/photos/room3/lev6_room3_05.jpg','/image/photos/room3/lev6_room3_06.jpg','/image/photos/room3/lev6_room3_07.jpg','/image/photos/room3/lev6_room3_08.jpg','/image/photos/room3/lev6_room3_09.jpg','/image/photos/room3/lev6_room3_10.jpg']
},
{
    category: 'threerooms',
    id: 8,
    info: 'Трёхкомнатные апартаменты на втором этаже.',
    image: ['/image/photos/room3/lev2_room3_07.jpg','/image/photos/room3/lev2_room3_08.jpg','/image/photos/room3/lev2_room3_09.jpg']
}];



const body = document.body;
const showCard = document.querySelectorAll('.show__card');
const createCard = document.querySelector('.card__overflow');
const cardClose = document.querySelector('.card__close');
const cardMain = document.querySelector('.card__main');
const cardsTitle = document.querySelector('.cards__title');
const ulCards = document.querySelector('.ul__cards');
const cardInfo = document.querySelector('.card__info');
let infoText = '';
const liCards = `<li>
    <h3 class = "card__info">${infoText}</h3>
    <img src = "#">
</li>`;
ulCards.innerHTML = liCards;

function classToggle(){
    createCard.classList.toggle('card__overflow--visible');
}

apartsList.forEach(function(e){
    if(e.id == 1){
        infoText = e.info;
    }
    console.log(infoText)
});

showCard.forEach(function(e){
    e.addEventListener('click',()=>{
        if(e.dataset.target == 'studio'){
            cardsTitle.textContent = 'Студии...';
            classToggle();
        }else if(e.dataset.target == 'tworooms'){
            cardsTitle.textContent = '2-х комнатные апартаменты';
            classToggle();
        }else if(e.dataset.target == 'threeroom'){
            cardsTitle.textContent = '3-х комнатные апартаменты';
            classToggle();
        }else if(e.dataset.target == 'terrace'){
            cardsTitle.textContent = 'Апартаменты с террасой';
            classToggle();
        }
    })
})
cardClose .addEventListener('click', classToggle);



