import { describe, expect, test } from 'bun:test';
import { equalSubstring } from '../../../src/problems/1201-1300/1208_get-equal-substrings-within-budget.js';

const testcases = [
        { s: 'abcd', t: 'bcdf', maxCost: 3, expected: 3 },
        { s: 'abcd', t: 'cdef', maxCost: 3, expected: 1 },
        { s: 'abcd', t: 'acde', maxCost: 0, expected: 1 },
];

describe('equalSubstring', () => {
        test.each(
                structuredClone(testcases),
        )('equalSubstring($s, $t, $maxCost) -> $expected', ({
                s,
                t,
                maxCost,
                expected,
        }) => {
                expect(equalSubstring(s, t, maxCost)).toStrictEqual(expected);
        });
});
