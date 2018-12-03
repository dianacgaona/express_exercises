const express = require('express');
const app = express();
app.get('/:userChoice', (req, res) => {
  let user = req.params.userChoice;
  let options = ['rock', 'paper', 'scissors'];
  let computer = options[Math.floor(Math.random() * options.length)];
  let result;
  if (user === computer) {
    result = "It's a tie!";
  } else if (user === 'paper' && computer === 'rock') {
    result = 'You won';
  } else if (user === 'paper' && computer === 'scissors') {
    result = 'You lost';
  } else if (user === 'rock' && computer === 'paper') {
    result = 'You lost';
  } else if (user === 'rock' && computer === 'scissors') {
    result = 'You won';
  } else if (user === 'scissors' && computer === 'rock') {
    result = 'You lost';
  } else if (user === 'scissors' && computer === 'paper') {
    result = 'You won';
  }

  res.send({ user: user, computer: computer, result: result });
});

app.listen(8000, () => {
  console.log('You are listening to port 8000');
});
