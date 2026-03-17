import { describe, expect, test } from 'bun:test';
import {
        longestCommonPrefix,
        longestCommonPrefix1,
} from '../../../src/problems/0001-0100/0014_longest-common-prefix.js';

const testcases = [
        { strs: ['flower', 'flow', 'flight'], expected: 'fl' },
        { strs: ['dog', 'racecar', 'car'], expected: '' },
        { strs: ['flow', 'flower', 'flight'], expected: 'fl' },
        { strs: ['flow', 'flower', 'flo'], expected: 'flo' },
];

describe('longestCommonPrefix', () => {
        test.each(
                structuredClone(testcases),
        )('longestCommonPrefix($strs) -> $expected', ({ strs, expected }) => {
                expect(longestCommonPrefix(strs)).toStrictEqual(expected);
        });
});

describe('longestCommonPrefix1', () => {
        test.each(
                structuredClone(testcases),
        )('longestCommonPrefix1($strs) -> $expected', ({ strs, expected }) => {
                expect(longestCommonPrefix1(strs)).toStrictEqual(expected);
        });
});
