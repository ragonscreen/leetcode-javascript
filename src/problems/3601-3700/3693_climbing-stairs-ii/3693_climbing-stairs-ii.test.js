import { describe, expect, test } from 'bun:test';

import { climbStairs, climbStairs1 } from './3693_climbing-stairs-ii.js';

const testcases = [
        { n: 4, costs: [1, 2, 3, 4], expected: 13 },
        { n: 4, costs: [5, 1, 6, 2], expected: 11 },
        { n: 3, costs: [9, 8, 3], expected: 12 },
];

describe('climbStairs', () => {
        test.each(structuredClone(testcases))(
                'climbStairs($n, $costs) -> $expected',
                ({ n, costs, expected }) => {
                        expect(climbStairs(n, costs)).toStrictEqual(expected);
                },
        );
});

describe('climbStairs1', () => {
        test.each(structuredClone(testcases))(
                'climbStairs1($n, $costs) -> $expected',
                ({ n, costs, expected }) => {
                        expect(climbStairs1(n, costs)).toStrictEqual(expected);
                },
        );
});
