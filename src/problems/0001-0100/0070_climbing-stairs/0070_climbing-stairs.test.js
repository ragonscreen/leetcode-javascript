import { describe, expect, test } from 'bun:test';

import { climbStairs, climbStairs1, climbStairs2 } from './0070_climbing-stairs.js';

const testcases = [
        { n: 2, expected: 2 },
        { n: 3, expected: 3 },
        { n: 4, expected: 5 },
        { n: 5, expected: 8 },
        { n: 6, expected: 13 },
];

describe('climbStairs', () => {
        test.each(structuredClone(testcases))('climbStairs($n) -> $expected', ({ n, expected }) => {
                expect(climbStairs(n)).toStrictEqual(expected);
        });
});

describe('climbStairs1', () => {
        test.each(structuredClone(testcases))(
                'climbStairs1($n) -> $expected',
                ({ n, expected }) => {
                        expect(climbStairs1(n)).toStrictEqual(expected);
                },
        );
});

describe('climbStairs2', () => {
        test.each(structuredClone(testcases))(
                'climbStairs2($n) -> $expected',
                ({ n, expected }) => {
                        expect(climbStairs2(n)).toStrictEqual(expected);
                },
        );
});
