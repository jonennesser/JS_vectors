imageCollection = function(aImageURLs){
    
    var r = this;
    
    this.URLs = aImageURLs;
    
    this.name = name;
    
    this.isCollectionLoaded = false;
    
    this.isLoading = {};
    
    this.progress = (this.length / this.URLs.length || this.length) * 100 || 0;
            
}

imageCollection.prototype.images = {};

imageCollection.prototype.ledger = {}; //keeps track of how many images collections are using each image.

imageCollection.prototype.load = function(){
    
    var r = this; //root
    
    for(i = 0; i < r.URLs.length; i++){
        
        var path = r.URLs[i];
        
        if(r.ledger[path]){// if there is no account of this image being used, create one
           
            r.ledger[path] += 1;
            
        }
        
        else{
            
            r.ledger[path] = 1;
            
        }
        
        if (!r.images[path]){
            
            r.isLoading[path] = new Image();
            
            r.isLoading[path].onload = function(){
                
                path = r.URLs[i - 1];
                
                r.images[path] = r.isLoading[path];
                
                delete r.isLoading[path];
                
                r.progress = parseFloat(Object.keys(r.images).length / r.URLs.length || r.length) * 100 || 0;            
                
            };
            
            r.isLoading[path].src = path;
            
        }
        
        else{
            
            r.progress = parseFloat(Object.keys(r.images).length / r.URLs.length || r.length) * 100 || 0;            

            
        }
        
    }
    
    this.isCollectionLoaded = true;
    
}

imageCollection.prototype.unload = function(){
    
    var r = this;
    
    this.isCollectionLoaded = false;
    
    for(i = 0; i < r.URLs.length; i++){
        
        var path = r.URLs[i];
        
        if(r.ledger[path]){// if there is no account of this image being used, create one
           
            r.ledger[path] -= 1;
            
            if(r.ledger[path] == 0){
                
                delete r.ledger[path];
                
                delete r.images[path];
                
            }
            
        }
        
        r.progress = 0;
    }
    
}



