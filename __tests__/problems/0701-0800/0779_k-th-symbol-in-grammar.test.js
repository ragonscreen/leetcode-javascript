import { describe, expect, test } from 'bun:test';
import { kthGrammar } from '../../../src/problems/0701-0800/0779_k-th-symbol-in-grammar.js';

const testcases = [
        { n: 1, k: 1, expected: 0 },
        { n: 2, k: 1, expected: 0 },
        { n: 2, k: 2, expected: 1 },
        { n: 5, k: 1, expected: 0 },
        { n: 30, k: 434_991_989, expected: 0 },
        { n: 4, k: 6, expected: 0 },
        { n: 12, k: 487, expected: 0 },
        { n: 7, k: 15, expected: 1 },
];

describe('kthGrammar', () => {
        test.each(
                structuredClone(testcases),
        )('kthGrammar($n, $k) -> $expected', ({ n, k, expected }) => {
                expect(kthGrammar(n, k)).toStrictEqual(expected);
        });
});
