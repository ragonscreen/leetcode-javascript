import { describe, expect, test } from 'bun:test';
import { countSpecialNumbers } from '../../../src/problems/0000_wip/2376_count-special-integers.js';

const testcases = [
        // { n: 20, expected: 19 },
        // { n: 5, expected: 5 },
        // { n: 135, expected: 110 },
        { n: 724, expected: 542 },
        // { n: 10_000, expected: 5274 },
        // { n: 1000, expected: 738 },
];

describe.skip('countSpecialNumbers', () => {
        test.each(
                structuredClone(testcases),
        )('countSpecialNumbers($n) -> $expected', ({ n, expected }) => {
                expect(countSpecialNumbers(n)).toStrictEqual(expected);
        });
});
