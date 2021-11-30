
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

divTorre1.setAttribute('id', 'torre1');
divTorre1.setAttribute('class', 'torre torre1');

divTorre2.setAttribute('id', 'torre2');
divTorre2.setAttribute('class', 'torre torre2');

divTorre3.setAttribute('id', 'torre3');
divTorre3.setAttribute('class', 'torre torre3');


divTorre1.appendChild(disc1);
divTorre2.appendChild(disc2);
divTorre3.appendChild(disc3);
divTorre1.appendChild(disc4);

midSection.appendChild(divTorre1);
midSection.appendChild(divTorre2);
midSection.appendChild(divTorre3);
/* FIM DOM */

// CONDIÇÃO DE VITORIA - COMEÇO - falta testar
let getMain = document.getElementById('main')
if(divTorre1.childElementCount === 2){
    let msgVitoria = document.createElement('span');
    let btnReset = document.createElement('button');

    btnReset.textContent = "Recomeçar";
    msgVitoria.innerText = "Parabéns, você ganhou!";

    msgVitoria.setAttribute('class','vitoria');
    btnReset.setAttribute('class','btnReset');
    btnReset.setAttribute('id','btnReset')

    getMain.appendChild(msgVitoria);
    getMain.appendChild(btnReset);
}
//CONDIÇÃO DE VITORIA - FIM

// COMEÇO BOTAO RESETAR - já funcional
let btn = document.getElementById('btnReset')
function btnResetar(event){
    const reset = event.target;
    if(reset.tagName == 'BUTTON'){
        divTorre1.appendChild(disc1);
        divTorre1.appendChild(disc2);
        divTorre1.appendChild(disc3);
        divTorre1.appendChild(disc4);
    }
}
btn.addEventListener('click', btnResetar);
//FIM BOTAO RESETAR













// //SELECIONANDO OS ALVOS

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
//     const clicked = event.target; // capturo o clique
//     let id = Number(event.target.id);//capturo o ID do disco clicado

//     if (clicked.tagName == 'DIV') {
//         clicked.classList.toggle('selecionado-disco');
//     }

// }

// function selectedVareta(event) {
//     const selectedTorre = event.currentTarget;
//     let quantos = selectedTorre.childElementCount; // retorna quantos elementos tem na vareta
// }

// getDisc1.addEventListener('click', selectedDisc);
// getDisc2.addEventListener('click', selectedDisc);
// getDisc3.addEventListener('click', selectedDisc);
// getDisc4.addEventListener('click', selectedDisc);

// getTorre1.addEventListener('click', selectedVareta)
// getTorre2.addEventListener('click', selectedVareta)
// getTorre3.addEventListener('click', selectedVareta)
