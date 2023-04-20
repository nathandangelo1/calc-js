
class Node2
{
 // FIELDS
    #data = null;
    #next = null;

   get Data()
    {
      return this.#data;
    }

    set Data(value)
    { 
      this.#data = value; 
    }
    
    get Next() 
    { 
      return this.#next; 
    }
    set Next(value)
    { 
      this.#next = value; 
    }

    constructor(initialData)
    {
        Data = initialData;
    }

}// End class Node