const Stack = require("../Stack").Stack;
const assert = require('assert');

describe('Stack', () => {

    describe('Stack.push() into empty stack', () => {
        
        const stack = new Stack();
        const data = { prop: "value" };
        stack.push(data);

        it('should push initial data into the stack and increase list length to 1.', () => {
            assert.equal(stack.size, 1);
        });

        it('stack.top should be the correct data', () => {
            assert.equal(stack.top.data, data);
        });

        it('stack.prev and list.next should be undefined', () => {
            assert.equal(stack.next, undefined);
            assert.equal(stack.prev, undefined);            
        });

    });

    describe('Stack.peek()', () => {
        
        const stack = new Stack();
        const data = { prop: "value" };
        stack.push(data);

        it('should return top item', () => {
            assert.equal(data, stack.peek().data);
        });

    });

    describe('Stack.getSize()', () => {
        
        const stack = new Stack();
        const data = { prop: "value" };
        stack.push(data);

        it('should return size', () => {
            assert.equal(stack.getSize(), 1);
        });

    });

    describe('Stack.pop()', () => {
        
        const stack = new Stack();
        const data = { prop: "value" };
        stack.push(data);

        it('should pop a single element from the stack', () => {
            stack.pop();
            assert.equal(stack.size, 0);
        });

        it('should return the popped element', () => {
            stack.push(data);
            const popped = stack.pop();
            assert.equal(popped, data);
        });

        it('should return the popped element', () => {
            stack.push(data);
            const popped = stack.pop();
            assert.equal(popped, data);
        });


    });

    describe('Stack functions', () => {
        
        it('should hold many items and keep them in stacked order', () => {
            
            const stackTwo = new Stack();
            const stackSize = 100;
            var iterator = 0;
            const storage = [];
            while (iterator <= 99){
                const data = Math.random();
                storage.push(data)
                stackTwo.push(data);
                iterator++;
            }
    
            const result = storage.filter((data, i) => {
                const index = stackTwo.size - (i+1);
                const popped = stackTwo.pop();
                return popped.data === storage[index];
            }).length === stackSize;
            assert.equal(result, true);
        });


    });

});