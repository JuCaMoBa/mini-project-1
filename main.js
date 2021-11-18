const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const userPointSpan = document.getElementById('userPoints');
const cpuPointSpan = document.getElementById('cpuPoints');
const creatorP = document.getElementById('creator');
const winnerP = document.getElementById('winner');
const userP = document.getElementById('user');
const cpuP = document.getElementById('cpu');
const wonP = document.getElementById('won');

let userPoint = 0;
let cpuPoints = 0;

const update = (userElection, cpuElection, finalwinner) => {
    userP.innerText = userElection;
    cpuP.innerText = cpuElection;
    wonP.innerText = finalwinner;
}

const getCpuChoice = () => {
    const choices = ['r' , 'p' , 's'];
    let randonNumber = Math.floor(Math.random()* 3);
    let cpuChoice = choices[randonNumber];
    return cpuChoice;
}

const checkWinner = (userChoice, cpuChoice) => {
    switch (userChoice + cpuChoice) {
        case  'rr':
            console.log(`tu eleccion es: ${userChoice} y la eleccion de la CPU es: ${cpuChoice} han Empatado`);
            update('rock','rock','empatado')
            break;
        case  'rp':
            console.log(`tu eleccion es: ${userChoice} y la eleccion de la CPU es: ${cpuChoice} has perdido`);
            update('rock','paper','perdido')
            lost();
            break;
        case  'rs':
            console.log(`tu eleccion es: ${userChoice} y la eleccion de la CPU es: ${cpuChoice} has ganado`);
            update('rock','scissors','ganado')
            won();
            break;
    
        case  'pp':
            console.log(`tu eleccion es: ${userChoice} y la eleccion de la CPU es: ${cpuChoice} han Empatado`);
            update('paper','paper','empatado')
            break;
        case  'pr':
            console.log(`tu eleccion es: ${userChoice} y la eleccion de la CPU es: ${cpuChoice} has ganado`);
            update('paper','rock','ganado')
            won();
            break;
        case  'ps':
            console.log(`tu eleccion es: ${userChoice} y la eleccion de la CPU es: ${cpuChoice} has perdido`);
            update('paper','scissors','perdido')
            lost();
            break;
    
        case  'ss':
            console.log(`tu eleccion es: ${userChoice} y la eleccion de la CPU es: ${cpuChoice} han Empatado`);
            update('scissors','scissors','empatado')
            break;
        case  'sr':
            console.log(`tu eleccion es: ${userChoice} y la eleccion de la CPU es: ${cpuChoice} has perdido`);
            update('scissors','rock','perdido')
            lost();
            break;
        case  'sp':
            console.log(`tu eleccion es: ${userChoice} y la eleccion de la CPU es: ${cpuChoice} has ganado`);
            update('scissors','paper','ganado')
            won();
            break;
    
        default:
            break;
    }
    
}

const won = () => {
    userPoint++;
    userPointSpan.innerText = userPoint;
}

const lost = () => {
    cpuPoints++;
    cpuPointSpan.innerText = cpuPoints;
}

const winnerShow = () => {
    creatorP.style.display = 'none'
    winnerP.style.display = 'block'
}


let userChoice;
rock.addEventListener('click', () => {
    userChoice = 'r' 
    let cpuChoice = getCpuChoice()
    checkWinner(userChoice,cpuChoice);
    winnerShow();
})
paper.addEventListener('click', () => {
    userChoice = 'p'
    let cpuChoice = getCpuChoice()
    checkWinner(userChoice,cpuChoice);
    winnerShow();
})
scissors.addEventListener('click', () => {
    userChoice = 's'
    let cpuChoice = getCpuChoice()
    checkWinner(userChoice,cpuChoice);
    winnerShow();
})



