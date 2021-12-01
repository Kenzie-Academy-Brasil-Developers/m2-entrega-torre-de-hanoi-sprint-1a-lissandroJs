
/* INICIO DOM */
let midSection = document.getElementById('middle');

let divTorre1 = document.createElement('div');
let divTorre2 = document.createElement('div');
let divTorre3 = document.createElement('div');
let disc1 = document.createElement('div');
let disc2 = document.createElement('div');
let disc3 = document.createElement('div');
let disc4 = document.createElement('div');

disc1.setAttribute('id', '4');
disc1.setAttribute('class', 'disco disco-vermelho');

disc2.setAttribute('id', '3');
disc2.setAttribute('class', 'disco disco-verde');

disc3.setAttribute('id', '2');
disc3.setAttribute('class', 'disco disco-azul');

disc4.setAttribute('id', '1');
disc4.setAttribute('class', 'disco disco-roxo');

divTorre1.setAttribute('id', '1');
divTorre1.setAttribute('class', 'torre torre1');

divTorre2.setAttribute('id', '2');
divTorre2.setAttribute('class', 'torre torre1');

divTorre3.setAttribute('id', '3');
divTorre3.setAttribute('class', 'torre torre1');


const suporte1 = document.createElement("div")
suporte1.classList.add('suporte')
suporte1.setAttribute('id', '1');

const suporte2 = document.createElement("div")
suporte2.classList.add('suporte')
suporte2.setAttribute('id', '2');


const suporte3 = document.createElement("div")
suporte3.classList.add('suporte')
suporte3.setAttribute('id', '3');

midSection.appendChild(suporte1)
midSection.appendChild(suporte2)
midSection.appendChild(suporte3)


divTorre1.appendChild(disc1);
divTorre1.appendChild(disc2);
divTorre1.appendChild(disc3);
divTorre1.appendChild(disc4);


midSection.appendChild(divTorre2);
midSection.appendChild(divTorre3);

suporte1.appendChild(divTorre1)
suporte2.appendChild(divTorre2)
suporte3.appendChild(divTorre3)

const allDisc = document.querySelectorAll(".disco")

const allTower = document.querySelectorAll(".suporte")
console.log(allTower)



allTower.forEach(function(disc){
    disc.addEventListener("click" , todasTorre)

})




// function torreAltual (e){

//     if(e.target.childElementCount == 0 || e.currentTarget.lastElementChild.id > e.target.childElementCount){
       
        
//     }

//     console.log()
// }




function todasTorre(e){
    

    const torre1 = divTorre1.lastElementChild.clientWidth
   
    const torre2 = divTorre2.lastElementChild
    const torre3 =divTorre3.lastElementChild

    

    let torre = e.currentTarget.lastElementChild
   
    console.log(torre1)
    if(Number(torre.id) == 1){
        console.log("esta no primeiro")

        console.log(torre.lastElementChild.clientWidth)



       
        

    }


    else if(Number(torre.id) == 2){
        console.log("esta no segundo")
        console.log(torre2)
        console.log(torre)
    }

    else if(Number(torre.id) == 3){
        console.log("esta no terceiro")
        console.log(torre3)
        console.log(torre)
    }
    
    if( torre.lastElementChild == null || torre.lastElementChild.clientWidth >torre.lastElementChild.clientWidth){
        divTorre2.appendChild(disc4)
        
        console.log(torre)
    }

    if( torre.lastElementChild == null || torre.lastElementChild.clientWidth >torre.lastElementChild.clientWidth){
        divTorre3.appendChild(disc4)
      
    }
     if(torre.lastElementChild == null || torre.lastElementChild.clientWidth > torre.lastElementChild.clientWidth){
        divTorre1.appendChild(disc4)
        
        
    }



    

    // if( torre.lastElementChild == null || torre.lastElementChild.clientWidth > torre.lastElementChild.clientWidth){
    //     divTorre3.appendChild(disc3)
      
    // }
    // if(torre.lastElementChild == null || torre.lastElementChild.clientWidth > torre.lastElementChild.clientWidth){
    //     divTorre1.appendChild(disc3)
    // }



    // if( torre.lastElementChild == null || torre.lastElementChild.clientWidth >torre.lastElementChild.clientWidth){
    //     divTorre2.appendChild(disc2)
        
       
    // }

    // if( torre.lastElementChild == null || torre.lastElementChild.clientWidth > torre.lastElementChild.clientWidth){
    //     divTorre3.appendChild(disc2)
      
    // }
    // if(torre.lastElementChild == null || torre.lastElementChild.clientWidth > torre.lastElementChild.clientWidth){
    //     divTorre1.appendChild(disc2)
    // }




    // if( torre.lastElementChild == null || torre.lastElementChild.clientWidth >torre.lastElementChild.clientWidth){
    //     divTorre2.appendChild(disc1)
        
       
    // }

    // if( torre.lastElementChild == null || torre.lastElementChild.clientWidth > torre.lastElementChild.clientWidth){
    //     divTorre3.appendChild(disc1)
      
    // }
    // if(torre.lastElementChild == null || torre.lastElementChild.clientWidth > torre.lastElementChild.clientWidth){
    //     divTorre1.appendChild(disc1)
    // }


    // console.log(torre.lastElementChild.clientWidth)
    // console.log(disc4.clientWidth)
}





// function addTower(evt){
    
    
//     if( suporte1.childElementCount == 0||divTorre1.lastElementChild.id > Number(evt.currentTarget.id )){
//         divTorre1.appendChild(evt.currentTarget)
        
//         console.log(divTorre1.lastElementChild.id)
//     }
   
//     if(divTorre2.childElementCount == 0 ||divTorre2.lastChild.id < Number(evt.currentTarget.id )){
//         divTorre2.appendChild(evt.currentTarget)
        
//         console.log()
//         console.log(evt.currentTarget.id)
//         console.log(divTorre2.lastElementChild.id)

//     }
//     if( divTorre3.childElementCount == 0 ||divTorre3.lastElementChild.id < Number(evt.currentTarget.id ) ){
//         divTorre3.appendChild(evt.currentTarget)
//         console.log(divTorre3.lastElementChild.id)
//     }
   


// }




/* FIM DOM */



//SELECIONANDO OS ALVOS

// //disco
// let getDisc1 = document.getElementById('4');
// let getDisc2 = document.getElementById('3');
// let getDisc3 = document.getElementById('2');
// let getDisc4 = document.getElementById('1');
// //vareta
// let getTorre1 = document.getElementById('torre1')
// let getTorre2 = document.getElementById('torre2')
// let getTorre3 = document.getElementById('torre3')

// function selectedDisc(event) {
//     const clicked = event.currentTarget;

//     if (clicked.tagName == 'DIV') {
//         clicked.classList.toggle('selecionado-disco')
//     }
// }

// function selectedVareta(event) {
//     const selectedTorre = event.target;

//     if (selectedTorre.className == 'TORRE') {
//         selectedTorre.classList.toggle('selecionado-vareta')
//     }
// }

// getDisc1.addEventListener('click', selectedDisc);
// getDisc2.addEventListener('click', selectedDisc);
// getDisc3.addEventListener('click', selectedDisc);
// getDisc4.addEventListener('click', selectedDisc);

// getTorre1.addEventListener('click', selectedVareta)
// getTorre2.addEventListener('click', selectedVareta)
// getTorre3.addEventListener('click', selectedVareta)
