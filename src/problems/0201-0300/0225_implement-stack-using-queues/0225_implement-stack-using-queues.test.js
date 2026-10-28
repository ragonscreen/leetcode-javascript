import { describe, expect, test } from 'bun:test';

import { MyStack } from './0225_implement-stack-using-queues.js';

describe('MyStack', () => {
        test('default test 1', () => {
                const myStack = new MyStack();

                expect(myStack.push(1)).toBeNil();
                expect(myStack.push(2)).toBeNil();
                expect(myStack.top()).toStrictEqual(2);
                expect(myStack.pop()).toStrictEqual(2);
                expect(myStack.empty()).toStrictEqual(false);
        });
});
