import { describe, expect, test } from 'bun:test';
import { getLastMoment } from '../../../src/problems/1501-1600/1503_last-moment-before-all-ants-fall-out-of-a-plank.js';

const testcases = [
        { n: 4, left: [4, 3], right: [0, 1], expected: 4 },
        { n: 7, left: [], right: [0, 1, 2, 3, 4, 5, 6, 7], expected: 7 },
        { n: 7, left: [0, 1, 2, 3, 4, 5, 6, 7], right: [], expected: 7 },
        { n: 20, left: [4, 7, 15], right: [9, 3, 13, 10], expected: 17 },
];

describe('getLastMoment', () => {
        test.each(
                structuredClone(testcases),
        )('getLastMoment($n, $left, $right) -> $expected', ({
                n,
                left,
                right,
                expected,
        }) => {
                expect(getLastMoment(n, left, right)).toStrictEqual(expected);
        });
});
