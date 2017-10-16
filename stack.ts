export class Node {
    data: any;
    next: Node;
    prev: Node;

    constructor (data: any) {
        this.data = data;
    }

}

export class Stack {

    top: Node;
    size: number

    constructor () {
        this.top = new Node(null);
        this.size = 0;
    }

    hasTop(): boolean {
        return this.top !== null;
    }

    push(data: any) {
        const node = new Node(data);
        if(!this.hasTop())
            this.top = node;
        else {
            this.top.next = node;
            node.prev = this.top;
            this.top = node;
        }
        this.size++;
        return node;
    }

    // pop(): Node {
    //     if (!this.hasTop()) throw new Error('Stack is empty');
    //     else {
    //         const temp = this.top.prev;
    //         const top = this.top;
    //         this.top = new Node(null);            
    //         this.top = temp;
    //         return top;
    //     }
    // }

    peek(): Node {
        return this.top;
    }

    getSize() {
        return this.size;
    }

}