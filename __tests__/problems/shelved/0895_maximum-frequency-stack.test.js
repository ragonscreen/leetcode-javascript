import { describe, expect, test } from 'bun:test';
import { FreqStack } from '../../../src/problems/shelved/0895_maximum-frequency-stack.js';

describe('FreqStack', () => {
        const freqStack = new FreqStack();

        test('basic test 1', () => {
                expect(freqStack.push(5)).toBeUndefined();
                expect(freqStack.push(7)).toBeUndefined();
                expect(freqStack.push(5)).toBeUndefined();
                expect(freqStack.push(7)).toBeUndefined();
                expect(freqStack.push(4)).toBeUndefined();
                expect(freqStack.push(5)).toBeUndefined();
        });

        test('basic test 2', () => {
                expect(freqStack.pop()).toStrictEqual(5);
                expect(freqStack.pop()).toStrictEqual(7);
                expect(freqStack.pop()).toStrictEqual(5);
                expect(freqStack.pop()).toStrictEqual(4);
        });
});

describe('FreqStack', () => {
        const freqStack = new FreqStack();

        test('basic test 3', () => {
                expect(freqStack.push(1)).toBeUndefined();
                expect(freqStack.push(0)).toBeUndefined();
                expect(freqStack.push(0)).toBeUndefined();
                expect(freqStack.push(1)).toBeUndefined();
                expect(freqStack.push(5)).toBeUndefined();
                expect(freqStack.push(4)).toBeUndefined();
                expect(freqStack.push(1)).toBeUndefined();
                expect(freqStack.push(5)).toBeUndefined();
                expect(freqStack.push(1)).toBeUndefined();
                expect(freqStack.push(6)).toBeUndefined();
        });

        test('basic test 4', () => {
                expect(freqStack.pop()).toStrictEqual(1);
                expect(freqStack.pop()).toStrictEqual(1);
                expect(freqStack.pop()).toStrictEqual(5);
                expect(freqStack.pop()).toStrictEqual(1);
                expect(freqStack.pop()).toStrictEqual(0);
                expect(freqStack.pop()).toStrictEqual(6);
                expect(freqStack.pop()).toStrictEqual(4);
                expect(freqStack.pop()).toStrictEqual(5);
                expect(freqStack.pop()).toStrictEqual(0);
                expect(freqStack.pop()).toStrictEqual(1);
        });
});
