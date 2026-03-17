import { describe, expect, test } from 'bun:test';
import { calculate } from '../../../src/problems/0201-0300/0227_basic-calculator-ii.js';

const testcases = [
        { s: '3+2*2', expected: 7 },
        { s: ' 3/2 ', expected: 1 },
        { s: ' 3+5 / 2 ', expected: 5 },
        { s: '1+10/2+5/5', expected: 7 },
        { s: '3+2+2', expected: 7 },
];

describe('calculate', () => {
        test.each(structuredClone(testcases))('calculate($s) -> $expected', ({
                s,
                expected,
        }) => {
                expect(calculate(s)).toStrictEqual(expected);
        });
});
