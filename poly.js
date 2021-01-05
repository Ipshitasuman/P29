class Polygon {
    constructor(x,y,r){
        var options={
            'restitution':0.4,
            'density':1,
            'friction':1.2
        }
        this.r = r;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x,y,this.r,options);
        this.image = loadImage("bomb.png");
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();
    }
}