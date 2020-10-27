let prevSlide = document.querySelectorAll('.slide')[0],
    prevDot = document.querySelectorAll('.carouselSlideDots')[0],
    slideLeft = document.querySelector('.carouselSlideLeft'),
    slideRight = document.querySelector('.carouselSlideRight'),
    slideArr = document.querySelectorAll('.slide'),
    dotArr = document.querySelectorAll('.carouselSlideDots');

slideArr[0].classList.add('slideActive');
dotArr[0].classList.add('dotActive');

currentPos = 0;

function scrollRight(){
    currentPos++;

    if(currentPos > slideArr.length - 1){
        currentPos = 0;
    }

    prevDot.classList.remove('dotActive');
    prevSlide.classList.remove('slideActive');
    slideArr[currentPos].classList.add('slideActive');
    dotArr[currentPos].classList.add('dotActive');

    prevSlide = slideArr[currentPos];
    prevDot = dotArr[currentPos];
    return(prevSlide, prevDot);
}

function scrollLeft(){
    currentPos--;

    if(currentPos < 0){
        currentPos = slideArr.length - 1;
    }

    prevDot.classList.remove('dotActive');
    prevSlide.classList.remove('slideActive');
    slideArr[currentPos].classList.add('slideActive');
    dotArr[currentPos].classList.add('dotActive');

    prevDot = dotArr[currentPos];
    prevSlide = slideArr[currentPos];
    return(prevSlide, prevDot);
}

// dot

function getDotId(e){
    n = 0;

    for(item of dotArr){
        if(item == e.target){
            return(n);
        }

        n++;
    }
}

function setSlide(e){
    dotId = getDotId(e);

    prevDot.classList.remove('dotActive');
    prevSlide.classList.remove('slideActive');
    slideArr[dotId].classList.add('slideActive');
    dotArr[dotId].classList.add('dotActive');

    prevDot = dotArr[dotId];
    prevSlide = slideArr[dotId];
    currentPos = dotId;

    return(prevSlide, prevDot);
}

for (let item of dotArr){
    item.addEventListener('click', (e) => {
        setSlide(e);
    });
}

// arrow

slideRight.addEventListener('click', () => {
    scrollRight();
});

slideLeft.addEventListener('click', () => {
    scrollLeft();
});

//timer

let bannerScrollInterval = setInterval(scrollRight, 5000);
let containerCarousel = document.querySelector('.wrapperBannerCarousel');

containerCarousel.addEventListener('mouseenter', () => {
    clearInterval(bannerScrollInterval);
});

containerCarousel.addEventListener('mouseleave', () => {
    bannerScrollInterval = setInterval(scrollRight, 5000);
});

//draggable

containerCarousel.addEventListener('mousedown', (e) => {
    e.preventDefault();
    coordStart = e.clientX;

    return(coordStart);
});

containerCarousel.addEventListener('mouseup', (e) => {
    coordFinish = e.clientX;

    coordDiff = coordStart - coordFinish;

    if(coordDiff < 0 && coordDiff < -50){
        scrollLeft();
    } else if(coordDiff > 0 && coordDiff > 50){
        scrollRight();
    }
});