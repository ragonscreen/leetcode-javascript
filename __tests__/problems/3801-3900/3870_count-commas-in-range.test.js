import { describe, expect, test } from 'bun:test';

import { countCommas } from '../../../src/problems/3801-3900/3870_count-commas-in-range.js';

const testcases = [
        { n: 1002, expected: 3 },
        { n: 998, expected: 0 },
        { n: 96_776, expected: 95_777 },
        { n: 1, expected: 0 },
        { n: 998, expected: 0 },
        { n: 999, expected: 0 },
        { n: 1000, expected: 1 },
        { n: 100_000, expected: 99_001 },
];

describe('countCommas', () => {
        test.each(structuredClone(testcases))('countCommas($n) -> $expected', ({ n, expected }) => {
                expect(countCommas(n)).toStrictEqual(expected);
        });
});
