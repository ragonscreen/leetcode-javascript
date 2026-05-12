import { describe, expect, test } from 'bun:test';
import {
        MyCircularQueue,
        MyCircularQueue1,
} from '../../../src/problems/0601-0700/0622_design-circular-queue.js';

describe('MyCircularQueue', () => {
        test('default test 1', () => {
                const myCircularQueue = new MyCircularQueue(3);

                expect(myCircularQueue.enQueue(1)).toStrictEqual(true);
                expect(myCircularQueue.enQueue(2)).toStrictEqual(true);
                expect(myCircularQueue.enQueue(3)).toStrictEqual(true);
                expect(myCircularQueue.enQueue(4)).toStrictEqual(false);
                expect(myCircularQueue.Rear()).toStrictEqual(3);
                expect(myCircularQueue.isFull()).toStrictEqual(true);
                expect(myCircularQueue.deQueue()).toStrictEqual(true);
                expect(myCircularQueue.enQueue(4)).toStrictEqual(true);
                expect(myCircularQueue.Rear()).toStrictEqual(4);
        });

        test('default test 2', () => {
                const myCircularQueue = new MyCircularQueue(6);

                expect(myCircularQueue.enQueue(6)).toStrictEqual(true);
                expect(myCircularQueue.Rear()).toStrictEqual(6);
                expect(myCircularQueue.Rear()).toStrictEqual(6);
                expect(myCircularQueue.deQueue()).toStrictEqual(true);
                expect(myCircularQueue.enQueue(5)).toStrictEqual(true);
                expect(myCircularQueue.Rear()).toStrictEqual(5);
                expect(myCircularQueue.deQueue()).toStrictEqual(true);
                expect(myCircularQueue.Front()).toStrictEqual(-1);
                expect(myCircularQueue.deQueue()).toStrictEqual(false);
                expect(myCircularQueue.deQueue()).toStrictEqual(false);
                expect(myCircularQueue.deQueue()).toStrictEqual(false);
        });
});

describe('MyCircularQueue1', () => {
        test('default test 1', () => {
                const myCircularQueue = new MyCircularQueue1(3);

                expect(myCircularQueue.enQueue(1)).toStrictEqual(true);
                expect(myCircularQueue.enQueue(2)).toStrictEqual(true);
                expect(myCircularQueue.enQueue(3)).toStrictEqual(true);
                expect(myCircularQueue.enQueue(4)).toStrictEqual(false);
                expect(myCircularQueue.Rear()).toStrictEqual(3);
                expect(myCircularQueue.isFull()).toStrictEqual(true);
                expect(myCircularQueue.deQueue()).toStrictEqual(true);
                expect(myCircularQueue.enQueue(4)).toStrictEqual(true);
                expect(myCircularQueue.Rear()).toStrictEqual(4);
        });

        test('default test 2', () => {
                const myCircularQueue = new MyCircularQueue1(6);

                expect(myCircularQueue.enQueue(6)).toStrictEqual(true);
                expect(myCircularQueue.Rear()).toStrictEqual(6);
                expect(myCircularQueue.Rear()).toStrictEqual(6);
                expect(myCircularQueue.deQueue()).toStrictEqual(true);
                expect(myCircularQueue.enQueue(5)).toStrictEqual(true);
                expect(myCircularQueue.Rear()).toStrictEqual(5);
                expect(myCircularQueue.deQueue()).toStrictEqual(true);
                expect(myCircularQueue.Front()).toStrictEqual(-1);
                expect(myCircularQueue.deQueue()).toStrictEqual(false);
                expect(myCircularQueue.deQueue()).toStrictEqual(false);
                expect(myCircularQueue.deQueue()).toStrictEqual(false);
        });
});
