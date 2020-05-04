import {Bakery} from './classes/bakery.mjs';
import {Building} from './classes/building.mjs';
import {buildings} from './data.mjs';

const newBakery = new Bakery()
const newBuilding = new Building()

///////////////////////////////////////// RECUPERATION DE DIV POUR CLASS BAKERY/////////////////////////////////////////

let h2Bakery = document.querySelector('h2')
h2Bakery.innerHTML = newBakery.name

let spanStock = document.getElementById('cookiesStock').getElementsByTagName('span')

// REVOIR PARTIE DU SPAN QUI ACTIVE LES TUILES 
spanStock[0].innerHTML = newBakery.cookies
// REVOIR PARTIE DU SPAN QUI ACTIVE LES TUILES 

let spanPerSecond = document.getElementById('cookiesPerSecond').getElementsByTagName('span')
spanPerSecond[0].innerHTML = newBakery.cookiesPerSecond


let divBigCookie = document.querySelector('#bigCookie')
///////////////////////////////////////// GESTIONNAIRE DEVENEMENT AU CLIC /////////////////////////////////////////


divBigCookie.addEventListener('click', (event)=>{
    spanStock[0].innerHTML = newBakery.bakeCookies(newBakery.cookiesPerClick)
    switchBuilding(newBakery)

    let divPlusOne = document.createElement('div')
    divPlusOne.className = 'up'
    divPlusOne.innerHTML = `+${newBakery.cookiesPerClick}`
    divPlusOne.style.inset=`${event.offsetY - 20}px ${event.offsetX - 10}px`
    divBigCookie.appendChild(divPlusOne)

    divPlusOne.addEventListener('animationend', ()=>{
        divBigCookie.removeChild(divPlusOne)
    })

    audio()
    let clickSon = document.getElementsByClassName('clickSon')
    clickSon[Math.floor(Math.random() * (7-1)+1)].play()
    

})


const switchBuilding = (newBakery) => {  
    for ( let i = 0 ; i < buildings.length ; i++){
        if( newBakery.cookies >= buildings[i].cost){ // si 16 >= 15
            let divTest = document.getElementById(`building-${buildings[i].name.toLowerCase()}`)

            divTest.classList.remove('locked')
            divTest.classList.remove('disabled')
            divTest.classList.add('unlocked')
            divTest.classList.add('enable')
        }
    }
}



////////////////////////////////////////// fichiers SON click //////////////////////////////
const audio = () => {  
for (let i = 1; i < 8; i++) {
    
    var divSon = document.createElement('audio')
    divSon.src=`/assets/sounds/click${i}.mp3`
    divSon.className='clickSon'
    divBigCookie.appendChild(divSon)

}
}

///////////////////////////////////////// BOUCLE FOR /////////////////////////////////////////
const creationBuilding = () => {  
for ( let i = 0 ; i < 5 ; i++){

    let divBuilding = document.getElementById('buildings')

    let divTuile = document.createElement('div')
    
    divTuile.id=`building-${buildings[i].name.toLowerCase()}`
    divTuile.className='locked disabled invisible all'
    divBuilding.appendChild(divTuile)

    let divIcon = document.createElement('div')
    divIcon.className='icon'
    divTuile.appendChild(divIcon)
        
    let divName = document.createElement('div')
    divName.className='name'
    divName.innerHTML= buildings[i].name
    divTuile.appendChild(divName)

    let divCost = document.createElement('div')
    divCost.className='cost'
    divCost.innerHTML= buildings[i].cost
    divTuile.appendChild(divCost)

    let divNumber = document.createElement('div')
    divNumber.className='number'
    divNumber.innerHTML= newBuilding.number
    divTuile.appendChild(divNumber)
    }
}
creationBuilding()


let tutu = document.getElementsByClassName('all')

if( newBakery.cookies == 0){ 
   tutu[0].classList.remove('invisible')
   tutu[1].classList.remove('invisible')
}
if( newBakery.cookies >= 100){ 
    tutu[2].classList.remove('invisible')
 }
 if( newBakery.cookies >= 1100){ 
    tutu[3].classList.remove('invisible')
 }
 if( newBakery.cookies >= 12000){ 
    tutu[4].classList.remove('invisible')
 }




// ////////////////  Activation des tuiles et affichage des suivantes


// ///////////////   Mettre à jour la tuile dans le Store
// let divBuy = document.getElementById(`building-${buildings[i].name.toLowerCase()}`)
// divBuy.addEventListener('click', (event)=>{
  

// }    


// //////////////    Jouer un son aléatoire au clic


