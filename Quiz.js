class Quiz {
    constructor() {

    }


    getState() {
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        });
    }


    
    updateState(stateInput) {
        database.ref('/').update({
            gameState: stateInput
        });
    }

    
   async start() {
        if (gameState == 0) {
            player = new Contestant();
            player.getCount();

            question = new Question();
            question.display();
        }
        if(gameState == 1){
            this.questionisOP.html("Question:- What Starts and Ends with the letter 'E', but has only 1 letter");
            this.questionisOP.position(150, 70);
            this.option1.html("1.Everyone");
            this.option1.position(150, 100);
            this.option2.html("2.Envelope");
            this.option2.position(150, 110);
            this.option3.html("3.Estimate");
            this.option3.position(150, 130);
            this.option4.html("4.Example");
            this.option4.position(150, 150);

            this.answer.createInput("Your Answer");
            this.submit.createButton("Submit");

            player.answer = this.answer.value();
            this.submit.mousePressed(()=> {
                this.questionisOP.hide();
                this.option1.hide();
                this.option2.hide();
                this.option3.hide();
                this.option4.hide();

                if(player.realAnswer.value() == this.answer.value()){
                    for (var plr in allPlayers) {
                        if (plr === "player" + player.index) {
                            fill("red");
                        }
                        else {
                            fill("black");
                        }
        
        
        
                        display_position += 20;
                        textSize(15);
                        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120, display_position);
                        fill("lime");
                        text(player.name,140,display_position)
        
                    }
                }
                
              });
              

              
        }
    }

    
    play() {

        Player.getPlayerInfo();

    }
}