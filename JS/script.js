const serviceButton = document.querySelector(".section-services__button--toggle")
const serviceAbout = document.querySelector(".div-services-elements--toggle")
serviceButton.onclick = function(){
    serviceAbout.classList.toggle("div-services-elements--toggle")
}