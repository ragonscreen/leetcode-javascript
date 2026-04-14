import { describe, expect, test } from 'bun:test';
import { lengthOfLastWord } from '../../../src/problems/0001-0100/0058_length-of-last-word.js';

const testcases = [
        { s: 'Hello World', expected: 5 },
        { s: '   fly me   to   the moon  ', expected: 4 },
        { s: 'luffy is still joyboy', expected: 6 },
        { s: 's', expected: 1 },
        { s: 's   ', expected: 1 },
        { s: '   s', expected: 1 },
        { s: '   s   ', expected: 1 },
        { s: '       ', expected: 0 },
];

describe('lengthOfLastWord', () => {
        test.each(
                structuredClone(testcases),
        )('lengthOfLastWord($s) -> $expected', ({ s, expected }) => {
                expect(lengthOfLastWord(s)).toStrictEqual(expected);
        });
});
