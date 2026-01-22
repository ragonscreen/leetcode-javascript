import { describe, expect, test } from 'vitest';
import { MinStack } from '../src/problems/solved/0155_min-stack.js';

describe('MinStack', () => {
        const minStack = new MinStack();

        test('pushes elements', () => {
                expect(minStack.push(-2)).toBeNullable();
                expect(minStack.push(0)).toBeNullable();
                expect(minStack.push(-3)).toBeNullable();
        });

        test('gets the minimum value', () => {
                expect(minStack.getMin()).toStrictEqual(-3);
        });

        test('removes the top element', () => {
                expect(minStack.pop()).toBeNullable();
        });

        test('gets the top element', () => {
                expect(minStack.top()).toStrictEqual(0);
        });

        test('gets the minimum value after elements have been removed', () => {
                expect(minStack.getMin()).toStrictEqual(-2);
        });
});
