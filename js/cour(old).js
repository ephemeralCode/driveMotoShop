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
    dotArr[currentPos].classList.add('dotActive')

    prevDot = dotArr[currentPos];
    prevSlide = slideArr[currentPos];
    return(prevSlide, prevDot);
}

// dot

slideRight.addEventListener('click', () => {
    scrollRight();
});

slideLeft.addEventListener('click', () => {
    scrollLeft();
});