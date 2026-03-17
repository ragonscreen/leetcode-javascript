import { describe, expect, test } from 'bun:test';
import { makeGood } from '../../../src/problems/1501-1600/1544_make-the-string-great.js';

const testcases = [
        { s: 'leEeetcode', expected: 'leetcode' },
        { s: 'abBAcC', expected: '' },
        { s: 's', expected: 's' },
        { s: 'leFeetcode', expected: 'leFeetcode' },
        { s: 'lEeeetcode', expected: 'leetcode' },
        { s: 'leeEEeetcode', expected: 'leetcode' },
];

describe('makeGood', () => {
        test.each(structuredClone(testcases))('makeGood($s) -> $expected', ({
                s,
                expected,
        }) => {
                expect(makeGood(s)).toStrictEqual(expected);
        });
});
