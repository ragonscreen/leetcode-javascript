import { describe, expect, test } from 'bun:test';

import { minRemoval } from './3634_minimum-removals-to-balance-array.js';

const testcases = [
        { nums: [2, 1, 5], k: 2, expected: 1 },
        { nums: [1, 6, 2, 9], k: 3, expected: 2 },
        { nums: [4, 6], k: 2, expected: 0 },
];

describe('minRemoval', () => {
        test.each(structuredClone(testcases))(
                'minRemoval($nums, $k) -> $expected',
                ({ nums, k, expected }) => {
                        expect(minRemoval(nums, k)).toStrictEqual(expected);
                },
        );
});
