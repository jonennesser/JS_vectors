class dynamicObject extends staticObject{
    
    constructor(pos, dim, vel, oOptions){
	
	super(pos, dim, oOptions);
        
	this.vel = vel;
	
    }
    
}

dynamicObject.prototype.setNewPos = function(){
    
}