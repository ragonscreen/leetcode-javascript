import { describe, expect, test } from 'bun:test';

import { maxKelements, maxKelements1 } from './2530_maximal-score-after-applying-k-operations.js';

const testcases = [
        { nums: [10, 10, 10, 10, 10], k: 5, expected: 50 },
        { nums: [1, 10, 3, 3, 3], k: 3, expected: 17 },
        { nums: [1_000_000_000], k: 100_000, expected: 1_500_099_992 },
];

describe('maxKelements', () => {
        test.each(structuredClone(testcases))(
                'maxKelements($nums, $k) -> $expected',
                ({ nums, k, expected }) => {
                        expect(maxKelements(nums, k)).toStrictEqual(expected);
                },
        );
});

describe('maxKelements1', () => {
        test.each(structuredClone(testcases))(
                'maxKelements1($nums, $k) -> $expected',
                ({ nums, k, expected }) => {
                        expect(maxKelements1(nums, k)).toStrictEqual(expected);
                },
        );
});
