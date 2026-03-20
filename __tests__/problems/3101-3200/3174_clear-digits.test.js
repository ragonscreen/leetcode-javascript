import { describe, expect, test } from 'bun:test';
import { clearDigits } from '../../../src/problems/3101-3200/3174_clear-digits.js';

const testcases = [
        { s: 'abc', expected: 'abc' },
        { s: 'cb34', expected: '' },
];

describe('clearDigits', () => {
        test.each(structuredClone(testcases))('clearDigits($s) -> $expected', ({
                s,
                expected,
        }) => {
                expect(clearDigits(s)).toStrictEqual(expected);
        });
});
