import { describe, expect, test } from 'bun:test';
import { minMirrorPairDistance } from '../../../src/problems/3701-3800/3761_minimum-absolute-distance-between-mirror-pairs.js';

const testcases = [
        { nums: [12, 21, 45, 33, 54], expected: 1 },
        { nums: [120, 21], expected: 1 },
        { nums: [21, 120], expected: -1 },
        { nums: [100, 1], expected: 1 },
        { nums: [1, 100], expected: -1 },
        { nums: [100, 100], expected: -1 },
];

describe('minMirrorPairDistance', () => {
        test.each(
                structuredClone(testcases),
        )('minMirrorPairDistance($nums) -> $expected', ({ nums, expected }) => {
                expect(minMirrorPairDistance(nums)).toStrictEqual(expected);
        });
});
