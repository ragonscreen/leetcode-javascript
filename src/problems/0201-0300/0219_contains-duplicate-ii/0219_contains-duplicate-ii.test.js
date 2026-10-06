import { describe, expect, test } from 'bun:test';

import { containsNearbyDuplicate } from './0219_contains-duplicate-ii.js';

const testcases = [
        { nums: [1, 2, 3, 1], k: 3, expected: true },
        { nums: [1, 0, 1, 1], k: 1, expected: true },
        { nums: [1, 2, 3, 1, 2, 3], k: 2, expected: false },
];

describe('containsNearbyDuplicate', () => {
        test.each(testcases)(
                'containsNearbyDuplicate($nums, $k) -> $expected',
                ({ nums, k, expected }) => {
                        expect(containsNearbyDuplicate(nums, k)).toStrictEqual(expected);
                },
        );
});
