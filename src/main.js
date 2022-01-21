#!/usr/bin/env node
class Player {
    constructor (choice) {
        this.choice = choice;
    }
}

class Computer {
    constructor () {
        let options = ['rock', 'paper', 'scissors'];
        let r = Math.random()
        this.choice = options[Math.floor(Math.random()*options.length)];
    }
}

class roshambo {
    constructor (pChoice, compChoice) {
        this.playerChoice = pChoice
        this.computerChoice = compChoice
    }

    playGame () {
        if (this.computerChoice == `rock` && this.playerChoice == `paper`) {
            return `~Player wins.~`;
        }
        else if (this.computerChoice == `rock` && this.playerChoice == `scissors`) {
            return `~Computer wins.~`;
        }
        else if (this.computerChoice == `paper` &&  this.playerChoice == `rock`) {
            return `~Computer wins.~`;
        }
        else if (this.computerChoice == `paper` &&  this.playerChoice == `scissors`) {
            return `~Player wins.~`;
        }
        else if (this.computerChoice == `scissors` &&  this.playerChoice == `rock`) {
            return `~Player wins.~`;
        }
        else if (this.computerChoice == `scissors` &&  this.playerChoice == `paper`) {
            return `~Computer wins.~`;
        }
        else if (this.computerChoice === this.playerChoice) {
            return `~Round is a draw.~`;
        }
    }

    winRound (winner) {
        return `~${winner} wins.~`;
    }

    drawRound () {
        return `~Round is a draw.~`;
    }
    
}

// Handling Command Line Player Input
// run "npm i yargs" first
const yargs = require(`yargs/yargs`)
const { hideBin } = require(`yargs/helpers`)
const argv = yargs(hideBin(process.argv)).argv

let newPlayer = new Player(argv.move);
let newComputer = new Computer;
let newRoshambo = new roshambo(newPlayer.choice, newComputer.choice);

console.log('Playing a game of Roshambo against the computer.')
console.log(`Player plays ${newPlayer.choice}!`);
console.log(`Computer plays ${newComputer.choice}!`);
console.log(newRoshambo.playGame());
