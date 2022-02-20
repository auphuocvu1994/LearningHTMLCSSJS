var inputValue = document.querySelector('.txtValue')
var btnAdd = document.querySelector('.btn__add')
var lbtName = document.querySelector('.txtName')
var formSubmit = document.querySelector('.todo__form')

formSubmit.addEventListener("submit", function (e) {
    e.preventDefault()
    let value = inputValue.value.trim()
    if (value) {
        createElement({
            text: value,
        })
    }
   

    inputValue.value = ""
});

function createElement(item) {

    const li = document.createElement("li")
    li.innerHTML = `
    <span>${item.text}</span> <i class="fas fa-trash-alt"></i>
    `
    if (item.stt == "completed") {
        li.querySelector('span').classList.add('completed')
    }

    

    li.addEventListener("click", function (e) {
        this.querySelector('span').classList.toggle('completed');
        saveStorage()
    })

    li.querySelector("i").addEventListener("click", function (e) {
        this.parentElement.remove()
        saveStorage()
    })


    document.querySelector('ul').appendChild(li)
    
}

function saveStorage() {
    let lstLi = document.querySelectorAll('li')
    let array = []
    lstLi.forEach(item => {
        let stt = item.querySelector('span').getAttribute('class')
        let text = item.querySelector('span').innerText

        array.push({
            text,
            stt
        })
    });


    localStorage.setItem("listLi", JSON.stringify(array));
}
function getStorage() {
    let data = JSON.parse(localStorage.getItem("listLi"));
    console.log(localStorage.getItem("listLi"));
    data.forEach(function (item) {
        createElement(item)
    })
}

getStorage()