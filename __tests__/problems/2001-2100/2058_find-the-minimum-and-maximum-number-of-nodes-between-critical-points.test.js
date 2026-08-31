import { describe, expect, test } from 'bun:test';
import { nodesBetweenCriticalPoints } from '../../../src/problems/2001-2100/2058_find-the-minimum-and-maximum-number-of-nodes-between-critical-points.js';
import { arrayToList } from '../../utils/linked-list.js';

const testcases = [
        { head: [3, 1], expected: [-1, -1] },
        { head: [5, 3, 1, 2, 5, 1, 2], expected: [1, 3] },
        { head: [1, 3, 2, 2, 3, 2, 2, 2, 7], expected: [3, 3] },
];

describe('nodesBetweenCriticalPoints', () => {
        test.each(
                structuredClone(testcases),
        )('nodesBetweenCriticalPoints($head) -> $expected', ({
                head,
                expected,
        }) => {
                expect(
                        nodesBetweenCriticalPoints(arrayToList(head)),
                ).toStrictEqual(expected);
        });
});
