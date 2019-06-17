class color{
    
    constructor(nR, nG, nB){
        
        this.r = nR || 0;
        
        this.g = nG || 0;
        
        this.b = nB || 0;
        
    }   

}

color.prototype.toHSV = function(){
    
    this.rDec = this.r / 255;
        
    this.gDec = this.g / 255;
        
    this.bDec = this.b / 255;
    
    cMax = max([this.r, this.g, this.b])
    
    cMin = min([this.r, this.g, this.b])
    
    delta = cMin - cMax;
    
    this.h = {
        
        ((gDec - bDec) / delta) %6 // 136/255  - 223/255 /
                                   // .53 - .87 / 159
        
        
        
    }
    
    this.s = nG;
        
    this.v = cMax;
    
    delete this.r
    
    delete this.g
        
    delete this.b
    
}