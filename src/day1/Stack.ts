type Node<T> = {
    value: T,
    prev?: Node<T>
}

export default class Stack<T> {

    //definr the length of the stack and identfy the head
    public length: number;
    private head?: Node<T>

    constructor() {

        this.head = undefined
        this.length = 0
    }

    push(item: T): void {

        const node = { value: item } as Node<T> // defining the item to be pushed 
        this.length++  // increment the length 
        if (!this.head) {
            this.head = node
            return      // if it is an empty stack and head doesn't exixt set the new node as head 
        }
        node.prev = this.head  //set the new node prev value to the existing head 
        this.head = node  // and set the new head to the new node 
    }
    pop(): T | undefined {

        this.length = Math.max(0, this.length - 1) // check for the size of the stack 
        if (this.length === 0) { // if stack is empty 
            const head = this.head
            this.head = undefined // set the head as undefined
            return head?.value  // returns undefined of the last item value 
        }
        const head = this.head as Node<T> // assign head 
        this.head = head.prev // set the new head to the next item 
        return head.value // return the assigned head value 
    }
    peek(): T | undefined {

        return this.head?.value  // cheack if the stack has item and return the top value 

    }
}