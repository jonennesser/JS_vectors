class line{
    
    constructor(nSlope, nYInt){
        
        this.yInt = nYInt;
        
        this.slope = nSlope;
        
    }
    
}

line.prototype.atValue = function(x, y){
    
    if(x != null){ 
        
        return this.slope * x + this.yInt;
        
    } else{  
        
        return (y - this.yInt) / this.slope;
        
    }
    
}
