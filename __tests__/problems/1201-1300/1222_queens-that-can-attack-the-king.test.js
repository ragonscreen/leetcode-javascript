import { describe, expect, test } from 'bun:test';
import { queensAttacktheKing } from '../../../src/problems/1201-1300/1222_queens-that-can-attack-the-king.js';

const testcases = [
        {
                queens: [
                        [0, 1],
                        [1, 0],
                        [4, 0],
                        [0, 4],
                        [3, 3],
                        [2, 4],
                ],
                king: [0, 0],
                expected: [
                        [0, 1],
                        [1, 0],
                        [3, 3],
                ],
        },
        {
                queens: [
                        [0, 0],
                        [1, 1],
                        [2, 2],
                        [3, 4],
                        [3, 5],
                        [4, 4],
                        [4, 5],
                ],
                king: [3, 3],
                expected: [
                        [2, 2],
                        [3, 4],
                        [4, 4],
                ],
        },
];

describe('queensAttacktheKing', () => {
        test.each(
                structuredClone(testcases),
        )('queensAttacktheKing($queens, $king) -> $expected', ({
                queens,
                king,
                expected,
        }) => {
                expect(queensAttacktheKing(queens, king)).toContainAllValues(
                        expected,
                );
        });
});
