import { describe, expect, test } from 'bun:test';
import { calculate } from '../../../src/problems/0201-0300/0224_basic-calculator.js';

const testcases = [
        { s: '1 + 1', expected: 2 },
        { s: ' 2-1 + 2 ', expected: 3 },
        { s: '(1+(4+5+2)-3)+(6+8)', expected: 23 },
        { s: '1+(10+2)+(10+(20+5)+4)', expected: 52 },
        { s: '1+(10+2)+(-(20+5)+4)', expected: -8 },
        { s: '2147483647', expected: 2_147_483_647 },
        { s: '1-11', expected: -10 },
];

describe('calculate', () => {
        test.each(structuredClone(testcases))('calculate($s) -> $expected', ({
                s,
                expected,
        }) => {
                expect(calculate(s)).toStrictEqual(expected);
        });
});
