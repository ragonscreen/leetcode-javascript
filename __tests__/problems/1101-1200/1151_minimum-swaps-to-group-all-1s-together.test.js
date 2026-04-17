import { describe, expect, test } from 'bun:test';
import { minSwaps } from '../../../src/problems/1101-1200/1151_minimum-swaps-to-group-all-1s-together.js';

const testcases = [
        { data: [1, 0, 1, 0, 1], expected: 1 },
        { data: [0, 0, 0, 1, 0], expected: 0 },
        { data: [1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1], expected: 3 },
        { data: [0, 0, 0], expected: 0 },
];

describe('minSwaps', () => {
        test.each(structuredClone(testcases))('minSwaps($data) -> $expected', ({
                data,
                expected,
        }) => {
                expect(minSwaps(data)).toStrictEqual(expected);
        });
});
