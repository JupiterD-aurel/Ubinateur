const pages = document.querySelectorAll(".page")
const header = document.querySelector("header")
const nbPages = pages.length
let pageActive = 1



window.onload = () => {

    document.querySelector(".page").style.display = "initial"


 var boutons = document.querySelectorAll(".next")

    for (let bouton of boutons) {
        bouton.addEventListener("click", pageSuivante)
    }


    boutons = document.querySelectorAll(".prev")

    for (let bouton of boutons) {
        bouton.addEventListener("click", pagePrecedente)
    }
}

    var start = document.getElementById("start")

    start.addEventListener("click", function(){
        pageSuivante
})
    let imgec = document.getElementById("imgec")

    imgec.addEventListener("click", pageActive++ )


    var imgvi = document.querySelector("#imgvi")
    imgvi.addEventListener("click", pageSuivante)


function pageSuivante() {


    for (let page of pages) {
        page.style.display = "none"
    }

    this.parentElement.nextElementSibling.style.display = "initial"


    document.querySelector(".active").classList.remove("active")


    pageActive++


}


function pagePrecedente() {

    for (let page of pages) {
        page.style.display = "none"
    }

    // On affiche la page suivante
    this.parentElement.previousElementSibling.style.display = "initial"

    // On "désactive" la page active
    document.querySelector(".active").classList.remove("active")

    // On incrémente pageActive
    pageActive--
}
