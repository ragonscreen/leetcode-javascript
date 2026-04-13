import { describe, expect, test } from 'bun:test';
import { minimumSize } from '../../../src/problems/1701-1800/1760_minimum-limit-of-balls-in-a-bag.js';

const testcases = [
        { nums: [9], maxOperations: 2, expected: 3 },
        { nums: [2, 4, 8, 2], maxOperations: 4, expected: 2 },
];

describe('minimumSize', () => {
        test.each(
                structuredClone(testcases),
        )('minimumSize($nums, $maxOperations) -> $expected', ({
                nums,
                maxOperations,
                expected,
        }) => {
                expect(minimumSize(nums, maxOperations)).toStrictEqual(
                        expected,
                );
        });
});
