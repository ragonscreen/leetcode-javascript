import { describe, expect, test } from 'bun:test';

import { countCommas } from '../../../src/problems/3801-3900/3871_count-commas-in-range-ii.js';

const testcases = [
        { n: 1002, expected: 3 },
        { n: 998, expected: 0 },
        { n: 999_999, expected: 999_000 },
        { n: 999_999_999, expected: 1_998_999_000 },
        { n: 444_555_666_777, expected: 1_332_665_999_334 },
];

describe('countCommas', () => {
        test.each(structuredClone(testcases))('countCommas($n) -> $expected', ({ n, expected }) => {
                expect(countCommas(n)).toStrictEqual(expected);
        });
});
