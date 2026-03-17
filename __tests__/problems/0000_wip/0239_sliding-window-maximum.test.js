import { describe, expect, test } from 'bun:test';
import { maxSlidingWindow } from '../../../src/problems/0000_wip/0239_sliding-window-maximum.js';

const testcases = [
        {
                nums: [1, 3, -1, -3, 5, 3, 6, 7],
                k: 3,
                expected: [3, 3, 5, 5, 6, 7],
        },
        { nums: [1], k: 1, expected: [1] },
];

describe('maxSlidingWindow', () => {
        test.each(structuredClone(testcases)).failing(
                'maxSlidingWindow($nums, $k) -> $expected',
                ({ nums, k, expected }) => {
                        expect(maxSlidingWindow(nums, k)).toStrictEqual(
                                expected,
                        );
                },
        );
});
