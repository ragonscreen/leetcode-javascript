import { describe, expect, test } from 'bun:test';
import { closestPrimes } from '../../../src/problems/2501-2600/2523_closest-prime-numbers-in-range.js';

const testcases = [
        { left: 10, right: 19, expected: [11, 13] },
        { left: 4, right: 6, expected: [-1, -1] },
];

describe('closestPrimes', () => {
        test.each(
                structuredClone(testcases),
        )('closestPrimes($left, $right) -> $expected', ({
                left,
                right,
                expected,
        }) => {
                expect(Array.from(closestPrimes(left, right))).toStrictEqual(
                        expected,
                );
        });
});
