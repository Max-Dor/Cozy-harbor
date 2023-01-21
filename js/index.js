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




const apartments = [];

const firstStudioImg = ['/image/photos/studios/lev3_stu1_01.jpg','/image/photos/studios/lev3_stu1_02.jpg','/image/photos/studios/lev3_stu1_03.jpg','/image/photos/studios/lev3_stu1_04.jpg','/image/photos/studios/lev3_stu1_05.jpg','/image/photos/studios/lev3_stu1_06.jpg'],
    secondStudiosImg = ['/image/photos/studios/lev6_stu2_01.jpg','/image/photos/studios/lev6_stu2_02.jpg','/image/photos/studios/lev6_stu2_03.jpg'],
    studioTerraceImg = ['/image/photos/terrace/lev5_ter_01.jpg','/image/photos/terrace/lev5_ter_02.jpg','/image/photos/terrace/lev5_ter_03.jpg','/image/photos/terrace/lev5_ter_04.jpg','/image/photos/terrace/lev5_ter_05.jpg'],
    studio25Img = ['/image/photos/studios/lev3_stu25m_01.jpg','/image/photos/studios/lev3_stu25m_02.jpg','/image/photos/studios/lev3_stu25m_03.jpg','/image/photos/studios/lev3_stu25m_04.jpg','/image/photos/studios/lev3_stu25m_05.jpg','/image/photos/studios/lev3_stu25m_06.jpg','/image/photos/studios/lev3_stu25m_07.jpg','/image/photos/studios/lev3_stu25m_08.jpg'],
    twoRoomsImg = ['/image/photos/room2/lev3_room2_01.jpg','/image/photos/room2/lev3_room2_02.jpg','/image/photos/room2/lev3_room2_03.jpg','/image/photos/room2/lev3_room2_04.jpg','/image/photos/room2/lev3_room2_05.jpg'],
    firstThreeRoomImg = ['/image/photos/room3/lev5_room3_01.jpg','/image/photos/room3/lev5_room3_02.jpg','/image/photos/room3/lev5_room3_03.jpg','/image/photos/room3/lev5_room3_04.jpg','/image/photos/room3/lev5_room3_05.jpg','/image/photos/room3/lev5_room3_06.jpg'],
    secondThreeRoomImg = ['/image/photos/room3/lev6_room3_01.jpg','/image/photos/room3/lev6_room3_02.jpg','/image/photos/room3/lev6_room3_03.jpg','/image/photos/room3/lev6_room3_04.jpg','/image/photos/room3/lev6_room3_04.jpg','/image/photos/room3/lev6_room3_05.jpg','/image/photos/room3/lev6_room3_06.jpg','/image/photos/room3/lev6_room3_07.jpg','/image/photos/room3/lev6_room3_08.jpg','/image/photos/room3/lev6_room3_09.jpg','/image/photos/room3/lev6_room3_10.jpg'],
    thirdThreeRoomImg = ['/image/photos/room3/lev2_room3_07.jpg','/image/photos/room3/lev2_room3_08.jpg','/image/photos/room3/lev2_room3_09.jpg'];


const firstStudio = {
    id: 1,
    title: 'Студия на третьем этаже.',
    image: firstStudioImg
    
};
const secondStudio = {
    id: 2,
    title: 'Студия на шестом этаже.',
    image: secondStudiosImg
};
const studioTerrace = {
    id: 3,
    title: 'Cтудия на пятом этажею',
    image: studioTerraceImg
};
const studio25 = {
    id: 4,
    title: 'Студия на  третьем этаже.',
    image: studio25Img
};
const twoRooms = {
    id: 5,
    title: 'Двухкомнатные апартаменты на  третьем этаже. '
};
const firstThreeRoom = {
    id: 6,
    title: 'Трёхкомнатные апартаменты на пятом этаже.',
    image: firstThreeRoomImg
};
const secondThreeRoom = {
    id: 7,
    title: 'Трёхкомнатные апартаменты на шестом этаже.',
    image: secondThreeRoomImg
};
const thirdThreeRoom = {
    id: 8,
    title: 'Трёхкомнатные апартаменты на шестом этаже.',
    image: thirdThreeRoomImg 
};



const body = document.body;
const div = document.createElement('div');
    div.classList.add('cardholder');
    body.appendChild(div);
const cardsTitle = document.createElement('h2');
const cardInfo = document.createElement('h3');
const ulList = document.createElement('ul');
   // cardsTitle.textContent = id.title;
    cardsTitle.classList.add('cards__title');
    cardsTitle.textContent = "Название  блока с квартирами";
    cardInfo.classList.add('card__info');
    cardInfo.textContent = "Информация о квартире";
    ulList.classList.add('card__list');
    div.appendChild(cardsTitle);
    div.appendChild(cardInfo);
    div.appendChild(ulList);

const listGenerator = `
    <li class="card__item">
        <img src="#">
    </li>
`;

ulList.insertAdjacentHTML('beforeEnd' ,listGenerator);

const showCards = document.querySelectorAll('.show__card');
    showCards.forEach(function(e){
        e.addEventListener('click',()=>{
            if(e.dataset.target == 'studio'){
                console.log('Прожато  studio')
            }else if(e.dataset.target == 'tworooms'){
                console.log('Прожато tworooms')
            }else if(e.dataset.target == 'threeroom'){
                console.log('Прожато threeroom')
            }else if(e.dataset.target == 'terrace'){
                console.log('Прожато terrace')
            }
    })
})

// Комичу с ноута

