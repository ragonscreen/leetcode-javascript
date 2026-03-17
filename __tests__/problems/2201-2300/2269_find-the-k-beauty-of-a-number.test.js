import { describe, expect, test } from 'bun:test';
import { divisorSubstrings } from '../../../src/problems/2201-2300/2269_find-the-k-beauty-of-a-number.js';

const testcases = [
        { num: 240, k: 2, expected: 2 },
        { num: 430_043, k: 2, expected: 2 },
        { num: 1, k: 1, expected: 1 },
];

describe('divisorSubstrings', () => {
        test.each(
                structuredClone(testcases),
        )('divisorSubstrings($num, $k) -> $expected', ({
                num,
                k,
                expected,
        }) => {
                expect(divisorSubstrings(num, k)).toStrictEqual(expected);
        });
});
