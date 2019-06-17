class staticObject{
    
    constructor(vPos, vDim, oOptions){
	
    this.pos = vPos || new vector(0,0);
    
    this.dim = vDim || new vector(16,16);
    
    this.swiss(oOptions, "all");
    
    //game.renderer.push(this);
    
    }

}

staticObject.prototype.centerOver = function(oObj){
    
    this.pos = (oObj.getCenter()).subtract(this.dim.scalar(0.5));
    
}

staticObject.prototype.rotateZ = function(){
    
}

staticObject.prototype.update = function(nDelta){
    
    switch (this.constructor.name) {
        
        case "sprite":
            
    }
    
}

staticObject.prototype.sides =()=>{
    
    return [this.pos.x, this.pos.x + thos.dim.x, this.pos.y, this.pos.y + this.dim.y]
    
}

overlapX = function(obj1, obj2){
    
    this.left = null;
    
    this.right = null;
    
    if(obj1.pos.x > obj2.pos.x){
	
	this.left = obj1.x;
	
    }
    
    else{
	
	this.left = obj2.pos.x;
	
    }
    
    if(obj1.pos.x + obj1.dim.x < obj2.pos.x + obj2.dim.x){
	
	this.right = obj1.pos.x + obj1.dim.x;
	
    }
    
    else{
	
	this.right = obj2.pos.x + obj2.dim.x;
	
    }
    
    return {
	
	left: this.left,
	
	right: this.right
	
    }
    
}

overlapY = function(obj1, obj2){
    
    this.top = null;
    
    this.bottom = null;
    
    if(obj1.pos.y > obj2.pos.y){
	
	this.top = obj1.pos.y;
	
    }
    
    else{
	
	this.top = obj2.pos.y;
	
    }
    
    if(obj1.pos.y + obj1.dim.y < obj2.pos.y + obj2.dim.y){
	
	this.bottom = obj1.y + obj1.dim.y;
	
    }
    
    else{
	
	this.bottom = obj2.pos.y + obj2.dim.y;
	
    }
    
    return {
	
	top: this.top,
	
	bottom: this.bottom
	
    }
    
}
