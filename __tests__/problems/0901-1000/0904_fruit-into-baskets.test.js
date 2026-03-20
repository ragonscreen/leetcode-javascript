import { describe, expect, test } from 'bun:test';
import { totalFruit } from '../../../src/problems/0901-1000/0904_fruit-into-baskets.js';

const testcases = [
        { fruits: [1, 2, 1], expected: 3 },
        { fruits: [0, 1, 2, 2], expected: 3 },
        { fruits: [1, 2, 3, 2, 2], expected: 4 },
        { fruits: [1, 1, 1, 1, 1, 1, 1], expected: 7 },
];

describe('totalFruit', () => {
        test.each(
                structuredClone(testcases),
        )('totalFruit($fruits) -> $expected', ({ fruits, expected }) => {
                expect(totalFruit(fruits)).toStrictEqual(expected);
        });
});
