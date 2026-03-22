import { describe, expect, test } from 'bun:test';
import {
        minOperations,
        minOperations1,
} from '../../../src/problems/1701-1800/1769_minimum-number-of-operations-to-move-all-balls-to-each-box.js';

const testcases = [
        { boxes: '110', expected: [1, 1, 3] },
        { boxes: '001011', expected: [11, 8, 5, 4, 3, 4] },
        { boxes: '0010110', expected: [11, 8, 5, 4, 3, 4, 7] },
];

describe('minOperations', () => {
        test.each(
                structuredClone(testcases),
        )('minOperations($boxes) -> $expected', ({ boxes, expected }) => {
                expect(minOperations(boxes)).toStrictEqual(expected);
        });
});

describe('minOperations1', () => {
        test.each(
                structuredClone(testcases),
        )('minOperations1($boxes) -> $expected', ({ boxes, expected }) => {
                expect(minOperations1(boxes)).toStrictEqual(expected);
        });
});
