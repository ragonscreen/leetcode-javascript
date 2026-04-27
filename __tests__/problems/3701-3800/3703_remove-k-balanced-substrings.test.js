import { describe, expect, test } from 'bun:test';
import { removeSubstring } from '../../../src/problems/3701-3800/3703_remove-k-balanced-substrings.js';

const testcases = [
        { s: '(())', k: 1, expected: '' },
        { s: '(()(', k: 1, expected: '((' },
        { s: '((()))()()()', k: 3, expected: '()()()' },
        { s: '))', k: 1, expected: '))' },
        { s: ')))', k: 1, expected: ')))' },
        { s: '()))', k: 2, expected: '()))' },
];

describe('removeSubstring', () => {
        test.each(
                structuredClone(testcases),
        )('removeSubstring($s, $k) -> $expected', ({ s, k, expected }) => {
                expect(removeSubstring(s, k)).toStrictEqual(expected);
        });
});
