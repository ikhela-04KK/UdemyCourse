// je dois creer un systeme qui permet de derouler le nom comme ce que j'ai vu plusieurs fois sur les sites web
// voir le contenu d'un texte on a innerText et textContent
// methode utilisé pour changer  le nom de de la classe 
//document.querySelector(".paragraph").className ="paragraph red" a permi de modifier le contenu de l'élement 
// On peut utiliser p.classList pour voir les classes qui sont dans notre élément , il ne retourne ça sous forme de list
// Ajouter une class -- classList.add() , supprimer une classe -- classList.remove() , voir si une classe a un contenu specique -- classList.contain("red")

//Un exemple 

let select = document.querySelectorAll("p")
for (const element of select){
	(function(select){

		setInterval(function(){
			select.classList.toggle("red")
		},1000)

	})(element)

}
// on peut appliquer l'élément à toutes classes 
// le dom c'es quoi ? 

document.querySelector(".ikhela")
document.querySelector(".ikhela").className = "ikhela blue "
// vas permettre de change la classe de l'élément 

// il y 'as un api qui permet d'interagir avec la class 
let p = document.querySelector(".ikhela").classList
// permet de donner toutes les class , elle vient de l'api DOMtokenList  qui contient plusieurs methode comme Add , contains , remove , toggle : permet d'ajouter une classe s'il n'est pas encore présente , et de l'enlever si elle est présente 











