let userName = '';
  //Greets user, with a backup if no name is input
userName ? document.write(`Hello, ${userName}!`) : document.write('Hello!');
let userQuestion = 'Could strange matter exist?';
userName ? console.log(userName+', '+userQuestion) : console.log(userQuestion);
  //Generates a random number from 0-7
let randomNumber = Math.floor(Math.random()*8);
let eightBall = '';
 switch (randomNumber) {
    case 0:
    eightBall = 'It is certain';
    break;
    case 1:
    eightBall = 'It is decidedly so';
    break;
    case 2:
    eightBall = 'Reply hazy try again';
    break;
    case 3:
    eightBall = 'Cannot predict now';
    break;
    case 4:
    eightBall = 'Do not count on it';
    break;
    case 5:
    eightBall = 'My sources say no';
    break;
    case 6:
    eightBall = 'Outlook not so good';
    break;
    case 7:
    eightBall = 'Signs point to yes';
    break;
 }
document.write(' '+eightBall);
