import { describe, expect, test } from 'bun:test';

import { maxIceCream } from '../../../src/problems/1801-1900/1833_maximum-ice-cream-bars.js';

const testcases = [
        { costs: [1, 3, 2, 4, 1], coins: 7, expected: 4 },
        { costs: [10, 6, 8, 7, 7, 8], coins: 5, expected: 0 },
        { costs: [1, 6, 3, 1, 2, 5], coins: 20, expected: 6 },
];

describe('maxIceCream', () => {
        test.each(structuredClone(testcases))(
                'maxIceCream($costs, $coins) -> $expected',
                ({ costs, coins, expected }) => {
                        expect(maxIceCream(costs, coins)).toStrictEqual(expected);
                },
        );
});
