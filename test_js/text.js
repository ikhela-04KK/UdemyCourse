// !  il faut que tu comprennes les différents concepts abordés
// var nombre = 10 
// var affichage = "je suis un nombre"
// if (nombre == 10){
    // affichage
// }
// else if (nombre ==9){
    // var notguess = "ce c'est pas un nombre "
    // notguess
// }
// !0 l'utilisationd de for 
let i 
for (i = 0 ; i< 7 ; i++){
    console.log(i)
}
//  ! creation de fonction

function table_multiplication (x,y){
    let somme = x + y 
    console.log(" la somme est "+ somme)
    let multiplication = x * y
    console.log("la multiplication est " + multiplication)
}
// pas de virgule entre les methodes de classe 
class Habitation {
	constructor(lieu) {
		this.lieu = lieu
	}
	name_region() {
		console.log(this.lieu + " nous somme de la region de l'indennié ")
		console.log(this.lieu + "is very beautiful")
	}
	nombre_habitant(nbHabitant) {
		console.log(this.lieu + " nous comptons environ " + nbHabitant + " Habitant")
		return nbHabitant
	}
	infoGeneral(nom, nb) {
		let nbH = new Habitation(nom)
		let nombreHabitant = nbH.nombre_habitant(nb)
		console.log(lieu + " compte environ " + nombreHabitant)
	}
}



// concretement à quoi sert le this dans ue phrase 
// quelle est la difference entre une  fonction qui as un vice et une autre qui n'as pas un vice 
// faire le systeme d'heritage
class Hab2 extends Habitation {
	constructor(lieu_2,lieu) {
		super(lieu)
		this.lieu_2 = lieu_2
		// Habitation.call(this, lieu_2)
	}
	moyenne() {
		let som = 0
		this.montant.forEach(function (note) {
			som += note
		})
		return som / this.montant.length
	}
}
// Hab2.prototype = Object.create(Habitation.prototype)

//apprennons à utiliser les conditions avec switch case 
let ikhela = {
	nom : "marc-ephrem",
	age : 24,
	etude : 'informatique'
}
// faisons un swwitch case sur ikhela 
function description(name){
	switch(name.age){
		case 24 : 
			console.log("waouuh tu as 24 ans")
			break
		case 18 : 
			console.log("trop jeune pour travailler")
			break
	default : 
			console.log(" votre age ne rentre âs dans la valeur")
	}
}
// utilsation des boucles 
// -- la boucle tant que 
// utilisation de la boucle for pour faire une decrementation 
function prevision(nombre){
	let p=0
	for (let nb=nombre-1 ; nb >=2 ; nb--){
		if ( (nombre % nb) == 0 ){
			p=p+1
		}
	}
	if (p>0){
		console.log("ce nombre n'est pas premier")
	}
	else{
		console.log("ce nombre est premier")
	}
}
// afficher les élèves en dessous de la moyenne 
let eleves = [{
	nom : 'Marc',
	moyenne:15
},{
	nom :'Marron',
	moyenne : 8
},{
	nom:'Antoinne',
	moyenne:4
}]
function moy_bas(elevel){
	
	for (const element of elevel){
		if (element.moyenne < 10){
			console.log(element.nom + " est en dessous de la moyenne")

		}
	}
}
// savoir combien de mot il y'as  dans une phrase 
let phrase = "Je suis ikhela j'ai la capacitée de developper des logiciels je incroyables en un rien de temps"
let compte_phrase = function (phrases){
	let mots = phrases.toLowerCase().split(" ")
	let compteur = {}
	for (let j = 0 ; j < phrases.length ; j++){
		let mot = mots[j]
		if (compteur[mot] == undefined){
			compteur[mot] = 1	
		}
		else{
			compteur[mot]++
		}
	}  
	return compteur
}	
// creer deux objets d'élèves et determiner lequel d'entre eux est le  meilleur est le meilleur 
let eleve1 = {
	nom : "ikhela",
	moyenne : [15,18,19]
}
let eleve2 ={
	nom : "yvane",
	moyenne : [2,2,20]
}
let result = function(s1,s2){
	let tab_note = [s1.moyenne, s2.moyenne]
	let tabs_moy = []
	for (const element of tab_note){
		let tabs = element
		let som = 0
		tabs.forEach(function(note){
			som+=note
		})
		let som_moy = som / tabs.length
		tabs_moy.push(som_moy)
	}
	s1.total_moy = tabs_moy[0]
	s2.total_moy = tabs_moy[1]
	return s1.total_moy > s2.total_moy;
}
//* la notion de hosting 
//* la notion de let et de const 
//    
// mot clé this 
const eleve = {
	nom : 'jean',
	appeler : function(){
		console.log(this.nom)
	}
}
eleve.appeler.bind({nom :"jean"})()
// this depend du context d'utilisation
// this peut changer rapidement de contexte en fonction du contexte d'utilisation
//* je dois réecire une fonction fléché.

/*
retenir cette fonction 
$('button').addEventListener('click',eleve.appeler)
il affiche non pas le nom de l'élève mais la balise button 
ce qui veut dire que le this depent de l'utilsation
*/

// lorsqu'on imbrique des fonctions avec des this , iil faut très attention au contexte . dans ce cas il faut rentre l'utilsation de this global
// en faisant const self = this et en appellant cette fonction dans son contexte d'utilisation
// utilisation de la fonction fléché
// utiliser une fonction fléchée dans une variable ou dans une constante ou lorqu'il faut utiliser le this dans un contexte global qui herite d'un contexte antérieur 
const koffi = a => a*32 
// cette une fonction fléchée qui retourne qu'une seul valeure c'est comme le mot clé lambda en python 
let b = (a,m) => a+m
// fais la somme deux valeurs entrés en paramètere dans la variable b(7,9)





















