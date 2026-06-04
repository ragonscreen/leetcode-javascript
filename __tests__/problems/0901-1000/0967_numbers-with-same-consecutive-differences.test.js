import { describe, expect, test } from 'bun:test';
import { numsSameConsecDiff } from '../../../src/problems/0901-1000/0967_numbers-with-same-consecutive-differences.js';

const testcases = [
        { n: 3, k: 7, expected: [181, 292, 707, 818, 929] },
        {
                n: 2,
                k: 1,
                expected: [
                        10, 12, 21, 23, 32, 34, 43, 45, 54, 56, 65, 67, 76, 78,
                        87, 89, 98,
                ],
        },
        { n: 2, k: 0, expected: [11, 22, 33, 44, 55, 66, 77, 88, 99] },
];

describe('numsSameConsecDiff', () => {
        test.each(
                structuredClone(testcases),
        )('numsSameConsecDiff($n, $k) -> $expected', ({ n, k, expected }) => {
                expect(numsSameConsecDiff(n, k)).toContainAllValues(expected);
        });
});
