import { describe, expect, test } from 'bun:test';
import { rotateString } from '../../../src/problems/0701-0800/0796_rotate-string.js';

const testcases = [
        { s: 'abcde', goal: 'cdeab', expected: true },
        { s: 'abcde', goal: 'abced', expected: false },
        { s: 'defdefdefabcabc', goal: 'defdefabcabcdef', expected: true },
];

describe('rotateString', () => {
        test.each(
                structuredClone(testcases),
        )('rotateString($s, $goal) -> $expected', ({ s, goal, expected }) => {
                expect(rotateString(s, goal)).toStrictEqual(expected);
        });
});
