import { describe, expect, test } from 'bun:test';
import { eatenApples } from '../../../src/problems/1701-1800/1705_maximum-number-of-eaten-apples.js';

const testcases = [
        { apples: [1, 2, 3, 5, 2], days: [3, 2, 1, 4, 2], expected: 7 },
        // { apples: [3, 0, 0, 0, 0, 2], days: [3, 0, 0, 0, 0, 2], expected: 5 },
        // { apples: [3, 1, 1, 0, 0, 2], days: [3, 1, 1, 0, 0, 2], expected: 5 },
];

describe('eatenApples', () => {
        test.each(
                structuredClone(testcases),
        )('eatenApples($apples, $days) -> $expected', ({
                apples,
                days,
                expected,
        }) => {
                expect(eatenApples(apples, days)).toStrictEqual(expected);
        });
});
