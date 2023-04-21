let i = 0
document.querySelector("#id-checkbox").addEventListener("click", function(event){
    if (i>10){
        document.getElementById("output-box").innerHTML ="choix accepté"
    }
    else{
        document.getElementById("output-box").innerHTML +="Sorry!<code>preventDefault()</code> won t let you check this!<br>"
        event.preventDefault(); 
        i+=1
    }
    //  event qui qui n'execute pas le checkbox et à chaque click il renvoie un message d"erreur 

}, false)



// display warnig met une erreur dans la console lorsqu'on rentre une lettre en grand caractère

function checkName(evt) {
    const charCode = evt.charCode;
    if (charCode != 0) {
      if (charCode < 97 || charCode > 122) {
        evt.preventDefault();
        console.error(
          "Please use lowercase letters only.\n" +
          `charCode: ${charCode}\n`
        );
      }
    }
}

const myTextbox = document.getElementById('my-textbox');
myTextbox.addEventListener('keypress', checkName, false);


