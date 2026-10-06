import { describe, expect, test } from 'bun:test';

import { containsDuplicate } from './0217_contains-duplicate.js';

const testcases = [
        { nums: [1, 2, 3, 1], expected: true },
        { nums: [1, 2, 3, 4], expected: false },
        { nums: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2], expected: true },
];

describe('containsDuplicate', () => {
        test.each(structuredClone(testcases))(
                'containsDuplicate($nums) -> $expected',
                ({ nums, expected }) => {
                        expect(containsDuplicate(nums)).toStrictEqual(expected);
                },
        );
});
