import { describe, expect, test } from 'bun:test';
import {
        removeStars,
        removeStars1,
} from '../../../src/problems/2301-2400/2390_removing-stars-from-a-string.js';

const testcases = [
        { s: 'leet**cod*e', expected: 'lecoe' },
        { s: 'erase*****', expected: '' },
];

describe('removeStars', () => {
        test.each(structuredClone(testcases))('removeStars($s) -> $expected', ({
                s,
                expected,
        }) => {
                expect(removeStars(s)).toStrictEqual(expected);
        });
});

describe('removeStars1', () => {
        test.each(
                structuredClone(testcases),
        )('removeStars1($s) -> $expected', ({ s, expected }) => {
                expect(removeStars1(s)).toStrictEqual(expected);
        });
});
