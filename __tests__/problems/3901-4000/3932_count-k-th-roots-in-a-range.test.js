import { describe, expect, test } from 'bun:test';
import { countKthRoots } from '../../../src/problems/3901-4000/3932_count-k-th-roots-in-a-range.js';

const testcases = [
        { l: 1, r: 9, k: 3, expected: 2 },
        { l: 8, r: 30, k: 2, expected: 3 },
        { l: 7, r: 30, k: 2, expected: 3 },
        { l: 9, r: 30, k: 2, expected: 3 },
        { l: 10, r: 30, k: 2, expected: 2 },
        { l: 8, r: 26, k: 2, expected: 3 },
        { l: 8, r: 25, k: 2, expected: 3 },
        { l: 8, r: 24, k: 2, expected: 2 },
        { l: 10, r: 24, k: 2, expected: 1 },
        { l: 8, r: 26, k: 2, expected: 3 },
        { l: 9, r: 25, k: 2, expected: 3 },
];

describe('countKthRoots', () => {
        test.each(
                structuredClone(testcases),
        )('countKthRoots($l, $r, $k) -> $expected', ({ l, r, k, expected }) => {
                expect(countKthRoots(l, r, k)).toStrictEqual(expected);
        });
});
