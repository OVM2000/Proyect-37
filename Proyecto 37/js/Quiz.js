class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //escribe aquí el código para ocultar los elementos de la pregunta
   
    
    question.hide();
   
    //escribe aquí el código para cambiar el color de fondo 
    background("yellow")
    //escribe el código para mostrar un encabezado que indique el resultado del Cuestionario
    textSize(100)
    text("Resultados del Cuestionario", 400, 20)
    //te falta aqui obtener la informacion del jugador
    Contestant.getPlayerInfo();
    //llama aquí a getContestantInfo( )
    if(allContestants !== undefined){
      //falta aqui debuggear
      debugger;
      //Crear el diplay de la variable con las respuestas
      var display_Answers = 230;
      fill("blue");
      textSize(20);
      text("* Nota ¡El concursante que respondio correctamente, esta resaltado con verde",130,230)
    
     //Aqui estabas cerrando el IF pero no se debe cerrar hasta el final 

    //escribe el código para resaltar al concursante que respondió correctamente
    for(var plr in allContestants){
      var correctAns = "2"
      if(correctAns === allContestants[plr].answer)
      fill("green")
      else
      fill("red")
      //FAlta mostrar las respuestas 
      display_Answers+=30;
        textSize(20);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
    }
  }
 }
}
