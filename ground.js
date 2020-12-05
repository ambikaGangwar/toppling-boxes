//class is blueprint/layout
class Ground {

    //"this" to refer to the object created using this class

    constructor(x,y,width,height){
        //create the object and add to it the world
        var options={
             isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        
        World.add(world,this.body);

    }

    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x,pos.y,this.width,this.height);

    }
}