class Box {
    //class is blueprint/layout
    constructor(x, y, width, height) {
        //"this" to refer to the object created using this class
        //create the object and add to it the world
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      //captures the new setting.
    push();
      
      rotate(angle);
      //to change the 0 of the
      //axis to a given x and y position
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill(255);
      rect(0, 0, this.width, this.height);
      //reverts to the old setting.
      pop();
    }
  };
  