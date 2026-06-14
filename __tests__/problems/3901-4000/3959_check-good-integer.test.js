import { describe, expect, test } from 'bun:test';
import { checkGoodInteger } from '../../../src/problems/3901-4000/3959_check-good-integer.js';

const testcases = [
        { n: 1000, expected: false },
        { n: 19, expected: true },
];

describe('checkGoodInteger', () => {
        test.each(
                structuredClone(testcases),
        )('checkGoodInteger($n) -> $expected', ({ n, expected }) => {
                expect(checkGoodInteger(n)).toStrictEqual(expected);
        });
});
