import { describe, expect, test } from 'bun:test';
import { minimizedMaximum } from '../../../src/problems/2001-2100/2064_minimized-maximum-of-products-distributed-to-any-store.js';

const testcases = [
        { n: 6, quantities: [11, 6], expected: 3 },
        { n: 7, quantities: [15, 10, 10], expected: 5 },
        { n: 1, quantities: [100_000], expected: 100_000 },
        { n: 2, quantities: [5, 7], expected: 7 },
];

describe('minimizedMaximum', () => {
        test.each(
                structuredClone(testcases),
        )('minimizedMaximum($n, $quantities) -> $expected', ({
                n,
                quantities,
                expected,
        }) => {
                expect(minimizedMaximum(n, quantities)).toStrictEqual(expected);
        });
});
