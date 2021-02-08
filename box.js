class Box{

    constructor(x,y){
       var options = {
         restitution:0.3,
         density:10,
         //isStatic:true
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        World.add(world,this.body)
        this.width = 50;
        this.height = 50;
        this.image = loadImage("wood1.png")
        this.visibility = 225
    }
    display(){
      push()
      if(this.body.speed<3){
      var  posX = this.body.position.x
       var posY = this.body.position.y
       var angle = this.body.angle
        
        rotate(angle)
        //translate(posX,posY);
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
      }
      else{
        this.visibility = this.visibility-10;
        tint(225,(this.visibility))
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        World.remove(world,this.body)
      }
        pop();
    }
}