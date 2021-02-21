class Hammer {
    constructor(x, y, width, height) {
      var options = {
          'density':2,
          'restitution':0.5,
          'friction':1.0
          
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX ;
      pos.y = mouseY ;
      push();
      translate(pos.x,pos.y);

      
      rectMode(CENTER);
      fill("Red");
      stroke("Green");
      strokeWeight(4);
      rect(0,0, this.width, this.height);
      pop();
    }
  };
  