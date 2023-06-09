//prevent animation on load
setTimeout(() =>{
  document.body.classList.remove('preload');
}, 500);
//DOM
const btnRules = document.querySelector('.rules-btn');
const btnClose = document.querySelector('.close-btn');
const modalRules = document.querySelector('.modal');
const CHOICES = [
{
  name: 'paper', 
  beats: 'rock'
},
{
  name: 'scissors', 
  beats: 'paper'
},
{
  name: 'rock', 
  beats: 'scissors'
}

]
const choiceButtons = document.querySelectorAll('.choice-btn');
const gameDiv = document.querySelector('.game');
const resultsDiv = document.querySelector('.results');
const resultDivs = document.querySelectorAll('.results_result');
const resultWinner = document.querySelector('results_winner');
const resultText = document.querySelector('results_text')


//Game Logic
choiceButtons.forEach(button =>{
  button.addEventListener('click', () =>{
    const choiceName = button.dataset.choice;
    const choice = CHOICES.find(choice => choice.name === choiceName)
    choose (choice)
  })
})

function choose (choice){
  const aiChoice = aiChoose()
  displayResults([choice, aiChoice]);
  displayWinner([choice, aiChoice]);
}
function aiChoose() {
  const rand = Math.floor(Math.random() * CHOICES.length)
  return CHOICES[rand];
}
function displayResults (results){
  resultDivs.forEach((resultsDiv, idx) =>{
    setTimeout(() => {
      resultsDiv.innerHTML = `
      <div class = "choice ${results[idx].name}">
      <img src = "images/icon-${results[idx].name}.svg" alt = "${results[idx].name}"/>
      </div>    
      `;
    }, idx * 1000);
  });
  gameDiv.classList.toggle('hidden')
  resultsDiv.classList.toggle('hidden')
}

function displayWinner(results){
  setTimeout(() => {
    const userWins = isWinner(results);
    const aiWins = isWinner(results.reverse());
      if(userWins){
        resultText.innerText = "you win"
      } else if(aiWins){
        resultText.innerText = "you lose"
      } else{
        resultText.innerText = "draw"
      }
  }, 1000);
  resultWinner.classList.toggle('hidden')
  resultsDiv.classList.toggle('show-winner')
}
function isWinner(results){
  return results[0].beats === results[1].name;
}

//show/hide rules
btnRules.addEventListener('click', () =>{
  modalRules.classList.toggle('show-modal')
});
btnClose.addEventListener('click', () =>{
  modalRules.classList.toggle('show-modal')
});