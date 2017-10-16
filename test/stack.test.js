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

});