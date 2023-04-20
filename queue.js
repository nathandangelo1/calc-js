
class Queue
{
    #front = undefined;
    #back = undefined;
    #count = undefined;
    //#empty = undefined;

    constructor(item)
    {
        Enqueue(item);
    }

    get Count()
    {
      return this.#count;
    }
    
    IsEmpty()
    {        
      return this.#front == null;   
    }

    Enqueue(item)
    {
        //CREATE NEW NODE & FILL ITS DATA
        var newNode = new Node2(item);

        if (this.#front == null)
        {
            this.#front = newNode;
            this.#back = newNode;
        }
        else
        {
            this.#back.Next = newNode;
            this.#back = this.#back.Next;
        }//end if

        this.#count++;
    }

    Dequeue()
    {
        var dequeueFront = this.#front.Data;
        this.#front = this.#front.Next;

        this.#count--;

        return dequeueFront;
    }

    Peek()
    {
        var peekFront = this.#front.Data;
        return peekFront;
    }

    PeekRear()
    {
        var peekRear = this.#back.Data;
        return peekRear;
    }
}
