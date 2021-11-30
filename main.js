const board = document.querySelector(".tabuleiro")

const firstTower = document.createElement('div')
const secondTower= document.createElement('div')
const thirdTower = document.createElement('div')

const firstDisc = document.createElement('div')
const secondDisc = document.createElement('div')
const thirdDisc = document.createElement('div')
const fourthDisc = document.createElement('div')

firstTower.innerText = 'Ola'
secondTower.innerText = 'Ola'
thirdTower.innerText = 'Ola'

board.appendChild(firstTower)
board.appendChild(secondTower)
board.appendChild(thirdTower)

firstTower.appendChild(firstDisc)
firstTower.appendChild(secondDisc)
firstTower.appendChild(thirdDisc)
firstTower.appendChild(fourthDisc)






