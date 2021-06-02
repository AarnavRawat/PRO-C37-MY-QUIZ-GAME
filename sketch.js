var canvas;
var database;
var player,playerCount,allPlayers;
var quiz,gameState;
var question;
function setup(){
  canvas = createCanvas(850,400);
  databaseObj = firebase.database();
  quiz = new Quiz();
  gameState = 0;
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  if(playerCount == 4){
    quiz.updateState(1);
    gameState = 1;
  }  
}
