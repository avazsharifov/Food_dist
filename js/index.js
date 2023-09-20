let second = document.querySelector("#seconds")
let minut = document.querySelector("#minutes")


let sval = second.innerHTML ; 
let mval = minut.innerHTML ;

let kal = 20
let lak = 56
setInterval(() => {
    kal --
    
    if(kal < 0 ) {
        kal = 59
    }
    let avaz = sval = kal
    
    
      second.innerHTML = avaz

        if( second.innerHTML == 0) {
             lak --            
         }
         mval = lak
         minut.innerHTML = mval  

        }, 1000);
        





 