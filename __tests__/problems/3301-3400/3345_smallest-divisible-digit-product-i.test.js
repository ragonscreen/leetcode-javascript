import { describe, expect, test } from 'bun:test';
import { smallestNumber } from '../../../src/problems/3301-3400/3345_smallest-divisible-digit-product-i.js';

const testcases = [
        { n: 10, t: 2, expected: 10 },
        { n: 15, t: 3, expected: 16 },
];

describe('smallestNumber', () => {
        test.each(
                structuredClone(testcases),
        )('smallestNumber($n, $t) -> $expected', ({ n, t, expected }) => {
                expect(smallestNumber(n, t)).toStrictEqual(expected);
        });
});
