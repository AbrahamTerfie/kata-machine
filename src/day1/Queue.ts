type Node<T> = {
    value: T,
    next?: Node<T>
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>
    private tail?: Node<T>

    constructor() {
        this.head = this.tail = undefined
        this.length = 0
    }

    enqueue(item: T): void {
        const node = { value: item } as Node<T> // new node to be added 
        this.length++  // keeps count of the total nodes 
        if (!this.tail) {
            this.tail = this.head = { value: item } as Node<T>
            return     // checks if the list is empty and assigns then head and tail to new node 
        }
        this.tail.next = node   // took our tail and added a new one to the list (which the last item was the tail )
        this.tail = node  // pointed our tail to the new node
    }
    deque(): T | undefined {
        if (!this.head) {
            return undefined
        }
        this.length--
        const head = this.head
        this.head = this.head.next
        // free id 
        head.next = undefined
        if (this.length === 0) {
            this.tail = undefined  // if the list is empty make sure to forget about it
        }
        return head.value

    }
    peek(): T | undefined {
        return this.head?.value

    }
}