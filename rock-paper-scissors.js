const score = {
  win: 0,
  loose: 0,
  tie: 0,
};
update();
document.querySelector('.autoplaypro')
.addEventListener('click',()=>{
  autoplay();
});
let isauto=false;
let id;
function autoplay(){
  if (!isauto){
      id= setInterval(()=>{
          const playermove=pickmove();
          playgame(playermove);
      },1000);
      isauto=true
  }
  else{
      clearInterval(id);
      isauto=false;
  } 
}
document.querySelector('.js-rock')
.addEventListener('click',()=>{
  playgame('rock');
});
document.querySelector('.js-paper')
.addEventListener('click',()=>{
  playgame('paper');
});
document.querySelector('.js-scissors')
.addEventListener('click',()=>{
  playgame('scissors');
});
document.body.addEventListener('keydown',event=>{
if (event.key==='r') {
  playgame('rock');
}
});
document.body.addEventListener('keydown',event=>{
if (event.key==='p') {
  playgame('paper');
}
});
document.body.addEventListener('keydown',event=>{
if (event.key==='s') {
  playgame('scissors');
}
});
function playgame(ourmove) {
  const move = pickmove();
  let result = "";
  if (ourmove === "scissors") {
    if (move === "rock") {
      result = "you lose 😔 waste fellow";
    } else if (move === "paper") {
      result = "you win congratulation buddy 😊";
    } else if (move === "scissors") {
      result = "your game is tie 🙅‍♂️";
    }
  } else if (ourmove === "paper") {
    if (move === "rock") {
      result = "you win congratulation buddy 😊";
    } else if (move === "paper") {
      result = "your game is tie 🙅‍♂️";
    } else if (move === "scissors") {
      result = "you lose 😔 waste fellow";
    }
  } else if (ourmove === "rock") {
    if (move === "rock") {
      result = "your game is tie 🙅‍♂️";
    } else if (move === "paper") {
      result = "you lose 😔 waste fellow";
    } else if (move === "scissors") {
      result = "you win congratulation buddy 😊";
    }
  }
  if (result === "you win congratulation buddy 😊") {
    score.win = score.win + 1;
  } else if (result === "you lose 😔 waste fellow") {
    score.loose += 1;
  } else if (result === "your game is tie 🙅‍♂️") {
    score.tie += 1;
  }
  const gamenum = score.win + score.loose + score.tie;
  update();
  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(".js-move").innerHTML = ` you choose
<img src="${ourmove}-emoji.png" class="icon-button">
computer choose
<img src="${move}-emoji.png" class="icon-button">`
}
document.querySelector('.resetpro')
.addEventListener('click',()=>{
  score.win=0;
  score.loose=0;
  score.tie=0;
  update();
});
function update() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `win:${score.win},loose:${score.loose},tie:${score.tie}`;
}

function pickmove() {
  const num = Math.random();
  let move = "";
  if (num >= 0 && num < 1 / 3) {
    move = "rock";
  } else if (num >= 1 / 3 && num < 2 / 3) {
    move = "paper";
  } else if (num >= 2 / 3 && num < 1) {
    move = "scissors";
  }
  return move;
}