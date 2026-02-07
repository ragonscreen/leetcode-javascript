import { describe, expect, test } from 'bun:test';
import { MinStack } from '../../../src/problems/solved/0155_min-stack.js';

describe('MinStack', () => {
        const minStack = new MinStack();

        test('pushes elements', () => {
                expect(minStack.push(-2)).toBeUndefined();
                expect(minStack.push(0)).toBeUndefined();
                expect(minStack.push(-3)).toBeUndefined();
        });

        test('gets the minimum value', () => {
                expect(minStack.getMin()).toStrictEqual(-3);
        });

        test('removes the top element', () => {
                expect(minStack.pop()).toBeUndefined();
        });

        test('gets the top element', () => {
                expect(minStack.top()).toStrictEqual(0);
        });

        test('gets the minimum value after elements have been removed', () => {
                expect(minStack.getMin()).toStrictEqual(-2);
        });
});
