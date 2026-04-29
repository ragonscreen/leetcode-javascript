import { describe, expect, test } from 'bun:test';
import { countPairs } from '../../../src/problems/3801-3900/3805_count-caesar-cipher-pairs.js';

const testcases = [
        { words: ['fusion', 'layout'], expected: 1 },
        { words: ['ab', 'aa', 'za', 'aa'], expected: 2 },
];

describe('countPairs', () => {
        test.each(
                structuredClone(testcases),
        )('countPairs($words) -> $expected', ({ words, expected }) => {
                expect(countPairs(words)).toStrictEqual(expected);
        });
});
