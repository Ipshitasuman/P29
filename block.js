class Block{
  constructor(x, y, width, height) {
    var options = {
      // 'isStatic': true,
      'restitution':0.5,
      'friction':1.0,
      'density':1.0
                              
    }
    this.x = x;
    this.y = y;
    this.body = Bodies.rectangle(x, y,width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("bomb.png");
    World.add(world, this.body);
    }

    display(){
        
      push();
      translate(this.body.position.x, this.body.position.y);
      strokeWeight(2);
      stroke(0);
      fill(0);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();

      }
}