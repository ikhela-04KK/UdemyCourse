// on creer un objet pour pouvoir stocker des valeurs plus complexe 
// une function est un type de variable , comme une chaîne de caractères et int 
// est ce qu'il y'as une variable optionnel

let demo = function(a,b){
	if (b==undefined){
   // TODO document why this block is empty
 
	}
	demo() // pour eff
}

// en javascript on utilise des methodes sur les differentes 
// les tableaux ont aussi une methode 
// une methoes qui s'itulise directement sur l'objet string 
// les variablzs ont une porté limité dans les fonctions 
// d'où l'utilisation
// des fonctions qui sont dans le protoytpes exemples indexof exemple "aerre".indexOf() 
// il y'as aussi des methodes qui s'utilisent directement sur l'objet string comme String.fromCharCode()
// indexof est une methode qui retourne quelque choses 
// et des methodes qui modifie l'élément sur lequelle elle est appliquer 
// donc indexof est une methode
// comme en python une variable qui est declaré dans une fonction n'est pas accessible à l'extérieur 
// comme en python , une fonction a accès aux variables extérieures
// avec le javascript on crée des methodes au niveau de nos objets 
// un prototypes est une propriété particulière qui est un objet qui peut aussi avoir des methodes
// en javascript , un objet B peut être le prototypes d'un autre objet A , ce objet A vas disposé de toutes les methodes , fonctions de l'objet B
// l'objet B est une instace du type d'élève 
// this faire reference à l'objet dans lequel il est assigné et dans un contexte 
// je peux definir une methodes sur une instance (l'objet B) : objetB.koffi = function() {  return console.log("vous êtes un objet") }
// on peut modifier l'objet A qui est utilisé comme prototypes et cette modfications va s'impacter sur les objets qui ont hérité de ce prototypes 
// 35:56



// lorsque tu créee un système de constructeur , l'objet qui dans lequel on applique le constructeur vas heriter du prototype du construteur(objet)
// lorsqu'on fait delegue.prototype = Object.create(Eleve.prototype) ils importent toutes les methodes donc , redefinis le constructeur sur delegue // dès que vous êtes dans une fonctions this references à l'objet global
// si vous êtes dans une fonction qui est appelé au niveau d'un objet , faire reference à l'objet lui même 
// une closure est une fonction qui enferme une autre fonction et qui lui donne un contexte local 
// principe du namespace 
// avec const on ne peut pas modifier ça valeur plus tard
// le let n'est pas hoster ,,c'est à dire qu'il ne remonte dans la defintion global
// or le var est hoster , il fait remonter la definition de chaque fonction en haut de la page 
// les fonctions sont aussi hoster par rapport au console.log-() cela m'aide à comprendre de ma manière 
// elles sont lu avant notre code 
// il n' y a plus de concept de hosting lorsqu'on met la fonction dans une fonction 

// ce mot clé dépend du contexte d'appel de la fonction

/*
 const eleve = {
 	nom: 'jean',
	appeler : function (){
		console.log(this)
	}
}

eleve.appeler() dans ce cas this faire reference à l'objet dans lequel il est 
this a été remplacé par l'objet dans lequel on a defins notre fonction

*/
/*
 * ici dans ce cas le this ne fait plus reference à l'ojet eleve mais cette fois dans le nouvel objet qui const demo : ce qui fait que comme il n'a aucune variable nom , il mettra par defaut undefined 
 const eleve = {
 	nom:'jean',
	appeler : function(){
		const demo = {
			console.log(this.nom)
		}
	}

demo.demo()

}
eleve.appeler()

*/

// les fonctions fléches ne redefinissent par le this 
// pour palier le problème ont peut faire ceci 

/*
 
 const eleve = {
 	nom:'jean',
	appeler : function(){
		const demo = () => {
			console.log(this.nom)
		}
	}
}

dans ce cas this étant dans un contexte global, appliquer à nom peut fonctionner 
c'est à dire que this herite d'un contexte précedent 
on herite  d'un this qui est definis en dehors de la declaration de cette fonction
*/


// mise au point sur les prototypes

// ne pas utiliser __proto__ pour recuperer ou modifer le prototype d'un objet mais plutôt utiliser getprototypeof()


const eleve ={
	nom : 'ikhela',
	moyenne : function(){
		return 10
	},
	prenom : () =>{
		console.log(this.nom + "c'est mon nom")
	}

}

// ------------------------

