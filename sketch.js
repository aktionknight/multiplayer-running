var canvas,backgroundImage;
var gameState = 0;
var playerCount = 0;
var database;
var form  ,player , game
var allPlayers;
var runner1,runner2,runner3,runner4,runners;
var runnerI
var ground

function preload()
{

    runnerI = loadImage("images/pixil-frame-0.png")
   
}






function setup(){
    database = firebase.database();
    console.log(database)
    createCanvas(displayWidth-20,displayHeight-30);
    game = new Game();
    game.getState();
    game.start();

    

}

function draw(){
   

    
if(playerCount === 2){
    game.update(1);

}

if(gameState === 1){
    clear ();
    game.play();
}

if(gameState === 2){

    game.end();

}

console.log(gameState);

}



