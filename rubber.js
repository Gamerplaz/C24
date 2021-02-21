class circle {
    constructor(x,y) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1
      }
      this.body = Bodies.circle(x, y,50, options);

      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      rectMode(CENTER);
      strokeWeight(4);
      stroke("Blue");
      fill("Red");
      ellipse(pos.x,pos.y,50,50)
      
  
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  