import { describe, expect, test } from 'bun:test';
import { isHappy } from '../../../src/problems/0201-0300/0202_happy-number.js';

const testcases = [
        { n: 19, expected: true },
        { n: 2, expected: false },
        { n: 1, expected: true },
        { n: 10, expected: true },
        { n: 100, expected: true },
        { n: 1000, expected: true },
];

describe('isHappy', () => {
        test.each(structuredClone(testcases))('isHappy($n) -> $expected', ({
                n,
                expected,
        }) => {
                expect(isHappy(n)).toStrictEqual(expected);
        });
});
