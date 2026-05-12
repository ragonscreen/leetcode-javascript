import { describe, expect, test } from 'bun:test';
import { rob } from '../../../src/problems/0201-0300/0213_house-robber-ii.js';

const testcases = [
        { nums: [2, 3, 2], expected: 3 },
        { nums: [1, 2, 3, 1], expected: 4 },
        { nums: [1, 2, 3], expected: 3 },
];

describe('rob', () => {
        test.each(structuredClone(testcases))('rob($nums) -> $expected', ({
                nums,
                expected,
        }) => {
                expect(rob(nums)).toStrictEqual(expected);
        });
});
