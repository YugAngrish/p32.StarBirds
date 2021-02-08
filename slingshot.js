class Slingshot{

    constructor(bodyA,pointB){
       var options = {
         bodyA:bodyA,
         pointB:pointB,
         //Stiffness:0.4,
         length:20
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
        this.pointB = pointB
        
        this.image = loadImage("rB.png")
        //World.remove(world,this.image)
    }
    display(){
     push()

     if(this.chain.bodyA){

      var  pointA = this.chain.bodyA.position
       var pointB = this.pointB
       
       
        stroke(rgb(20,2,1))
        strokeWeight(5);

        line(pointA.x-25,pointA.y,pointB.x+20,pointB.y-20)
        line(pointA.x-25,pointA.y,pointB.x-20,pointB.y-20)
        
        //translate(pointA,pointB);
        imageMode(CENTER)
        image(this.image,pointA.x-30,pointA.y-10,20,80);
      
       }
      
        pop();
    }
    fly(){
        this.chain.bodyA=null;
    }
    attach(body){
      this.chain.bodyA = body;
    }
}