import { describe, expect, test } from 'bun:test';
import { getHappyString } from '../../../src/problems/1401-1500/1415_the-k-th-lexicographical-string-of-all-happy-strings-of-length-n.js';

const testcases = [
        { n: 1, k: 3, expected: 'c' },
        { n: 1, k: 4, expected: '' },
        { n: 3, k: 9, expected: 'cab' },
        { n: 4, k: 14, expected: 'bcac' },
        { n: 4, k: 24, expected: 'cbcb' },
        { n: 4, k: 25, expected: '' },
        { n: 5, k: 33, expected: 'cabab' },
];

describe('getHappyString', () => {
        test.each(
                structuredClone(testcases),
        )('getHappyString($n, $k) -> $expected', ({ n, k, expected }) => {
                expect(getHappyString(n, k)).toStrictEqual(expected);
        });
});
