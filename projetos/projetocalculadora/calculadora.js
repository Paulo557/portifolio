const visor = document.getElementById("resultado");
 function insert (num){
 visor.innerHTML+= num;


 }

 function clean() {
   visor.innerHTML = "";
    
 }
 
 function back () {
    let numeroVisor = visor.textContent;
    visor.innerHTML= numeroVisor.substring(0,numeroVisor.length -1)
 }
 
 function calcular(params) {
    let numeroVisor = visor.textContent
    visor.innerText = eval(numeroVisor);
 }
  