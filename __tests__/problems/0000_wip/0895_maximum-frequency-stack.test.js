import { describe, expect, test } from 'bun:test';
import { FreqStack } from '../../../src/problems/0000_wip/0895_maximum-frequency-stack.js';

describe('FreqStack', () => {
        test.failing('default test 1', () => {
                const freqStack = new FreqStack();

                expect(freqStack.push(5)).toBeNil();
                expect(freqStack.push(7)).toBeNil();
                expect(freqStack.push(5)).toBeNil();
                expect(freqStack.push(7)).toBeNil();
                expect(freqStack.push(4)).toBeNil();
                expect(freqStack.push(5)).toBeNil();
                expect(freqStack.pop()).toStrictEqual(5);
                expect(freqStack.pop()).toStrictEqual(7);
                expect(freqStack.pop()).toStrictEqual(5);
                expect(freqStack.pop()).toStrictEqual(4);
        });

        test.failing('default test 2', () => {
                const freqStack = new FreqStack();

                expect(freqStack.push(1)).toBeNil();
                expect(freqStack.push(0)).toBeNil();
                expect(freqStack.push(0)).toBeNil();
                expect(freqStack.push(1)).toBeNil();
                expect(freqStack.push(5)).toBeNil();
                expect(freqStack.push(4)).toBeNil();
                expect(freqStack.push(1)).toBeNil();
                expect(freqStack.push(5)).toBeNil();
                expect(freqStack.push(1)).toBeNil();
                expect(freqStack.push(6)).toBeNil();
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
