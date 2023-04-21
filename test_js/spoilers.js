// on pense toujours à l'algo
// 
// let button = document.querySelector(".spoiler-content button")
// 
// button.addEventListener("click", function(){
    // this.nextElementSibling.classList.add('visible')
    // this.parentNode.removeChild(this)
// })

// methodes pour  faire des spoiler de manière plus rapide 

let elements = document.querySelectorAll(".spoiler")

//creer une boucle 

let createSpoilerButton = function(element){

    //creation de la span
    let span = document.querySelector("span")
    span.className = "spoiler-content"
    span.innerText = element
    
    //creation des buttons
    let Button = document.createElement('button')
    Button.textContent = "Afficher le spoiler"

    //ajout des éléments au DOM
    element.appendChild(Button)
    element.appendChild(span)
}

for (const element of elements){
    createSpoilerButton(element)
}
