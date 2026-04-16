import { describe, expect, test } from 'bun:test';
import { candy } from '../../../src/problems/0101-0200/0135_candy.js';

const testcases = [
        { ratings: [1, 0, 2], expected: 5 },
        { ratings: [1, 2, 2], expected: 4 },
        { ratings: [1, 2, 87, 87, 87, 2, 1], expected: 13 },
        { ratings: [1, 3, 2, 2, 1], expected: 7 },
        { ratings: [1, 6, 10, 8, 7, 3, 2], expected: 18 },
];

describe('candy', () => {
        test.each(structuredClone(testcases))('candy($ratings) -> $expected', ({
                ratings,
                expected,
        }) => {
                expect(candy(ratings)).toStrictEqual(expected);
        });
});
