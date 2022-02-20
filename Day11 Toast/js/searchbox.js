var searchBox = document.querySelector('.search-box');
var btnSearch = document.querySelector('.search-box__btn');
btnSearch.addEventListener('click',function () {
    // searchBox.classList.toggle('show');
    this.parentElement.classList.toggle('show');
    this.previousElementSibling.focus();
})