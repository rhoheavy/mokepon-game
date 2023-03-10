
let playerAttack = ''
let rivalAttack = ''
let playerLives = 3
let rivalLives = 3


function startGame() {
  let buttonPetPlayer = document.getElementById('button-select-pet')
  buttonPetPlayer.addEventListener('click', selectPetPlayer)

  let buttonSelectFire = document.getElementById('button-select-fire')
  buttonSelectFire.addEventListener('click', fireAttack)
  let buttonSelectWater = document.getElementById('button-select-water')
  buttonSelectWater.addEventListener('click', waterAttack)
  let buttonSelectEarth = document.getElementById('button-select-earth')
  buttonSelectEarth.addEventListener('click', earthAttack)



}

function selectPetPlayer() {

  let inputHipodoge = document.getElementById('hipodoge')
  let inputCapipepo = document.getElementById('capipepo')
  let inputRatigueya = document.getElementById('ratigueya')

  let spanPlayerPet = document.getElementById('player-pet')

  if (inputHipodoge.checked) {
    spanPlayerPet.innerHTML = 'Hipodoge'
  } else if (inputCapipepo.checked) {
    spanPlayerPet.innerHTML = 'Capipepo'
  } else if (inputRatigueya.checked) {
    spanPlayerPet.innerHTML = 'Ratigueya'
  } else {
    alert('Please, select a Pet')
  }


  generateRivalPet()

}

function generateRivalPet() {
  let randomPet = random(1, 3)
  let spanRivalPet = document.getElementById('rival-pet')

  if (randomPet == 1) {
    spanRivalPet.innerHTML = 'Hipodoge'
  } else if (randomPet == 2) {
    spanRivalPet.innerHTML = 'Capipepo'
  } else {
    spanRivalPet.innerHTML = 'Ratigueya'
  }

}

function generateRivalAttack() {
  let randomAttack = random(1, 3)

  if (randomAttack == 1) {
    rivalAttack = 'Fire'
  } else if (randomAttack == 2) {
    rivalAttack = 'Water'
  } else {
    rivalAttack = 'Earth'
  }
  battle()
  
}

function fireAttack() {
  playerAttack = 'Fire'
  generateRivalAttack()
}

function waterAttack() {
  playerAttack = 'Water'
  generateRivalAttack()
}

function earthAttack() {
  playerAttack = 'Earth'
  generateRivalAttack()
}

function battle() {
  let spanPlayerLives = document.getElementById('span-player-lives')
  let spanRivalLives = document.getElementById('span-rival-lives')



  if (playerAttack == 'Fire' && rivalAttack == 'Earth' || playerAttack == 'Water' && rivalAttack == 'Fire' || playerAttack == 'Earth' && rivalAttack == 'Water') {
    createMessage('. You Win 😊 ')
    rivalLives--
    spanRivalLives.innerHTML = rivalLives
  } else if (playerAttack == rivalAttack) {
    createMessage('. You are tied 🤓 ')
  } else {
    createMessage('. You lost 😢 ')
    playerLives--
    spanPlayerLives.innerHTML = playerLives
  }

  checkLives()

}

function checkLives() {
  if (rivalLives == 0) {
    finalMessage('Congratulations! You won the game! 🎉')
  } else if (playerLives == 0) {
    finalMessage('You lost the game, Better luck next time! 😿 ')
  }
}

function createMessage(battleResult) {
  let messagesSection = document.getElementById('messages')

  let messageParagraph = document.createElement('p')
  messageParagraph.innerHTML = 'Your pet attacked with ' + playerAttack + ', the rivals pet attacked with ' + rivalAttack + battleResult
  messagesSection.appendChild(messageParagraph)


}

function finalMessage(finalResult) {
  let messagesSection = document.getElementById('messages')

  let messageParagraph = document.createElement('p')
  messageParagraph.innerHTML = finalResult
  messagesSection.appendChild(messageParagraph)


}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', startGame)