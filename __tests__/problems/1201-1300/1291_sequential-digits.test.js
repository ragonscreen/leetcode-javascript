import { describe, expect, test } from 'bun:test';
import { sequentialDigits } from '../../../src/problems/1201-1300/1291_sequential-digits.js';

const testcases = [
        { low: 100, high: 300, expected: [123, 234] },
        {
                low: 1000,
                high: 13_000,
                expected: [1234, 2345, 3456, 4567, 5678, 6789, 12_345],
        },
];

describe('sequentialDigits', () => {
        test.each(
                structuredClone(testcases),
        )('sequentialDigits($low, $high) -> $expected', ({
                low,
                high,
                expected,
        }) => {
                expect(sequentialDigits(low, high)).toStrictEqual(expected);
        });
});
