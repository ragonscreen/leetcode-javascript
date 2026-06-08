import { describe, expect, test } from 'bun:test';
import {
        findLongestChain,
        findLongestChain1,
} from '../../../src/problems/0601-0700/0646_maximum-length-of-pair-chain.js';

const testcases = [
        {
                pairs: [
                        [1, 2],
                        [2, 3],
                        [3, 4],
                ],
                expected: 2,
        },
        {
                pairs: [
                        [1, 2],
                        [7, 8],
                        [4, 5],
                ],
                expected: 3,
        },
];

describe('findLongestChain', () => {
        test.each(
                structuredClone(testcases),
        )('findLongestChain($pairs) -> $expected', ({ pairs, expected }) => {
                expect(findLongestChain(pairs)).toStrictEqual(expected);
        });
});

describe('findLongestChain1', () => {
        test.each(
                structuredClone(testcases),
        )('findLongestChain1($pairs) -> $expected', ({ pairs, expected }) => {
                expect(findLongestChain1(pairs)).toStrictEqual(expected);
        });
});
