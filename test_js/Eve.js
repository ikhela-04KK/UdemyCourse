
//*ici c'est pour le survolement , c'est pour le soulevemen des pages
let page_i = document.querySelectorAll("p")
// changer couleur lorqu'on fait un survolement sur un élément 
for (const elements of page_i){
    elements.addEventListener("mouseover",function(){
        this.classList.add("red") 
    })
    elements.addEventListener("mouseout", function(){
    this.classList.remove("red")
    })
}

/*
// ici c'est lorsqu'on clique sur l'élément 
// let pag_i = document.querySelectorAll("p")
// for (const element of pag_i){
//    let pag_ii = function() {
        // this.classList.toggle('red')
    // }
    // element.addEventListener('click',pag_ii)
// }
*/

//* cliquez sur un lien et demander l'autorisation de quitter la page
// *utiliser stopProgation pour éviter de declencher l'évenement dans un élément parent  
let lienH = document.querySelectorAll("a.external")
for (const liens of lienH){
    liens.addEventListener("click", function(event){
        //liens.removeEventListener("click",function) permet de supprimer un évènement , mettre  la fonction das un évènement si nn il la reconnaitra pas
        let tag = window.confirm("Are you sure you want to get up in this page")
        if (!tag){
            event.preventDefault()
        }
    })
}

// currentTarget doit faire reference à l'élément sur lequel nous avons cliquez 

//si vous voulez voir la valeur de la  propriété en temps reel dans un objet e  utiliser 
// il e.currentTarget() no'

// un évènement se propage vers les parents donc je dois faire vraiment attention 


// * évènement de champ 
//* detecter lorsqu'on change la valeur de champs 

document.querySelector("#ai").addEventListener("keydown",function(e){
    let letter = String.fromCharCode(e.keyCode);
    if (letter !="A"){
        e.preventDefault();
    }
})


// keydown : detecte lorsqu'on commence à appuyer sur un bourron et keyup detecte! lorsqu'on relâche un boutton 


// *soumission d'un formulaire : utilisation de l'évènement submmit
let fors =document.querySelector("#form")

fors.addEventListener("submit", function(e){
    let instru = document.querySelector("#ai")
    if (instru.value.lenght != 5){
        // alert("ce champ n'est pas valide , veuillez entrer un autre champ")
        e.preventDefault()
    }
})

//* évènement de type checkbox acceptée une mention 
// if(mention.checked ) pour verifier qu'un checkbox a été coché 
let ikhela = document.querySelector("#form")
ikhela.addEventListener("submit", function(e){
    let instrus = document.querySelector("#check")
    if (!instrus.checked){
        alert("vous n'avez pas accès au cgu du réseau")
        e.preventDefault() // empêchez le rechergement de la page
    }
})

//* focus / blur evemenent qui permet de mettre et d'enlever le focus sur un champ

// * mise en place évènement avec des select 

document.querySelector("#fr").addEventListener("submit",function(e){
    let nb = parseInt(document.querySelector("#age").selectedOptions[0].value , 10)
    if(nb <18){
        alert("vous ne pouvez pas rentrer ")
        e.preventDefault()
    }
})


// * evenement qui permet de savoir qi une page est chargée 

//DomContentLoaded : attendre de savoir si une page est chargé 