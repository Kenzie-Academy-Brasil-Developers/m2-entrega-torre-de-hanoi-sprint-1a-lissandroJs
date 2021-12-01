/*INICIO CAPTURA DOS ELEMENTOS GLOBAIS E DEFINIÇÕES*/
const midSection = document.getElementById('middle'); //usada no appendChild do DOM - linha 44
const selectAllTowers = document.getElementsByClassName('torre'); //Usada na função de movimentação - linha 66
const getMain = document.getElementById('main'); //Usada no appendChild do button reset - linha 116
const WinMsg = document.getElementById('vitoria'); //Usada para chamar a mensagem de vítoria na function verifyVictory() - linha 114
//towers e disk precisaram ser preenchidas com "null", pois vão receber um objeto
let towers = null;
let disk = null;
/*FIM CAPTURA DOS ELEMENTOS GLOBAIS E DEFINIÇÕES*/


let counter = 0
let divTorre1 = document.createElement('div');
let divTorre2 = document.createElement('div');
let divTorre3 = document.createElement('div');
let disk1 = document.createElement('div');
let disk2 = document.createElement('div');
let disk3 = document.createElement('div');
let disk4 = document.createElement('div');

disk1.setAttribute('id', '4');
disk1.setAttribute('class', 'disco disco-vermelho');

disk2.setAttribute('id', '3');
disk2.setAttribute('class', 'disco disco-verde');

disk3.setAttribute('id', '2');
disk3.setAttribute('class', 'disco disco-azul');

disk4.setAttribute('id', '1');
disk4.setAttribute('class', 'disco disco-roxo');

divTorre1.setAttribute('id', 'torre1');
divTorre1.setAttribute('class', 'torre torre1');

divTorre2.setAttribute('id', 'torre2');
divTorre2.setAttribute('class', 'torre torre2');

divTorre3.setAttribute('id', 'torre3');
divTorre3.setAttribute('class', 'torre torre3');

divTorre1.appendChild(disk1);
divTorre1.appendChild(disk2);
divTorre1.appendChild(disk3);
divTorre1.appendChild(disk4);

midSection.appendChild(divTorre1);
midSection.appendChild(divTorre2);
midSection.appendChild(divTorre3);

//seleção de torre
function selectedTower(event) {
    //ident e armaz torre clicada
    let clickedTower = event.currentTarget;
    //retorna a torre clicada para ser usado na função de movimentar o disco
    return clickedTower;
}

//seleção de disco
function selectedDisc(event) {
    //identifica e armazena em qual torre estou
    let clickedTower = event.currentTarget;
    //identifica o ultimo elemento na torre clicada e armazena
    let clickedDisc = clickedTower.lastElementChild;

    //retorno o valor obtido acima para ser usado na função de movimentar o disco
    return clickedDisc;
}


const contador = document.createElement('p')
contador.classList.add = ("counter")
getMain.appendChild(contador)

//função de movimentação dos discos
function diskMovement() {
    for (let index = 0; index < selectAllTowers.length; index++) {

        let towers = selectAllTowers[index];
        //aplico o eventlistener para cada indice percorrido no for
        
        towers.addEventListener('click', function(event){
            
            towers = selectedTower(event); //peguei o evento do clique retornado na função selectedTower
            //preciso verificar quantos filhos tem nessa torre recebida/clicada
            
            let verifyChild = towers.childElementCount;//retorna um number
            //condição de seleção do disco
                
            if (disk === null && verifyChild > 0) 
            

            { //se verdadeiro, armazenar o disco atual em disk e add classe
                disk = selectedDisc(event);
                
                disk.classList.add('selecionado-disco');
                counter++
                contador.innerText = counter
            }
            else if (verifyChild > 0) 
            {
                
                    
                let child = selectedDisc(event);
                
                let diskSize = disk.clientWidth; // pega o disco armazenado na variavel global, pega o tamanho dela e armazena

                let childSize = child.clientWidth; // pega o disco da torre atual, pega o tamanho e armazena

                if (diskSize < childSize) //verifico os tamanhos
                {
                    
                    towers.appendChild(disk);
                    disk.classList.remove('selecionado-disco');
                    disk = null;
                    towers = null;
                    
                }
                else 
                {
                    disk.classList.remove('selecionado-disco')
                    disk = null;
                    towers = null;
                    
                }
            } 
            else if (disk != null)
            {
                towers.appendChild(disk);
                disk.classList.remove('selecionado-disco');
                disk = null;
                torre = null;
                
            }
            verifyVictory()
               
        })
    }
}
diskMovement();

function verifyVictory() {
    if (divTorre3.childElementCount == 4) 
    {
        let msgVitoria = document.createElement('h1');

        msgVitoria.innerText = "Parabéns, você ganhou!";
        msgVitoria.setAttribute('class', 'vitoria');

        getMain.appendChild(msgVitoria);
        setTimeout(function () {
            msgVitoria.innerText = "";
        }, 5000)
    }
    return;
}


//botão de reset
let btnReset = document.createElement('button');
btnReset.setAttribute('class', 'btnReset');
btnReset.setAttribute('id', 'btnReset')
btnReset.textContent = "Recomeçar";

getMain.appendChild(btnReset);
const btn = document.getElementById('btnReset')


function btnResetar(event) {
    const reset = event.target;
    if (reset.tagName == 'BUTTON') 
    {
        counter = 0
        contador.innerText = counter
        divTorre1.appendChild(disk1);
        divTorre1.appendChild(disk2);
        divTorre1.appendChild(disk3);
        divTorre1.appendChild(disk4);
    }
}
btn.addEventListener('click', btnResetar);


