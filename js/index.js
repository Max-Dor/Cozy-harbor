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


const mainDiv = document.querySelector('.main__div');
const apartments = Array.from(document.querySelectorAll('.show__card'));

const data = [{
    category: 'studio',
    id: 11,
    title: 'Студия на третьем этаже...',
    image: ['/image/photos/studios/lev3_stu1_01.jpg','/image/photos/studios/lev3_stu1_02.jpg','/image/photos/studios/lev3_stu1_03.jpg','/image/photos/studios/lev3_stu1_04.jpg','/image/photos/studios/lev3_stu1_05.jpg','/image/photos/studios/lev3_stu1_06.jpg']
    
},
{
    category: 'studio',
    id: 22,
    title: 'Студия на шестом этаже...',
    image: ['/image/photos/studios/lev6_stu2_01.jpg','/image/photos/studios/lev6_stu2_02.jpg','/image/photos/studios/lev6_stu2_03.jpg']
},
{
    category: 'terrace',
    id: 33,
    title: 'Cтудияс террасой на пятом этаже...',
    image: ['/image/photos/terrace/lev5_ter_01.jpg','/image/photos/terrace/lev5_ter_02.jpg','/image/photos/terrace/lev5_ter_03.jpg','/image/photos/terrace/lev5_ter_04.jpg','/image/photos/terrace/lev5_ter_05.jpg']
},
{
    category: 'studio',
    id: 44,
    title: 'Студия на третьем этаже...',
    image: ['/image/photos/studios/lev3_stu25m_01.jpg','/image/photos/studios/lev3_stu25m_02.jpg','/image/photos/studios/lev3_stu25m_03.jpg','/image/photos/studios/lev3_stu25m_04.jpg','/image/photos/studios/lev3_stu25m_05.jpg','/image/photos/studios/lev3_stu25m_06.jpg','/image/photos/studios/lev3_stu25m_07.jpg','/image/photos/studios/lev3_stu25m_08.jpg']
},
{
    
    category: 'tworooms',
    id: 55,
    title: 'Двухкомнатные апартаменты на  третьем этаже... ',
    image: ['/image/photos/room2/lev3_room2_01.jpg','/image/photos/room2/lev3_room2_02.jpg','/image/photos/room2/lev3_room2_03.jpg','/image/photos/room2/lev3_room2_04.jpg','/image/photos/room2/lev3_room2_05.jpg']
},
{
    category: 'threerooms',
    id: 66,
    title: 'Трёхкомнатные апартаменты на пятом этаже...',
    image: ['/image/photos/room3/lev5_room3_01.jpg','/image/photos/room3/lev5_room3_02.jpg','/image/photos/room3/lev5_room3_03.jpg','/image/photos/room3/lev5_room3_04.jpg','/image/photos/room3/lev5_room3_05.jpg','/image/photos/room3/lev5_room3_06.jpg']
},
{
    category: 'threerooms',
    id: 77,
    title: 'Трёхкомнатные апартаменты на шестом этаже...',
    image: ['/image/photos/room3/lev6_room3_01.jpg','/image/photos/room3/lev6_room3_02.jpg','/image/photos/room3/lev6_room3_03.jpg','/image/photos/room3/lev6_room3_04.jpg','/image/photos/room3/lev6_room3_04.jpg','/image/photos/room3/lev6_room3_05.jpg','/image/photos/room3/lev6_room3_06.jpg','/image/photos/room3/lev6_room3_07.jpg','/image/photos/room3/lev6_room3_08.jpg','/image/photos/room3/lev6_room3_09.jpg','/image/photos/room3/lev6_room3_10.jpg']
},
{
    category: 'threerooms',
    id: 88,
    title: 'Трёхкомнатные апартаменты на втором этаже...',
    image: ['/image/photos/room3/lev2_room3_07.jpg','/image/photos/room3/lev2_room3_08.jpg','/image/photos/room3/lev2_room3_09.jpg']
}];



const getMarkup = function(apartmentData){
        return`
        <div class="card__overflow">
            <button class ="card__close"><span class ="card__line"></span></button>
                <div class="card__main">
                    ${apartmentData.map(data=>{
                        return `
                            <div class="apart">
                                <h3 class="card__info">${data.title}</h3>
                                <ul class="list">
                                    <img class="list__img" src = ${data.image.map(data=>{
                                        return`
                                            <img class = "list__img-item" src = ${data}>
                                        `
                                    }).join('')}
                                </ul>
                            </div>
                        `
                    }).join('')}
                </div>
        </div>
        `;
};

function getData(e){
    mainDiv.classList.remove('main__div--hide');
    const{dataset} = e.target;
    const {target} = dataset;
    const apartmentData = data.filter(d => d.category === target);
    const html = getMarkup(apartmentData);
    const body = document.body;

    mainDiv.innerHTML = html;
    const cardClose = document.querySelector('.card__close');
    cardClose.addEventListener('click', ()=>{
        mainDiv.classList.add('main__div--hide');
    });
}
apartments.forEach(key => key.addEventListener('click', getData));

