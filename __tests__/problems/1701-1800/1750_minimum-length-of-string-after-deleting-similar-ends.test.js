import { describe, expect, test } from 'bun:test';
import { minimumLength } from '../../../src/problems/1701-1800/1750_minimum-length-of-string-after-deleting-similar-ends.js';

const testcases = [
        { s: 'ca', expected: 2 },
        { s: 'cabaabac', expected: 0 },
        { s: 'aabccabba', expected: 3 },
        { s: 'babbacc', expected: 7 },
];

describe('minimumLength', () => {
        test.each(
                structuredClone(testcases),
        )('minimumLength($s) -> $expected', ({ s, expected }) => {
                expect(minimumLength(s)).toStrictEqual(expected);
        });
});
