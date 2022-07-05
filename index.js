//player 1
let randomNumber = Math.ceil(Math.random() * 6)

let randomDiceImage = 'dice' + randomNumber + '.jpeg'

let randomImageSource = 'images/' + randomDiceImage

let image = document.querySelectorAll('img')[0]
image.setAttribute('src', randomImageSource)


let randomNumber1 = Math.ceil(Math.random() * 6)

let randomDiceImage1 = 'dice' + randomNumber1 + '.jpeg'

let randomImageSource1 = 'images/' + randomDiceImage1

let image1 = document.querySelectorAll('img')[1]
image1.setAttribute('src', randomImageSource1)



if(randomNumber < randomNumber1){
    document.querySelector('h2').innerText = 'Player1 Win'
}else if(randomNumber < randomNumber1){
    document.querySelector('h2').innerText = 'Player2 Win'
}else {
    document.querySelector('h2').innerText = 'It is a draw'
}

// let winner = document.querySelector('.winner')
// if(randomNumber < randomNumber1){
//     winner.setAttribute('player1 win')
// }else('player2 won')
// winner.innerText = 'Winner'

// let LOAD = document.querySelector('.load')

// let refresh = function(){
//     location.reload();
// }
// LOAD.addEventlistener('click', refresh)

let reload = document.querySelector('.load')

function refresh(){
    location.reload()
}

reload.addEventListener('click', refresh)

