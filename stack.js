"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
    }
    return Node;
}());
exports.Node = Node;
var Stack = /** @class */ (function () {
    function Stack() {
        this.top = new Node(null);
        this.size = 0;
    }
    Stack.prototype.hasTop = function () {
        return this.top !== null;
    };
    Stack.prototype.push = function (data) {
        var node = new Node(data);
        if (!this.hasTop())
            this.top = node;
        else {
            this.top.next = node;
            node.prev = this.top;
            this.top = node;
        }
        this.size++;
        return node;
    };
    Stack.prototype.pop = function () {
        if (!this.hasTop())
            throw new Error('Stack is empty');
        else {
            var temp = this.top.prev;
            var top_1 = this.top;
            this.top = new Node(null);
            this.top = temp;
            return top_1;
        }
    };
    Stack.prototype.peek = function () {
        return this.top;
    };
    Stack.prototype.getSize = function () {
        return this.size;
    };
    return Stack;
}());
exports.Stack = Stack;
