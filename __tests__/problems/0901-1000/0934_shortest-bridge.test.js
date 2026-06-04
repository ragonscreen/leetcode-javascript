import { describe, expect, test } from 'bun:test';
import { shortestBridge } from '../../../src/problems/0901-1000/0934_shortest-bridge.js';

const testcases = [
        {
                grid: [
                        [0, 1],
                        [1, 0],
                ],
                expected: 1,
        },
        {
                grid: [
                        [0, 1, 0],
                        [0, 0, 0],
                        [0, 0, 1],
                ],
                expected: 2,
        },
        {
                grid: [
                        [1, 1, 1, 1, 1],
                        [1, 0, 0, 0, 1],
                        [1, 0, 1, 0, 1],
                        [1, 0, 0, 0, 1],
                        [1, 1, 1, 1, 1],
                ],
                expected: 1,
        },
];

describe('shortestBridge', () => {
        test.each(
                structuredClone(testcases),
        )('shortestBridge($grid) -> $expected', ({ grid, expected }) => {
                expect(shortestBridge(grid)).toStrictEqual(expected);
        });
});
