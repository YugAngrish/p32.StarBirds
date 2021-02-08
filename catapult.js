class Catapult{

    constructor(x,y){
       var options = {
         restitution:0.3,
         density:10,
         isStatic:true
        }
        this.body = Bodies.rectangle(x,y,150,100,options);
       // World.add(world,this.body)
        this.width = 200;
        this.height = 150;
        this.image = loadImage("catapult.png")
    }
    display(){
      var  posX = this.body.position.x
       var posY = this.body.position.y
       var angle = this.body.angle
        push()
        rotate(angle)
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
}