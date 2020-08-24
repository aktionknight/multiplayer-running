class Game {
constructor (){

}

getState()
{
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value",function(data){
        gameState = data.val();
    })

}
update(state){
    database.ref('/').update({
        gameState:state
    })
}

async start(){
    if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
        }
        
        form = new Form();
        form.display()

    }
    
  
runner1 = createSprite(200,700,30,50)
runner1.addImage("runner1",runnerI)
runner1.scale = 2
//runner1.velocityY = 9

runner2 = createSprite(200,500,30,50)
runner2.addImage("runner2",runnerI)
runner2.scale = 2
//runner2.velocityY = 9


//runner4.velocityY = 9

//ground = createSprite(displayWidth/2,displayHeight- 100,displayHeight*2,50)


    runners = [runner1,runner2]
   

}

play()
{

    form.hide();
    //ground = createSprite(displayWidth,900,displayWidth,30)
    
    Player.getPlayerInfo();
    if(allPlayers !== undefined){
        background("white");
        rect(1000,800,4000,500)
    
        
        var index = 0;
        var x  = 200
        var y  = 700;



        
        for (var plr in allPlayers){
            index = index + 1;
            x = displayWidth - allPlayers[plr].distance ;
            y += 100

            //runner1.collide(track)
           // runner2.collide(track)

           runners[index-1].x = x;
            runners[index-1].y = y;
            runners[index-1].velocityY = 2;
            runners[index - 1].velocityY = 2;

           

            if(index === player.index){

                stroke(10);
                fill("red");
                ellipse(x,y,60,60)

                runners[index-1].shapeColor = "red"
camera.position.x = runners[index-1].x;
camera.position.y = runners[index-1].y;
player.x = player.x
player.y = player.y

if(keyDown("space"))
{
    runners[index-1].velocityY = -8
}
            }


    }

player.velocityY = 9



}
if(keyIsDown(RIGHT_ARROW) && player.index !== null){
    player.distance -= 10;
    player.update();
    //player.x += 4
    
}



if(player.distance > 4300){
    gameState = 2;
}




drawSprites();
}



end(){
    console.log("Run Ended");
    game.update(2);
    
}



}
