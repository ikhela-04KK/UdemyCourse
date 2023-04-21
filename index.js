let numberOfbtn = document.querySelectorAll(".drum").length;
let btn = document.querySelectorAll(".drum");

// definition de la liste des sons disponible dans mon dossier sound/ je peux le faire facilement avec node
let soundOfbtn = ['crash','kick-bass','snare','tom-1','tom-2','tom-3','tom-4']


// la boucle pour donner à chaque boutton des fonctionnalités , la musique 
function handle_event(event){
    let i;
    let clickBtn;
    const vent = event.type
    if (vent=="click"){
       i = Array.from(btn).indexOf(this);
        clickBtn = this;
        clickBtn.style.background="blue";
        let audio = new Audio(`sounds/${soundOfbtn[i]}.mp3`);
        audio.play();
    }
    else if (vent=="keydown"){
      const key = event.key
      for (let i=0 ; i<numberOfbtn; i++){
        if (key ===btn[i].innerHTML){
          clickBtn = btn[i] 
          clickBtn.style.background="blue";
          const audio = new Audio(`sounds/${soundOfbtn[i]}.mp3`);
          audio.play();
        }
      }
    }
    // permet de retirer le background + après 1s
    setTimeout(() =>{
      clickBtn.style.background="";
    },1000)
}
for (let i=0 ; i<numberOfbtn; i++){
  btn[i].addEventListener("click",handle_event);
}
document.addEventListener("keydown",handle_event);


