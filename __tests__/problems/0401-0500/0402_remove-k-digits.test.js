import { describe, expect, test } from 'bun:test';
import { removeKdigits } from '../../../src/problems/0401-0500/0402_remove-k-digits.js';

const testcases = [
        { num: '1432219', k: 3, expected: '1219' },
        { num: '10200', k: 1, expected: '200' },
        { num: '10', k: 2, expected: '0' },
        { num: '1234', k: 2, expected: '12' },
        { num: '10200', k: 2, expected: '0' },
        { num: '33526221184202197273', k: 19, expected: '0' },
];

describe('removeKdigits', () => {
        test.each(
                structuredClone(testcases),
        )('removeKdigits($num, $k) -> $expected', ({ num, k, expected }) => {
                expect(removeKdigits(num, k)).toStrictEqual(expected);
        });
});
