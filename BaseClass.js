class BaseClass{
    constructor(x, y, width, height, ) {
        var options = {
            isStatic ();
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        RectMode(CENTER);
        rect(10, 10, this.width, this.height);
        
        pop();
      }
}