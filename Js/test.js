const pages = document.querySelectorAll(".page")
const header = document.querySelector("header")
const nbPages = pages.length
let pageActive = 1



window.onload = () => {

    for (let page of pages) {
        page.style.display = "none"
    }

 document.querySelector(".page").style.display = "initial"


 var boutons = document.querySelectorAll(".next")

    for (let bouton of boutons) {
        bouton.addEventListener("click", pageSuivante)
    }


 var boutons = document.querySelectorAll(".prev")

    for (let bouton of boutons) {
        bouton.addEventListener("click", pagePrecedente)
    }

}


    var imgec = document.querySelector("#imgec")
    imgec.addEventListener("click", pageSuivante )


    var imgvi = document.querySelector("#imgvi")
    imgvi.addEventListener("click", pageSuivante )




    var integ = document.querySelector("#integ")
    integ.addEventListener("click", pageSuivante )

    var conint = document.querySelector("#conint")
    conint.addEventListener("click", pageSuivante )




    var idee = document.querySelector("#idee")
    idee.addEventListener("click", pageSuivante )


    var brouillon = document.querySelector("#brouillon")
    brouillon.addEventListener("click", pageSuivante )


    var prodev = document.querySelector("#prodev")
    prodev.addEventListener("click", pageSuivante )


    var proddev = document.querySelector("#proddev")
    proddev.addEventListener("click", pageSuivante )




function pageSuivante()
{
    for (let page of pages) {
        page.style.display = "none"
    }

    

    pages[pageActive].style.display = "initial"
    pageActive++

    document.querySelector(".active").classList.remove("active")


    


}


function pagePrecedente() {

    for (let page of pages) {
        page.style.display = "none"
    }

    this.parentElement.previousElementSibling.style.display = "initial"


    document.querySelector(".active").classList.remove("active")


    pageActive--
}

