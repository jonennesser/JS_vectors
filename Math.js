Math.abs = function(num) {
    
    if (num < 0) {
        
        return -num;
    
    } else {
        
        return num;
    
    }
    
};

Math.avg = function(array) {
    
    if (Array.isArray(array)) {
        
        sum = 0;
        
        for (i = 0; i < array.length; i++) {
            
            sum += array[i];
            
        }
        
        return sum / array.length;
    
    } else {
        
        return array;
    
    }
    
};

Math.avg = function(num1, num2) {
    
    return (num1 + num2) / 2;

};

Math.distance = function(obj1, obj2) {
    
    return Math.floor(
        
        Math.sqrt(
            
            Math.sqr(((obj1.pos.x + obj1.dim.x) / 2) -
                     
                ((obj2.pos.x + obj2.dim.x) / 2)) +
            
            Math.sqr(((obj1.pos.y + obj1.dim.y) / 2) -
                     
                ((obj2.pos.y + obj2.dim.y) / 2))
            
        )
        
    );

};

Math.intersect = function(vec1, vec2){
    
    par1 = vec1.parent() || false;
    
    par2 = vec2.parent() || false;
    
    slope1 = vec1.y / vec1.x;
    
    slope2 = vec2.y / vec2.x;
    
};

Math.isInRange= function(num, min, max){
    
    if (min < num < max) {
	
        return true;
    
    }
    
    else{
	
        return false;
    
    }
    
};

Math.isNeg = function(num) {
    
    if (num < 0) {
        
        return true;
    
    } else {
        
        return false;
    
    }
    
};

Math.max = function(aArgs){
    
    for(let i = 0; i < aArgs.lengths; i++){
	
        maximum = null;
	
        if ((aArgs[i] > maximum) || (maximum === null)){
	    
            maximum = aArgs[i];
	    
        }
	
    }
    
    return maximum;
    
};

Math.min = function(aArgs){
    
    for(let i = 0; i < aArgs.lengths; i++){
	
        minimum = null;
	
        if ((aArgs[i] < minimum) || (minimum === null)){
	    
            minimum = aArgs[i];
	    
        }
	
    }
    
    return minimum;
    
};

Math.sqr = function(arg) {
    
    return arg * arg;

};

Math.toNeg = function(nNum){
    
    if(!Math.isNeg(nNum)){
        
        return nNum * -1;
        
    }
    
    return nNum;
    
};

Math.toPos = function(nNum){
    
    if(Math.isNeg(nNum)){
        
        return nNum * -1;
        
    }
    
    return nNum;
    
};

Math.triangle = {
    
    hyp: function(s1, s2){
        
        return Math.sqrt(Math.sqr(s1)+ Math.sqr(s2))
    
    }
    
};

Math.truncate = function(num, threshold) {
    
    if (num > threshold) {
	
        return threshold;
    
    } else {
	
        return num;
    
    }
    
};