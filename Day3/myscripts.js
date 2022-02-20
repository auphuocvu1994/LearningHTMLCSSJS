var btnModal = document.querySelector('.btnModal');
var modal = document.querySelector('.modal');
var icClose = document.querySelector('.ic-close-modal');
var btnClose = document.querySelector('.btn-close');

function showHidePopup(){
    // console.log(e.target);
    modal.classList.toggle('hide');
}

btnModal.addEventListener("click",showHidePopup);
icClose.addEventListener("click",showHidePopup);
btnClose.addEventListener("click",showHidePopup);
// modal.addEventListener("click",showHidePopup);
modal.addEventListener("click",function (e) {
    
    console.log(e.currentTarget);
    if (e.target==e.currentTarget) {
        showHidePopup();
    }
});