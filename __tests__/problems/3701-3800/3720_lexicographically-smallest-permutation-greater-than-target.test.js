import { describe, expect, test } from 'bun:test';
import {
        lexGreaterPermutation,
        lexGreaterPermutation1,
} from '../../../src/problems/3701-3800/3720_lexicographically-smallest-permutation-greater-than-target.js';

const testcases = [
        { s: 'abc', target: 'bba', expected: 'bca' },
        { s: 'leet', target: 'code', expected: 'eelt' },
        { s: 'baba', target: 'bbaa', expected: '' },
        { s: 'ab', target: 'ab', expected: 'ba' },
        { s: 'aab', target: 'aab', expected: 'aba' },
        { s: 'aab', target: 'aba', expected: 'baa' },
        { s: 'aba', target: 'aab', expected: 'aba' },
        { s: 'abb', target: 'baa', expected: 'bab' },
        { s: 'aaa', target: 'abb', expected: '' },
];

describe('lexGreaterPermutation', () => {
        test.each(
                structuredClone(testcases),
        )('lexGreaterPermutation($s, $target) -> $expected', ({
                s,
                target,
                expected,
        }) => {
                expect(lexGreaterPermutation(s, target)).toStrictEqual(
                        expected,
                );
        });
});

describe('lexGreaterPermutation1', () => {
        test.each(
                structuredClone(testcases),
        )('lexGreaterPermutation1($s, $target) -> $expected', ({
                s,
                target,
                expected,
        }) => {
                expect(lexGreaterPermutation1(s, target)).toStrictEqual(
                        expected,
                );
        });
});
