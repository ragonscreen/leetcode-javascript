import { describe, expect, test } from 'bun:test';
import { scoreOfString } from '../../../src/problems/3101-3200/3110_score-of-a-string.js';

const testcases = [
        { s: 'hello', expected: 13 },
        { s: 'zaz', expected: 50 },
];

describe('scoreOfString', () => {
        test.each(
                structuredClone(testcases),
        )('scoreOfString($s) -> $expected', ({ s, expected }) => {
                expect(scoreOfString(s)).toStrictEqual(expected);
        });
});
