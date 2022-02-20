var ul = document.querySelector('.search-tag__content ul');
var input = document.querySelector('.search-box__input');
var btnRemoveAll= document.querySelector('.btn-removeAll');

var arr = ['Node JS', 'VueJS'];

function getDataFromArray() {
    ul.innerHTML = '';
    for (let index = 0; index < arr.length; index++) {
        const item = arr[index];
        ul.innerHTML += `<li><span>${item}</span><i onClick="removeItem(${index})" class="fas fa-times"></i></li>`;
    }
}

input.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        arr.push(input.value);
        getDataFromArray();
        input.value = '';
    }
})

getDataFromArray();

function removeItem(index) {
    arr.splice(index, 1);
    getDataFromArray();
}

btnRemoveAll.addEventListener("click",function () {
    arr=[];
    getDataFromArray();
})