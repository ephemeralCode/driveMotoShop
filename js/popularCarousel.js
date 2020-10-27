let cardContainer = document.querySelector('.popularProductsWrapperCards');
let cardTemplate = '';
let data = [
    {
        image: './images/content/popularProduct1.png',
        productName: 'Водонепроницаемый Рюкзак',
        productPrice: '9 800 ₽',
        isOnSale: 'false',
        isInStock: 'true'
    },

    {
        image: './images/content/popularProduct2.png',
        productName: `Спасательный жилет BRP Men's Airflow PFD`,
        productPrice: '6 900 ₽',
        isOnSale: 'true',
        isInStock: 'true'
    },

    {
        image: './images/content/popularProduct3.png',
        productName: 'BRP Audio-Premium System',
        productPrice: '68 000 ₽',
        isOnSale: 'false',
        isInStock: 'true'
    },

    {
        image: './images/content/popularProduct4.png',
        productName: 'Спасательное снаряжение',
        productPrice: '9 999 ₽',
        isOnSale: 'true',
        isInStock: 'false'
    },

    {
        image: './images/content/popularProduct5.png',
        productName: 'Мужской костюм 3мм',
        productPrice: '7 000 ₽',
        isOnSale: 'true',
        isInStock: 'false'
    },

    {
        image: './images/content/popularProduct6.png',
        productName: 'Мужской костюм 3мм',
        productPrice: '45 800 ₽',
        isOnSale: 'false',
        isInStock: 'true'
    },

    {
        image: './images/content/popularProduct7.png',
        productName: 'Мужской костюм 3мм',
        productPrice: '9 999 ₽',
        isOnSale: 'true',
        isInStock: 'false'
    },

    {
        image: './images/content/popularProduct8.png',
        productName: 'Мужской костюм 3мм',
        productPrice: '7 000 ₽',
        isOnSale: 'false',
        isInStock: 'true'
    },
];

function createCards(){
    for(let item in data){
        saleBanner = '';
        productsInfo = '';

        if(data[item].isOnSale == 'true'){
            saleBanner = '<p class="itemSale">Sale</p>';
        }

        if(data[item].isInStock == 'true'){
            productsInfo = `
                <div class="popularProductsInfo">
                    <img class="popularProductsImage" src="./${data[item].image}" alt="">
                    
                    <p class="popularProductsName">${data[item].productName}</p>
                    <p class="popularProductsPrice">${data[item].productPrice}</p>
                </div>

                <a class="addToBasket" href="">
                    <img src="./images/popularBasket.svg" alt="Добавить в корзину">
                </a>
            `;
        } else {

            //popularProductsOutOfStock
            productsInfo = `
                <div class="popularProductsInfo">
                    <img class="popularProductsImage" src="${data[item].image}" alt="">
                    
                    <p class="popularProductsName">${data[item].productName}</p>
                    <p class="popularProductsPriceNull">нет в наличии</p>
                    <a class="popularProductsInform" href="">Сообщить о поступлении</a> 
                </div>
            `;
        }

        cardTemplate = `
            <!--popularCarouselCard-->
            <div class="popularProductsCard">
                <div class="containerDiscount">
                    ${saleBanner}
                    
                    <img src="/images/likeProduct.svg" alt="">
                </div>

                ${productsInfo}
            </div>
        `;

        renderCard(cardTemplate);
    }
}

createCards();

function renderCard(cardTemplate){
    cardContainer.insertAdjacentHTML('beforeend', cardTemplate);
}

//-carousel-

let currentOffset = 0;
let card = document.querySelectorAll('.popularProductsCard')[0];
let popularCarouselRight = document.querySelector('.popularCarouselRight');
let popularCarouselLeft = document.querySelector('.popularCarouselLeft');

function carouselScrollRight(){
    maxAllowedOffset = -(document.querySelectorAll('.popularProductsCard').length - 4)*300;

    if(currentOffset == maxAllowedOffset){
        currentOffset = 300;
    }

    currentOffset += -300;
    card.style.cssText += `margin-left: ${currentOffset}px`;
}

function carouselScrollLeft(){
    if(currentOffset == 0){
        return;
    } 
    
    currentOffset += 300;
    card.style.cssText += `margin-left: ${currentOffset}px`;
}

popularCarouselRight.addEventListener('click', () => {
    carouselScrollRight();
});

popularCarouselLeft.addEventListener('click', () => {
    carouselScrollLeft();
});
