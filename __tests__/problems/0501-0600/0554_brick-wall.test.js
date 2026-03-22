import { describe, expect, test } from 'bun:test';
import {
        leastBricks,
        leastBricks1,
} from '../../../src/problems/0501-0600/0554_brick-wall.js';

const testcases = [
        {
                wall: [
                        [1, 2, 2, 1],
                        [3, 1, 2],
                        [1, 3, 2],
                        [2, 4],
                        [3, 1, 2],
                        [1, 3, 1, 1],
                ],
                expected: 2,
        },
        { wall: [[1], [1], [1]], expected: 3 },
];

describe('leastBricks', () => {
        test.each(
                structuredClone(testcases),
        )('leastBricks($wall) -> $expected', ({ wall, expected }) => {
                expect(leastBricks(wall)).toStrictEqual(expected);
        });
});

describe('leastBricks1', () => {
        test.each(
                structuredClone(testcases),
        )('leastBricks1($wall) -> $expected', ({ wall, expected }) => {
                expect(leastBricks1(wall)).toStrictEqual(expected);
        });
});
