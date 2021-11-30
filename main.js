//chamar o elemento a ser clicado
//usar o event listener para identificar o clique (tanto no disco, quanto na torre)




// let disc1 = document.getElementById('disco1');
// let disc2 = document.getElementById('disco2');
// let disc3 = document.getElementById('disco3');
// let disc4 = document.getElementById('disco4');

const selectDisc = document.querySelectorAll("[draggable='true']");

function selected(e){
    const clicked = e.target;
    console.log(`cliquei no ${e.target}`);
}
selectDisc.addEventListener('click', selected);


// disc2.addEventListener('click',selectElement);
// disc3.addEventListener('click',selectElement);
// disc4.addEventListener('click',selectElement);
