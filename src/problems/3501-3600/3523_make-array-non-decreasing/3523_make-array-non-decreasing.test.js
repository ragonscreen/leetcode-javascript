import { describe, expect, test } from 'bun:test';

import { maximumPossibleSize } from './3523_make-array-non-decreasing.js';

const testcases = [
        { nums: [4, 2, 5, 3, 5], expected: 3 },
        { nums: [1, 2, 3], expected: 3 },
];

describe('maximumPossibleSize', () => {
        test.each(structuredClone(testcases))(
                'maximumPossibleSize($nums) -> $expected',
                ({ nums, expected }) => {
                        expect(maximumPossibleSize(nums)).toStrictEqual(expected);
                },
        );
});
