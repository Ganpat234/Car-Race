class Game  {
    constructor(){

    }
    getState(){
        var gameStateRef=database.ref('gameState')
        gameStateRef.on("value", function(data){
        gameState=data.val()
        })
    }
    update(state){
      database.ref('/').update({
          gameState:state
      })
    }
    start(){
        if(gameState===0){
          player=new Player()
          player.getCount()
          form=new Form()
          form.display()
        }
    }
    play(){
      form.hide()
      textSize(30)
      text("Start Game", 200,100)
      Player.getPlayerInfo()
      console.log(allPlayers)
      if(allPlayers!==undefined){
        var displayPosition=150
        
        for(var plr in allPlayers){
          if(plr==="player"+player.index)
          fill("red")
          else
          fill("blue")
          
         displayPosition+=30
          textSize(20)
          text(allPlayers[plr].name+":"+allPlayers[plr].distance,200,displayPosition)
        }

      }
      if(keyIsDown(UP_ARROW) && player.index!==null){
       player.distance+=50
       player.update()
      }
    }
}