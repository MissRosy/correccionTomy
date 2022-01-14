class Quiz {
  constructor(){
    //AQUI EN LUGAR DE DISTANCIA, NAME Y DISTANCE
    //VA UN TITULO, RESPUESTA1 Y RESPUESTA2
    this.distance = 0;
    this.name = null;
    this.index = null;

  }

  //ESTA NO SE NECESITA
  update(){
    var playerIndex = "constestants/contestant" + this.index;
    database.ref(playerIndex).set({
      
      name:this.name,
      distance: this.distance
    });
  }

  //ESTA NO VA AQUI, LA QUE ES PARECIDA YA ESTA HECHA EN LA CLASE CONTESTANT.JS
  //SE LLAMA GETPLAYERINFO
  static getContestantInfo(){
    var playerInfoRef = database.ref('constestants');
    playerInfoRef.on("value",(data)=>{
      allContestants = data.val();
    })
  }



//ESTA SI VA ASI
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }
  //ESTA SI VA ASI
  update(state){
    database.ref('/').update({
      gameState: state
    });
  }
//ESTA SI ESTA BIEN ASI
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
    
    //escribe aquí el código para cambiar el color de fondo 
     //AQUI SOLO HAY QUE PONER UN BACKGROUND DEL COLOR QUE QUIERAS

    //escribe el código para mostrar un encabezado que indique el resultado del Cuestionario
    //AQUI USAS EL TITULO QUE TE PEDI ARRIBA EN EL CONSTRUCTOR
    //QUE CREARÁS PARA QUE LO USES Y PONGAS "EL RESULTADO DE LA ENCUESTA ES:"

    //llama aquí a getContestantInfo( )
    //AQUI MANDAS LLAMAR LA FUNCION ESTATICA QUE ESTA EN LA CLASE CONTESTANT.JS
    //SE LLAMA GETPLAYERINFO()

    //*No sé como hacer q funcione
    if(allContestants !== undefined){
      fill("blue");
      textSize(20);
      text("*NOTA: ¡El concursante que respondío correctamente, está resaltado en color verde!",90,230);


      //ESTO DE FILL Y TEXT ES LO QUE VA ARRIBA FUERA DEL IF LO QUE TE PUSE EN LA LINEA 66
      fill("black");
      textSize(20);
      text("Resultado del cuestionario:",350,0);
    }
  
    //AQUI AFUERA DEL FOR DECLARAS UNA VARIABLE 
    //PARA LA POSCION Y EL HUEQUITO QUE SE NECESITA AL MOSTRARLOS
  for(var plr in allContestants){
    var correctsAns = "2";

    //AQUI LE AUMENTAS A LA DE POSICION 30 O 20 SOLO PARA QUE NO SE MUESTREN AMONTONADOS

    //A PARTIR DE AQUI PARA ABAJO YA ESTA BIEN
    if(correctsAns === allContestants[plr].answer){
      fill("Green");
    }
    else{
      fill("red");
    }
  }
    //escribe la condición para comprobar si contestantInfor no está indefinido 

    //escribe aquí el código para agregar una nota

    //escribe el código para resaltar al concursante que respondió correctamente
    //CON ESTO MUESTRAS EN FORMA DE LISTA A LOS DOS JUGADORES Y LA RESPUESTA QUE DIERON
    text(allContestants[plr].name + ": " + allContestants[plr].answer, positionX, position);
  }

}
