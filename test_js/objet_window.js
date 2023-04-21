// faire du javascript au côté navigateur 

// mettre le script avant la fermeture de la balise body 

//console.log("bonjour") //on ne peut pas faire un console.log puis faire une fonction qui s'autoappelle

// l'autoappelle d'une fonction qui permet de faire de telle sorte les variables qui y sont inscritent ne puissent acceder de l'exterieur 
// ce gnere de fonction, les variables sont disponibles que dans le contexte de celle ci 

//(function () {
//	var a ="demo"
//})() 
// c'est ça qui est une fonction qui s'autoappelle 

// voici un script qu vas dans une autre page si le popup.windw est nul

const popup = null
function refreshingPopup(){
	if (popuWindow && !populatioon.closed){
		popupWindow.location.reload(true);
	}
	else{
		popularWindow = window.open("app.html")
	}
	//  
}

//window.alert("je suis ikhela ")
//var a = window.prompt("qui est tu ?")

// creer un number guessing 

// creer une boucle

function alea_nombre(){
	let nb_aleatoire = new Uint8Array(1)
	return crypto.getRandomValues(nb_aleatoire)
}
let i = 1
let j = 3
let guess = alea_nombre()
let guess_number = guess[0]
console.log(guess_number)
window.alert(" avant de commencer , sachez que vous avez trois essaie ")
let user_number = parseInt(window.prompt(" quelle est votre nombre "),10)
while(true){
	if (user_number == guess_number){
		window.alert("le nombre est exact\nBravo bien jouer")
		break
	}
	else if (user_number > guess_number){
		window.alert("le nombre est trop grand")
	}
	else{
		window.alert("le nombre est trop petit")
	}
	let moins = j-i
	if ( i == 3){
		window.alert("votre nombre d'essai est terminer") 
		break
	}
	window.alert("il vous reste "+moins+" essai")
	user_number = parseInt(window.prompt(" quelle est votre nombre "),10)
	i++
}


// effectuer un set intervall pour definis le temps d'execution d'une foinction 

//window.setInterval(koffi,60000) permet de definir le temps d'execution d'une fonciton 


// il y'as aussi le callback 
// ici c'est un callback 
	
(function(){
	let k =0

	let timer = window.setInterval(function (){
	i++
	console.log(k)
	if (i==10){
		window.clearTimeout(timer)
	}
},1000)
})()
// setTimeout
// clearIntervall (id) permet de stopper un setIntervall
// cleartimeout
