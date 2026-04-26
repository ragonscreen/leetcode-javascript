import { describe, expect, test } from 'bun:test';
import { sortTheStudents } from '../../../src/problems/2501-2600/2545_sort-the-students-by-their-kth-score.js';

const testcases = [
        {
                score: [
                        [10, 6, 9, 1],
                        [7, 5, 11, 2],
                        [4, 8, 3, 15],
                ],
                k: 2,
                expected: [
                        [7, 5, 11, 2],
                        [10, 6, 9, 1],
                        [4, 8, 3, 15],
                ],
        },
        {
                score: [
                        [3, 4],
                        [5, 6],
                ],
                k: 0,
                expected: [
                        [5, 6],
                        [3, 4],
                ],
        },
];

describe('sortTheStudents', () => {
        test.each(
                structuredClone(testcases),
        )('sortTheStudents($score, $k) -> $expected', ({
                score,
                k,
                expected,
        }) => {
                expect(sortTheStudents(score, k)).toStrictEqual(expected);
        });
});
