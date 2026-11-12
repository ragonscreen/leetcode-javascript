import { describe, expect, test } from 'bun:test';

import { search, search1 } from './0704_binary-search.js';

const testcases = [
        { nums: [-1, 0, 3, 5, 9, 12], target: 9, expected: 4 },
        { nums: [-1, 0, 3, 5, 9, 12], target: 2, expected: -1 },
        { nums: [-1, 0, 3, 5, 9, 12], target: 13, expected: -1 },
        { nums: [-1, 0, 3, 5, 9, 12], target: -2, expected: -1 },
        { nums: [5], target: 5, expected: 0 },
        { nums: [5], target: -5, expected: -1 },
        { nums: [2, 5], target: 5, expected: 1 },
];

describe('search', () => {
        test.each(structuredClone(testcases))(
                'search($nums, $target) -> $expected',
                ({ nums, target, expected }) => {
                        expect(search(nums, target)).toStrictEqual(expected);
                },
        );
});

describe('search1', () => {
        test.each(structuredClone(testcases))(
                'search1($nums, $target) -> $expected',
                ({ nums, target, expected }) => {
                        expect(search1(nums, target)).toStrictEqual(expected);
                },
        );
});
