class Question {
    constructor() {
      this.title = createElement("h2");
      this.inputbox = createInput("Name");
      this.playButton = createButton("Play");
      this.greeting = createElement("h3");
    }
  
    hide() {
      this.inputbox.hide();
      this.playButton.hide();
      this.greeting.hide();
    }
  
    display() {
      this.title.html("Quiz Game");
      this.title.position(130, 0);
  
     
      this.inputbox.position(130, 160);
  
  
      this.playButton.position(250, 200);
  
  
      this.playButton.mousePressed(()=> {
        this.inputbox.hide();
        this.playButton.hide();
  
  
        player.name = this.inputbox.value();
        playerCount += 1;
  
        player.index = playerCount;
  
        player.updatePlayerRecord();
  
        player.updateCount(playerCount);
  
        this.greeting.html("Hello " + player.name);
        this.greeting.position(130, 100);
      });
    }
  }