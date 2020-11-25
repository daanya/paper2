class ground {
    constructor(x,y,w,h){
        var options = {
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x,y,w,h, options)
        World.add(world,this.body)
    }
    display(){
        var p = this.body.position
        push();
        translate(p.x,p.y)
        rectMode(CENTER)
        strokeWeight(3)
        fill(255,0,255)
        rect(0,0,this.w,this.h)
        pop();
    }
}