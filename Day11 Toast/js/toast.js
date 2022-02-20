var lst_btn = document.querySelectorAll('button')
var toast = document.getElementById('toast')
lst_btn.forEach(item => {
    item.addEventListener("click", function (e) {
        let getClass = item.getAttribute('class')
        creatToast(getClass)
    });
});

function creatToast(value) {
    const div = document.createElement("div")
    div.setAttribute("class", "toast")

    var success = `<i class="fas fa-exclamation-circle"></i>
    <span>This is success message !</span>`
    var warning = `<i class="fas fa-exclamation-circle"></i>
    <span>This is warning message !</span>`
    var error = `<i class="fas fa-exclamation-circle"></i>
    <span>This is error message !</span>`

    toast.classList.remove()

    if (value) {
        if (value == "success") {
            div.innerHTML = success;
            toast.classList.add('success')
        }
        else if (value == "warning") {
            div.innerHTML = warning;
            toast.classList.add('warning')
        }
        else if (value == "error") {
            div.innerHTML = error;
            toast.classList.add('error')
        }
    } else {

    }



    toast.appendChild(div)

}