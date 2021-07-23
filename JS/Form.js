class Form {
   constructor() {
      this.title = createElement('h1')
      this.input = createInput("Name")
      this.button = createButton("Play")
      this.greeting = createElement('h3')

   }
   hideForm() {
      this.greeting.hide();
      this.input.hide();
      this.button.hide();
      this.title.hide();
   }

   display() {

      this.title.html("Car Racing Game")
      this.title.position(475, 125)

      this.input.position(450, 200)

      this.button.position(700, 200)

      this.button.mousePressed(() => {
         this.input.hide();
         this.button.hide();
         player.name = this.input.value();
         playerCount = playerCount + 1;
         player.updateCount(playerCount);
         this.greeting.html("Hello " + player.name);
         this.greeting.position(475, 200);
      })


   }

};