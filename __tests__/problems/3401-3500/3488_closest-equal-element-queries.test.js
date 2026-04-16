import { describe, expect, test } from 'bun:test';
import {
        solveQueries,
        solveQueries1,
} from '../../../src/problems/3401-3500/3488_closest-equal-element-queries.js';

const testcases = [
        {
                nums: [1, 3, 1, 4, 1, 3, 2],
                queries: [0, 3, 5],
                expected: [2, -1, 3],
        },
        {
                nums: [1, 2, 3, 4],
                queries: [0, 1, 2, 3],
                expected: [-1, -1, -1, -1],
        },
];

describe('solveQueries', () => {
        test.each(
                structuredClone(testcases),
        )('solveQueries($nums, $queries) -> $expected', ({
                nums,
                queries,
                expected,
        }) => {
                expect(solveQueries(nums, queries)).toStrictEqual(expected);
        });
});

describe('solveQueries1', () => {
        test.each(
                structuredClone(testcases),
        )('solveQueries1($nums, $queries) -> $expected', ({
                nums,
                queries,
                expected,
        }) => {
                expect(solveQueries1(nums, queries)).toStrictEqual(expected);
        });
});
