class vector{
    
    constructor(fX, fY){
        
        this.x = parseFloat(fX).toFixed(2) || 0;
        
        this.y = parseFloat(fY).toFixed(2) || 0;
        
    }
    
}

resolveVectors = function(aVecs){
    
    x = 0;
    
    y = 0;
    
    for (i = 0; i < aVecs.length; i++) {
        
        if(aVecs[i] != undefined){
    
            x += aVecs[i].x;
	
            y += aVecs[i].y;
        
        }
	
    }
    
    return new vector(x, y);

};

vector.prototype.add = function(vVec){
    
    this.x += vVec.x;
    
    this.y += vVec.y;
    
};

vector.prototype.subtract = function(vVec){
    
    this.x -= vVec.x;
    
    this.y -= vVec.y;
    
};

vector.prototype.scalar = function(nScal){
    
    return new vector(this.x * nScal, this.y * nScal);
    
};

vector.prototype.getMagnitude = function(){
    
    return Math.sqrt((this.x*this.x) + (this.y*this.y));
    
};

vector.prototype.getAngle = function(){
    
    return Math.atan(this,x/ this.y);
    
};

vector.prototype.changeAngle = function(nAngle){
    
    let angle = nAngle % 360;
    
    let ratio = Math.cos((angle % 90) * 0.0174533);
    
    let hypotenuse = this.getMagnitude();
    
    this.y = parseFloat(hypotenuse * ratio);
    
    this.x = parseFloat(Math.sqrt(Math.sqr(hypotenuse) - Math.sqr(this.y)));
    
    toNeg = function(){
        
        if(n < 0){
            
            return n;
        
        }
        else{
            
            return (n * -1);
            
        }
        
    };
    
    toPos = function(){
        
        if(n > 0){
            
            return n;
        
        }
        else{
            
            return (n * -1);
            
        }
        
    };
    
    if(0 < angle && angle < 180){
        
        this.y = toNeg(this.y);
        
    }
    
    if(90 < angle && angle < 270){
        
        this.x = toNeg(this.x);
        
    }
    
    if(180 < angle && angle < 360){
        
        this.y = toPos(this.y);
        
    }
    
    if(270 < angle || angle < 90){
        
        this.x = toPos(this.x);
        
    }
    
};

vector.prototype.scaleTo = function(fX, fY, fZ){
    
    let scalar = null;
    
    if (isDefined(fX)){
        
        scalar = fX/this.x;
        
        this.y *= this.scalar;
        
        this.z *= this.scalar;
        
    }
    
    if (isDefined(fY)){
        
        scalar = fY/this.y;
        
        this.x *= this.scalar;
        
    }
    
    if (isDefined(fZ)){
        
        scalar = fZ/this.getMagnitude();
        
        this.x *= this.scalar;
        
        this.y *= this.scalar;
        
    }
    
};

vector.prototype.toLine = function(oVert){
    
    this.vertice = oVert || new vector(0,0);
    
    this.yInt = oVert.y - ((oVert.x/this.x)*this.y);
    
    return new line((this.y/this.x), this.yInt);
    
};


