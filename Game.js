class Game{
  constructor(){
  }
  gamestate(){
    var gameStateref = database.ref("gamestate")
    gameStateref.on("value",function(data){gamestate = data.val()})
 }
update(state){
  database.ref("/").update({
      gamestate:state
  })
}
start(){
  if(gamestate===0){
    player =new Player()
    player.getCount()
    form = new Form()
   form.display()
  }

}
play(){
  form.hide()
  text("Game Started",120,120)
  player.getPlayerInfo();


  if(allPlayers !==undefined){

    var display_Position = 130
    text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,display.display_Position)
    
  }
if(keyDown ("UP_ARROW") && player.index !==null){

  player.distance+=50
  player.update
}


}


}