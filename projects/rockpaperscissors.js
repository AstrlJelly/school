userChoice = 'a full on nuke';
const getUserChoice = userInput => { if (userInput==='rock' || userInput==='paper' ||userInput==='scissors' || userInput==='a full on nuke') { 
		return userInput;
	} else {
  	console.log('that won\'t WORK.')
        } 
          userInput = userInput.toLowerCase() 
        };
        function getComputerChoice() {
          const randomNumber = Math.floor(Math.random()*3)
          switch (randomNumber) {
          case 0:
            return 'rock';
          case 1:
            return 'paper';
          case 2:
            return 'scissors';
            }
        }
        function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
          return 'It was a tie.';
        }
         if (userChoice === 'rock') {
           if (computerChoice === 'paper') {
             return 'You lose.';
            } else {
              return 'You win!';
            }
          }
          if (userChoice === 'paper') {
            if (computerChoice === 'scissors') {
              return 'You lose.';
            } else {
              return 'You win!';
            }
          }
          if (userChoice === 'scissors') {
            if (computerChoice === 'rock') {
              return 'You lose.';
            } else {
              return 'You win!';
            }
          }
          if (userChoice === 'a full on nuke') {
            return 'You win! (but you\'ve been reduced to nothing)'
          }
        }
        function playGame() {
          let userChoice = getUserChoice('rock'||'paper'||'scissors')
          let computerChoice = getComputerChoice()
          document.write(userChoice+' '+computerChoice)
          document.write(determineWinner(userChoice,computerChoice))
