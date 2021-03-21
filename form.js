class Form{
    constructor(){
       this.input = createInput("name")
         this.button = createButton('Play')
       this.greeting=createElement('h2')
    }
    hide(){
        this.greeting.hide()
        this.button.hide()
        this.input.hide()
    }
    display(){
        var title=createElement('h2')
        title.html("Car race")
        title.position(300,100)
        
        this.input.position(350,200)
        
        this.button.position(350,300)
        
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name=this.input.value()
            playerCount+=1
            player.index=playerCount
            player.update()
            player.updateCount(playerCount)
            this.greeting.html("Welcome "+player.name)
            this.greeting.position(300,300)
        })
    }
}