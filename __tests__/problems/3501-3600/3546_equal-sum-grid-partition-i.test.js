import { describe, expect, test } from 'bun:test';

import {
        canPartitionGrid,
        canPartitionGrid1,
} from '../../../src/problems/3501-3600/3546_equal-sum-grid-partition-i.js';

const testcases = [
        {
                grid: [
                        [1, 4],
                        [2, 3],
                ],
                expected: true,
        },
        {
                grid: [
                        [1, 3],
                        [2, 4],
                ],
                expected: false,
        },
        {
                grid: [[42_047], [57_775], [99_822]],
                expected: true,
        },
];

describe('canPartitionGrid', () => {
        test.each(structuredClone(testcases))(
                'canPartitionGrid($grid) -> $expected',
                ({ grid, expected }) => {
                        expect(canPartitionGrid(grid)).toStrictEqual(expected);
                },
        );
});

describe('canPartitionGrid1', () => {
        test.each(structuredClone(testcases))(
                'canPartitionGrid1($grid) -> $expected',
                ({ grid, expected }) => {
                        expect(canPartitionGrid1(grid)).toStrictEqual(expected);
                },
        );
});
