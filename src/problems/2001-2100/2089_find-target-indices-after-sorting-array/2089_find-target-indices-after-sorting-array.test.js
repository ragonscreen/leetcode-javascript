import { describe, expect, test } from 'bun:test';

import { targetIndices } from './2089_find-target-indices-after-sorting-array.js';

const testcases = [
        { nums: [1, 2, 5, 2, 3], target: 2, expected: [1, 2] },
        { nums: [1, 2, 5, 2, 3], target: 3, expected: [3] },
        { nums: [1, 2, 5, 2, 3], target: 5, expected: [4] },
];

describe('targetIndices', () => {
        test.each(structuredClone(testcases))(
                'targetIndices($nums, $target) -> $expected',
                ({ nums, target, expected }) => {
                        expect([...targetIndices(nums, target)]).toStrictEqual(expected);
                },
        );
});
