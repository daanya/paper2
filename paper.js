class paper {
    constructor(x,y,radius){
        var options = {
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.image=loadImage("paper.png")
        this.body = Bodies.circle(this.x,this.y,this.radius/2,options)
        World.add(world,this.body)
    }
    display(){
        var p = this.body.position
        push();
        translate(p.x,p.y)
        imageMode(CENTER)
        strokeWeight(3)
        fill(255,0,255)
        image(this.image,0,0,this.radius,this.radius)
        pop();
    }
}