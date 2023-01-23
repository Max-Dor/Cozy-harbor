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


apartsList.forEach(apart=>{
    if(apart.category == 'studio'){
        console.log(apart.info)
    }
})

const body = document.body;

// function createCard(title){
//     const overflow = document.createElement('div');
//     const span = document.createElement('span');
//     const cardTitle = document.createElement('h2');
//         overflow.classList.add('card__overflow');
//         cardTitle.textContent = title;
//         span.classList.add('close__card');
//         body.appendChild(overflow);
//         overflow.appendChild(span);
//         overflow.appendChild(cardTitle);
// }
// createCard('задница');

// function apartCard(info){
//     const roomCard = document.createElement('div');
//     const  roomInfo = document.createElement('h3');
//         roomInfo.textContent = info
//         roomCard.classList.add('room__card');
//         roomInfo.classList.add('room__info');
//         roomCard.appendChild(roomInfo);
// }
// apartCard(apartsList.info);

// function roomImageCreator(image){
//     const ulList = document.createElement('ul');
//     const imgList = document.createElement('li');
//     const roomImg = document.createElement('img');
//         roomImg.src = image;
//         ulList.classList.add('ul__list');
//         imgList.classList.add('img__list');
//         roomImg.classList.add('room__img');

// }
// roomImageCreator(apartsList.image);



function createCard(title,info){
    const overflow = document.createElement('section');
    const mainCard = document.createElement('div');
    const span = document.createElement('span');
    const cardTitle = document.createElement('h2');
        overflow.classList.add('overflow');
        mainCard.classList.add('main__card');
        cardTitle.textContent = title;
        span.classList.add('close__card');
        body.appendChild(overflow);
        overflow.appendChild(mainCard)
        mainCard.appendChild(span);
        mainCard.appendChild(cardTitle);
        function apartCard(info){
            const roomCard = document.createElement('div');
            const  roomInfo = document.createElement('h3');
                roomInfo.textContent = info;
                roomCard.classList.add('room__card');
                roomInfo.classList.add('room__info');
                roomCard.appendChild(roomInfo);
                mainCard.appendChild(roomCard);
                function roomImageCreator(image){
                    const ulList = document.createElement('ul');
                    const imgList = document.createElement('li');
                    const roomImg = document.createElement('img');
                        roomImg.src = image;
                        ulList.classList.add('ul__list');
                        imgList.classList.add('img__list');
                        roomImg.classList.add('room__img');
                        roomCard.appendChild(ulList);
                        ulList.appendChild(imgList);
                        imgList.appendChild(roomImg);
                
                }
                roomImageCreator(apartsList.image);
        }
        apartCard(apartsList.info);
}
createCard('Название выбраного блока',apartsList.info);












// const showCards = document.querySelectorAll('.show__card');
//     showCards.forEach(function(e){
//         e.addEventListener('click',()=>{
//             if(e.dataset.target == 'studio'){
//                 title = 'Студии...'
//             }else if(e.dataset.target == 'tworooms'){
//                 createHtml('2-х комнатные апартаменты...','Подробный интерьер квартиры ...')
//             }else if(e.dataset.target == 'threeroom'){
//                 createHtml('3-х комнатные апартаменты...','Внутренний интерьер квартир...')
//             }else if(e.dataset.target == 'terrace'){
//                 createHtml('Апартаменты с террасой...', 'Интерьер с великолепным видом на море...')
//             }
//     })
// })

// const overflow = document.createElement('div');
//     overflow.classList.add('card__overflow');

// function generateCards(title,info,image){
//     return`
//     <div class="cardholder"> 
//         <span class="close__card"></span>
//         <h2 class="cards__title">${title}</h2>
//             <div class="card__list">
//                 <h3 class="card__info">${info}</h3>
//                 <ul class="ul__list">
//                     <li class="img__list">
//                         <img class="card__img" src="${image}">
//                 </ul>
//             </div>
//         </div>
//     `;
// }
// generateCards()

// const apartsHTML = apartsList.map(apart =>{
//     return generateCards(apart.title,apart.info,apart.image)
// }).join('');

// console.log(apartsHTML)

