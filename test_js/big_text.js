// c'est une IIFE(imediatly invoqued fonction expression)
let selects = document.querySelectorAll("p")
for (const element of selects ){
    (function(disc){

        window.setInterval(function(){
            disc.classList.toggle("red")
        }, 1000)
    })(element)
}
console.log("bonjour")

(function(){
    let k = 0
    let timer = window.setInterval(function(){
        k++
        console.log(k)
        if (k==10){
            window.clearTimeout(timer)
        }
    },1000)
})()


// * esssayons de voir si notre navigatuer supporte le fait qu'il est de nouvelle classe dans notre appareil 


class Batiment {
    constructor(distance , poids , materiaux ){
        this.distance = distance 
        this.poids = poids 
        this.materiaux = materiaux 
    }
    materiels(){
        // console.log("le materiel de construcion , le plus étanche est "+ this.materieux )
    }
    distance(){
        // console.log("ça distance par rapport à la ville est de " + this.distance)
    }
    poid(){
        console.log("ce poids est relatif au fait à " + this.poids)
    }
}

// creation diu système d'héritage , il faut sue je maîtrise ce système car c'est vraiment important pour moi 
class TypeMaison extends Batiment {
    constructor(structure , distance , poids , materiaux ){
        super(distance , poids , materiaux )
        this.structure = structure
    }
    group_function(){
        super.materiels()
        super.distance()
        super.poid()
        console.log("c'est du pur " + this.structure)
    }
}
// il fau que j'essaie de faire fonctionner 
// pour supprimer un élément , il faur 
let li = document.querySelector("li")
li.parentElement.removeChild(li) // suprime , le premier élément 

li_2 = li.cloneNode(true) // creer une autre liste avec comme valeur 1

li_2 = document.createElement("li")
li_2.textContent = "8"
li.parentNode ou li.parentElement.appendChild(li_2)
li.parentElement.replaceChild(li, li_2)
li.parentElement.insertBefore(li, li_2)


//* ici on  ,parle d'évènement 
const elem =document.querySelector('p')
const elem_func = function() {
    this.classList.add('red')
}
elem.addEventListener('click',elem_func)











































