import { describe, expect, test } from 'bun:test';
import {
        MyQueue,
        MyQueue1,
} from '../../../src/problems/0201-0300/0232_implement-queue-using-stacks.js';

describe('MyQueue', () => {
        test('default test 1', () => {
                const myQueue = new MyQueue();

                expect(myQueue.push(1)).toBeNil();
                expect(myQueue.push(2)).toBeNil();
                expect(myQueue.peek()).toStrictEqual(1);
                expect(myQueue.pop()).toStrictEqual(1);
                expect(myQueue.empty()).toStrictEqual(false);
                expect(myQueue.peek()).toStrictEqual(2);
                expect(myQueue.pop()).toStrictEqual(2);
                expect(myQueue.empty()).toStrictEqual(true);
                expect(myQueue.pop()).toBeNil();
        });

        test('default test 2', () => {
                const myQueue = new MyQueue();

                expect(myQueue.push(1)).toBeNil();
                expect(myQueue.push(2)).toBeNil();
                expect(myQueue.push(3)).toBeNil();
                expect(myQueue.push(4)).toBeNil();
                expect(myQueue.push(5)).toBeNil();
                expect(myQueue.push(6)).toBeNil();
                expect(myQueue.push(7)).toBeNil();
                expect(myQueue.push(8)).toBeNil();
                expect(myQueue.push(9)).toBeNil();
                expect(myQueue.empty()).toStrictEqual(false);
                expect(myQueue.pop()).toStrictEqual(1);
                expect(myQueue.pop()).toStrictEqual(2);
                expect(myQueue.pop()).toStrictEqual(3);
                expect(myQueue.pop()).toStrictEqual(4);
                expect(myQueue.pop()).toStrictEqual(5);
                expect(myQueue.push(1)).toBeNil();
                expect(myQueue.pop()).toStrictEqual(6);
                expect(myQueue.pop()).toStrictEqual(7);
                expect(myQueue.pop()).toStrictEqual(8);
                expect(myQueue.pop()).toStrictEqual(9);
                expect(myQueue.empty()).toStrictEqual(false);
                expect(myQueue.pop()).toStrictEqual(1);
                expect(myQueue.empty()).toStrictEqual(true);
        });
});

describe('MyQueue1', () => {
        test('default test 1', () => {
                const myQueue = new MyQueue1();

                expect(myQueue.push(1)).toBeNil();
                expect(myQueue.push(2)).toBeNil();
                expect(myQueue.peek()).toStrictEqual(1);
                expect(myQueue.pop()).toStrictEqual(1);
                expect(myQueue.empty()).toStrictEqual(false);
                expect(myQueue.peek()).toStrictEqual(2);
                expect(myQueue.pop()).toStrictEqual(2);
                expect(myQueue.empty()).toStrictEqual(true);
                expect(myQueue.pop()).toBeNil();
        });

        test('default test 2', () => {
                const myQueue = new MyQueue1();

                expect(myQueue.push(1)).toBeNil();
                expect(myQueue.push(2)).toBeNil();
                expect(myQueue.push(3)).toBeNil();
                expect(myQueue.push(4)).toBeNil();
                expect(myQueue.push(5)).toBeNil();
                expect(myQueue.push(6)).toBeNil();
                expect(myQueue.push(7)).toBeNil();
                expect(myQueue.push(8)).toBeNil();
                expect(myQueue.push(9)).toBeNil();
                expect(myQueue.empty()).toStrictEqual(false);
                expect(myQueue.pop()).toStrictEqual(1);
                expect(myQueue.pop()).toStrictEqual(2);
                expect(myQueue.pop()).toStrictEqual(3);
                expect(myQueue.pop()).toStrictEqual(4);
                expect(myQueue.pop()).toStrictEqual(5);
                expect(myQueue.push(1)).toBeNil();
                expect(myQueue.pop()).toStrictEqual(6);
                expect(myQueue.pop()).toStrictEqual(7);
                expect(myQueue.pop()).toStrictEqual(8);
                expect(myQueue.pop()).toStrictEqual(9);
                expect(myQueue.empty()).toStrictEqual(false);
                expect(myQueue.pop()).toStrictEqual(1);
                expect(myQueue.empty()).toStrictEqual(true);
        });
});
