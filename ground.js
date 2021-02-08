class Ground{

    constructor(x,y,w,h){
       var options = {
   
         density:10,
         isStatic:true
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body)
        this.width = w;
        this.height = h;
    }
    display(){
      var  posX = this.body.position.x
       var posY = this.body.position.y
       var angle = this.body.angle
        push()
        rotate(angle)
        fill("brown")
        //translate(posX,posY);
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
}