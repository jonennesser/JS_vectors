class frameItterator{
    
    constructor(){
        
        this.frame = 0;
        
        this.frames = [];
        
        this.delta = 0;
        
    }
    
}

frameItterator.prototype.delta = null;  //the elapsed time since the last frame
            
frameItterator.prototype.update = function(){
    
    this.frames.unshift(Date.now());    //create a new timestamp(integer expressing miliiseconds) at the beginning of the array
    
    if(this.frames.length > 1){
        
        while((this.frames[0] > this.frames[this.frames.length - 1] + 1000) && (this.frames.length > 2)){     //for all the timestamps that are older than one second (1000 miliseconds)
           
           this.frames.pop();   //remove them from the array
            
        }
        
        this.delta = truncate(this.frames[0] - this.frames[1], game.maxElapsedTime) || 0;
        
    }
    
    return true;
    
};
    
frameItterator.prototype.getFrameRate = function(){
    
    if (this.frames.length > 1) {
        
        return 0;
        
    }
    
    else{
        
        return this.frames.length;      //frames per second
        
    }
    
};