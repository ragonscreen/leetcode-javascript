import { describe, expect, test } from 'bun:test';
import { maximumBeauty } from '../../../src/problems/2701-2800/2779_maximum-beauty-of-an-array-after-applying-operation.js';

const testcases = [
        { nums: [4, 6, 1, 2], k: 2, expected: 3 },
        { nums: [1, 1, 1, 1], k: 10, expected: 4 },
];

describe('maximumBeauty', () => {
        test.each(
                structuredClone(testcases),
        )('maximumBeauty($nums, $k) -> $expected', ({ nums, k, expected }) => {
                expect(maximumBeauty(nums, k)).toStrictEqual(expected);
        });
});
