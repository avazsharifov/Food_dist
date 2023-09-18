
let foto = document.querySelectorAll(".offer__slide")
let nazad =document.querySelector(".offer__slider-prev")
let peryod =document.querySelector(".offer__slider-next")



let rasm = document.querySelectorAll(".tabcontent")
let knopki = document.querySelectorAll(".tabheader__item")
let menu = document.querySelectorAll(".tabcontent__descr")


function yunus(a = 0) {

    rasm.forEach(img2 => {
          img2.classList.add("hide" , "fade")
          rasm[a].classList.remove("hide")
    })

    menu.forEach(mne => {
        mne.classList.add("hide" , "fade")
        menu[a].classList.remove("hide")
    })
}
knopki.forEach((knp, a) =>{
    knp.onclick = () => {
        yunus(a) 
    }
} )

yunus()



let sif = 0





function avaz (a) {
    
    if(a > foto.length -1){
        sif = 0
    }
    if(a < 0){
        sif = 3
    }
    foto.forEach(img => {
        
        img.classList.add("hide", "fade")
        foto[sif].classList.remove("hide")
    
    
    })
}

avaz(sif)
peryod.onclick = ( ) => {
  sif ++
  avaz(sif)
}

nazad.onclick = ( ) => {
    sif --
    avaz(sif)
  }


 