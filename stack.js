function Stack()
{   
  var items = [];   
  var top = 0;   
  
  //Push an item in the Stack
  this.push = function(element)
  {  
    items[top++] = element 
  } //top++, first performs the operation then increment's the value

  //Pop an item from the Stack
  this.pop = function()
  {  
    return items[--top]; 
  } //--top, first decrements the value then performs the operation

  //peek an item in the Stack
  this.peek = function()
  {   
    return items[top - 1]; 
  }

  //Is stack empty
  this.isEmpty = function()
  {   
    return top === 0; 
  }

  //clear the stack
  this.clear= function()
  {   
    top = 0; 
  }

  //Size of the Stack
  this.size = function()
  {   
    return top; 
  }



}