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
        this.top = new Node();
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

    pop(): void {
        if (!this.hasTop()) return;
        else {
            const temp = this.top.prev;
            this.top = temp;
        }
    }

    peek(): Node {
        return this.top;
    }

    getSize() {
        return this.size;
    }

}