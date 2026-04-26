import { describe, expect, test } from 'bun:test';
import { numMovesStones } from '../../../src/problems/1001-1100/1033_moving-stones-until-consecutive.js';

const testcases = [
        // { a: 4, b: 3, c: 2, expected: [0, 0] },
        { a: 1, b: 2, c: 5, expected: [1, 2] },
        { a: 3, b: 5, c: 1, expected: [1, 2] },
        { a: 1, b: 7, c: 2, expected: [1, 4] },
        { a: 1, b: 4, c: 7, expected: [2, 4] },
];

describe('numMovesStones', () => {
        test.each(
                structuredClone(testcases),
        )('numMovesStones($a, $b, $c) -> $expected', ({
                a,
                b,
                c,
                expected,
        }) => {
                expect(numMovesStones(a, b, c)).toStrictEqual(expected);
        });
});
