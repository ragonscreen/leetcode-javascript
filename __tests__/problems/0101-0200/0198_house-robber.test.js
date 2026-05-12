import { describe, expect, test } from 'bun:test';
import {
        rob,
        rob1,
} from '../../../src/problems/0101-0200/0198_house-robber.js';

const testcases = [
        { nums: [1, 2, 3, 1], expected: 4 },
        { nums: [2, 7, 9, 3, 1], expected: 12 },
        { nums: [2, 1], expected: 2 },
        { nums: [5], expected: 5 },
        { nums: [2, 1, 1, 2], expected: 4 },
];

describe('rob', () => {
        test.each(structuredClone(testcases))('rob($nums) -> $expected', ({
                nums,
                expected,
        }) => {
                expect(rob(nums)).toStrictEqual(expected);
        });
});

describe('rob1', () => {
        test.each(structuredClone(testcases))('rob1($nums) -> $expected', ({
                nums,
                expected,
        }) => {
                expect(rob1(nums)).toStrictEqual(expected);
        });
});
