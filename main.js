// let disc1 = document.getElementById('disco1');
// let disc2 = document.getElementById('disco2');
// let disc3 = document.getElementById('disco3');
// let disc4 = document.getElementById('disco4');

const estado = document.querySelectorAll("[draggable='true']")

estado.forEach((es) => {
    const selected = es.currentTarget; //armazena o clique
    console.log("selected ", selected);
    es.addEventListener('dragstart',selectElement);
})

function selectElement(event){
    this.classList.add('selecionado')
}

// disc2.addEventListener('click',selectElement);
// disc3.addEventListener('click',selectElement);
// disc4.addEventListener('click',selectElement);
