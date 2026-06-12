import { describe, expect, test } from 'bun:test';
import {
        minWastedSpace,
        minWastedSpace1,
} from '../../../src/problems/1801-1900/1889_minimum-space-wasted-from-packaging.js';

const testcases = [
        {
                packages: [2, 3, 5],
                boxes: [
                        [4, 8],
                        [2, 8],
                ],
                expected: 6,
        },
        {
                packages: [2, 3, 5],
                boxes: [
                        [1, 4],
                        [2, 3],
                        [3, 4],
                ],
                expected: -1,
        },
        {
                packages: [3, 5, 8, 10, 11, 12],
                boxes: [[12], [11, 9], [10, 5, 14]],
                expected: 9,
        },
        {
                packages: [7, 19, 11, 7, 16, 13, 15, 5, 9, 5],
                boxes: [[18], [9, 19, 14], [13, 12, 8], [17], [3, 2]],
                expected: 23,
        },
];

describe('minWastedSpace', () => {
        test.each(
                structuredClone(testcases),
        )('minWastedSpace($packages, $boxes) -> $expected', ({
                packages,
                boxes,
                expected,
        }) => {
                expect(minWastedSpace(packages, boxes)).toStrictEqual(expected);
        });
});

describe('minWastedSpace1', () => {
        test.each(
                structuredClone(testcases),
        )('minWastedSpace1($packages, $boxes) -> $expected', ({
                packages,
                boxes,
                expected,
        }) => {
                expect(minWastedSpace1(packages, boxes)).toStrictEqual(
                        expected,
                );
        });
});
