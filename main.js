//chamar o elemento a ser clicado (disco) e o que vai ser selecionado (vareta)
//usar o event listener para identificar o clique (tanto no disco, quanto na torre)

//disco
let disc1 = document.getElementById('disco1');
let disc2 = document.getElementById('disco2');
let disc3 = document.getElementById('disco3');
let disc4 = document.getElementById('disco4');
//vareta
let torre1 = document.getElementById('torre1')
let torre2 = document.getElementById('torre2')
let torre3 = document.getElementById('torre3')

function selectedDisc(event) {
    const clicked = event.currentTarget;

    if (clicked.tagName == 'DIV') {
        clicked.classList.toggle('selecionado-disco')
    }
}

function selectedVareta(event) {
    const selectedTorre = event.target;

    if (selectedTorre.tagName == 'DIV') {
        selectedTorre.classList.toggle('selecionado-vareta')
    }
}

disc1.addEventListener('click', selectedDisc);
disc2.addEventListener('click', selectedDisc);
disc3.addEventListener('click', selectedDisc);
disc4.addEventListener('click', selectedDisc);

torre1.addEventListener('click', selectedVareta)
torre2.addEventListener('click', selectedVareta)
torre3.addEventListener('click', selectedVareta)


function torres(torre1, torre2, torre3) {

}