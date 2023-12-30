const computerchoicedisplay = document.getElementById('computer-choice')
const userchoicedisplay = document.getElementById('user-choice')
const result = document.getElementById('result')

const possiblechoices = document.querySelectorAll('button')

let userchoice
let computerchoice
let final

possiblechoices.forEach(possiblechoices => possiblechoices.addEventListener('click', (e) => {
    userchoice = e.target.id
    userchoicedisplay.innerHTML = userchoice
    generatecomputerchoice()
    results()
    color()
} ))

function generatecomputerchoice() {
    const random = Math.floor(Math.random() * 3 ) + 1

    if (random === 1){
        computerchoice = 'rock'
    }
    if (random === 2){
        computerchoice = 'scissors'
    }
    if (random === 3){
        computerchoice = 'paper'
    }

    computerchoicedisplay.innerHTML = computerchoice
}

function results(){
    if (userchoice == computerchoice){
        final = 'it is a draw'
    }
    else if (userchoice === 'rock' && computerchoice === 'scissors'){
        final = "you win"

    }
    else if (userchoice === 'rock' && computerchoice === 'paper'){
        final = "you lost"

    }
    else if (userchoice === 'paper' && computerchoice === 'scissors'){
        final = "you lost"

    }
    
    
    else if (userchoice === 'paper' && computerchoice === 'rock'){
        final = "you win"

    }
    else if (userchoice === 'scissors' && computerchoice === 'rock'){
        final = "you lost"

    }
    else if (userchoice === 'scissors' && computerchoice === 'paper'){
        final = "you win"

    }

    result.innerHTML = final
}


function color(){
    if (final ==="you win"){
        result.style.color = 'blue'
    }
    else if (final ==="you lost"){
        result.style.color = 'red'
    }
    else{
        result.style.color = 'black'
    }

    

}