import { describe, expect, test } from 'bun:test';
import { findMaxFish } from '../../../src/problems/2601-2700/2658_maximum-number-of-fish-in-a-grid.js';

const testcases = [
        { grid: [[0,2,1,0],[4,0,0,3],[1,0,0,4],[0,3,2,0]], expected: 7 },
        { grid: [[1,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,1]], expected: 1 },
];

describe('findMaxFish', () => {
        test.each(structuredClone(testcases))('findMaxFish($grid) -> $expected', ({ grid, expected }) => {
                expect(findMaxFish(grid)).toStrictEqual(expected);
        });
});