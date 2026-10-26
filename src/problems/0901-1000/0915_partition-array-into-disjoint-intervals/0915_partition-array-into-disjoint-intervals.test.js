import { describe, expect, test } from 'bun:test';

import { partitionDisjoint } from './0915_partition-array-into-disjoint-intervals.js';

const testcases = [
        { nums: [5, 0, 3, 8, 6], expected: 3 },
        { nums: [1, 1, 1, 0, 6, 12], expected: 4 },
];

describe('partitionDisjoint', () => {
        test.each(structuredClone(testcases))(
                'partitionDisjoint($nums) -> $expected',
                ({ nums, expected }) => {
                        expect(partitionDisjoint(nums)).toStrictEqual(expected);
                },
        );
});
