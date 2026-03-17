import { describe, expect, test } from 'bun:test';
import { backspaceCompare } from '../../../src/problems/0801-0900/0844_backspace-string-compare.js';

const testcases = [
        { s: 'ab#c', t: 'ad#c', expected: true },
        { s: 'ab##', t: 'c#d#', expected: true },
        { s: 'a#c', t: 'b', expected: false },
];

describe('backspaceCompare', () => {
        test.each(
                structuredClone(testcases),
        )('backspaceCompare($s, $t) -> $expected', ({ s, t, expected }) => {
                expect(backspaceCompare(s, t)).toStrictEqual(expected);
        });
});
