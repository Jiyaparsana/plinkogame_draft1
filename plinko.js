class Plinko {
    constructor(x, y, r){
        var options ={
           isStatic:true
                    }

        this.r=10

        this.body = Bodies.circle(x, y, this.r,options)
        World.add(world, this.body);
    }
    display(){
        
        circle(this.body.position.x, this.body.position.y, this.r)
    }
}