// toutes les letiables sont des objets
// je dois prendre les bibliothèques , pour facilier mon code 
let nom = 123 
// ce n'est pas obligé de mettre let devant d'une letiable 
// lorsqu'on declare une letiable pour la premiere fois , il faut il preferable de mettre let devant 
// tableau
let tabs = [1,2,'23']
console.log(tabs[0])
// condition
//if (condition) {
//}
//else if (condition) {
//}
//else {
//}
// similaire à powershell  
// les boucles 
let i 
for (i =0; i<3; i++ ) {
	console.log("bonjour")
}
// function
function demo(){
}
// une fonction est un type de letiable comme les autres 
let demon = function () { }
// pas de valeur optionnel 
// mettre une valeure dans un tableau 
let tableau = [1,2,3]
tableau.push(8)
// indexof : sur les instances 
// string.FormCharCode : sur la classe 
// les methodes ont differents types 
// la porté des letiables 
// on ne declare pas des letiables dans for , function 
// vous ne pouvez pas accedez a une letiable local a une fonction 
// tu peux acceder à des letiables global dans une fonction
// on peut ajouter des valeurs à  objet complexe contenant plusieurs informations 
let Universit = { nom : "HEC" , Total : 123}
Universit.taille = "123ha"
// les classes 
// il utilise un systeme de prototype pour fonctionner 
let eleve = {
	nom : "eleve",
	moyenne :function(){
		return 10
	},
	present : function(){
		return this.nom + " present"
	}
}

let jean = Object.create(eleve)
jean.nom = "jean"
let marc = Object.create(eleve)
marc.nom = "koffi kan marc"
let name = marc.present()
// on peut rajouter une methode , sur une instance 
jean.parler = function demos (){
	return 'salut'
}
// on peut modifier une methode qui est dans un prototype
eleve.present = function (){
	return this.nom + " est present"
}
// les fonctions sont utilisées comme constructeur 
class Qual {
	constructor(nom) {
		this.nom = nom
	}
	moyenne() {
		return 10
	}
	present() {
		return this.nom + " est present"
	}
}
let jerome = new qual("jerome") // à cause de es15 ,c cettre façon de aire est elle toujours disponible 
let elena = new qual("elena")
// creation du delegue 
class Delegue {
	constructor(noms) {
		// systeme d'appelle 
		qual.call(this, noms)
		this.role = "delegue"
	}
	moyenne() {
		return 65
	}
}
// donner le prototype qual a delegue car delegue ne contient aucun prototype que nouna peut utiliser
delegue.prototype = Object.create(Qual.prototype)

// mais on ne peut pas creer un constructeur en dehors de ça classe ou ici il parle de prototype 
String.prototype.lol = function () { return this + "lol" }
String.prototype.ikhela = function(){return this + "lol"}
let jack = "1".lol()
// objet Math pour les mathematiques 
// comment on gere l'heritage
let nouna = new delegue("nouna")
// utilisation de forEach 
class Etudiant {
	constructor(nomx) {
		this.nom = nomx
	}
	// ajoutons un prototype 
	// premiere  methode pour boucler 
	moyenne() {
		let som = 0
		for (const element of this.note) {
			som += element
		}
		return Math.round(som / this.note.length)
	}
}
// deuxieme methode en faisant en callback 
class NomCommerce {
	constructor(nCommerce) {
		Qual.call(this, nom)
		this.nCommerce = nCommerce
	}
	// utilisation de forEach
	moyenne() {
		let som = 0
		this.montant.forEach(function (note) {
			som += note
		})
		return som
	}
	// utilisation d'unte technique pour pouvoir attribuer un this qui dans une fonction de fonction 
	benefice(nCommerce) {
		// regler le problème du this quant il est dans une autre fonction
		let a = () => {
			return nCommerce + " a du benefice" // le this ne fais pas reference à l'objet 
		}
		return a()
	}
}
// pour faire heriter à nomCommerce de l'objet call 
nomCommerce.prototype = Object.create(Qual.prototype)
let remy = new Etudiant("remy") // est ce toujours valables 
remy.note = [12,15]
let chaussure = new nomCommerce("chaussure") 
chaussure.montant = [1200,15000,8900]
// utilisations de this 
let pentoufle = new nomCommerce("pentoufle") 
// closure : presente une fonction qui est dans une autre fonction qui lui donne un contexte local 
// notion de namespace : on peut artificiellement creer un namespace 
// auto appeler une fonction 
// je n'ai pas bien compris pourquoi il a fait ça 
let Grafikart = {
	Etudiant: Etudiant
}
let leo = new Grafikart.Etudiant("leo")



































































































