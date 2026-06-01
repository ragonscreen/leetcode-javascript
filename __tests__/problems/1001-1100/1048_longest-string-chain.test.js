import { describe, expect, test } from 'bun:test';
import { longestStrChain } from '../../../src/problems/1001-1100/1048_longest-string-chain.js';

const testcases = [
        { words: ['a', 'b', 'ba', 'bca', 'bda', 'bdca'], expected: 4 },
        { words: ['xbc', 'pcxbcf', 'xb', 'cxbc', 'pcxbc'], expected: 5 },
        { words: ['abcd', 'dbqca'], expected: 1 },
];

describe('longestStrChain', () => {
        test.each(
                structuredClone(testcases),
        )('longestStrChain($words) -> $expected', ({ words, expected }) => {
                expect(longestStrChain(words)).toStrictEqual(expected);
        });
});
