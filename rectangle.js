class rectangle{
    
    constructor(vPos, vDim){
         
        this.pos = vPos;
        
        this.dim = vDim;
        
    }
    
    toVertices(){
    
        this.vertices = [new vector(this.pos.x + this.dim.x, this.pos.y),
                
            new vector(this.pos.x + this.dim.x, this.pos.y + this.dim.y),
                
            new vector(this.pos.x, this.pos.y),
                
            new vector(this.pos.x, this.pos.y + this.dim.y)];
    
        return this.vertices;
    
    }
    
}

