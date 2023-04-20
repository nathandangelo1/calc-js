class Stack2
{  
  constructor()
  {    
    this.items = [];  
  }

  //Push an item in the Stack   
  push = function(element)
  {     
    this.items.push(element);   
  }

  //Pop an item from the Stack   
  pop = function()
  {     
    return this.items.pop();   
  }        

  //Peek top item from the Stack   
  peek = function()
  {     
    return this.items[this.items.length - 1];   
  }

  //Is Stack empty   
  isEmpty = function()
  {     
    return this.items.length === 0;   
  }

  //Clear the Stack   
  clear = function()
  {      
    this.items.length = 0;   
  }        

  //Size of the Stack   
  size = function()
  {     
    return this.items.length;   
  }
}