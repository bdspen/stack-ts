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

    isEmpty(): boolean {
        return this.size === 0;
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

    pop(): Node {
        if (!this.hasTop()) throw new Error('Stack is empty');
        else {
            const temp = this.top.prev;
            const top = this.top;
            delete temp.next;                        
            delete this.top;          
            this.top = temp;
            this.size--;
            return top;
        }
    }

    peek(): Node {
        return this.top;
    }

    getSize() {
        return this.size;
    }

}