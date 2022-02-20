var listImg = document.querySelectorAll('.gallery__image img');
var btnClose = document.querySelector('.btn-closed');
var btnNext = document.querySelector('.btn-next');
var btnPrev = document.querySelector('.btn-prev');
var imgSelected = document.querySelector('.overlay__content img');
var divZoom = document.querySelector('.overlay');
var currentIndex = 0;

function showGallery() {
    imgSelected.src = listImg[currentIndex].src;
    divZoom.classList.add('show');
    if (currentIndex == 0) {
        btnPrev.style.display = "none";
    }else{
        btnPrev.style.display = "block";
    }
    if (currentIndex == listImg.length-1) {
        btnNext.style.display = "none";
    }
    else{
        btnNext.style.display = "block";
    }
}

listImg.forEach(function (item, index) {
    item.addEventListener('click', function () {
        currentIndex = index;
        showGallery();
    })
});

btnClose.addEventListener('click', function () {
    divZoom.classList.remove('show');
});

document.addEventListener('keydown', function (e) {
    if (e.keyCode == 27) {
        divZoom.classList.remove('show');
    }
});

btnPrev.addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--;
        showGallery();
    }
});
btnNext.addEventListener('click', function () {
    if (currentIndex < listImg.length - 1) {
        currentIndex++;
        showGallery();
    }
});