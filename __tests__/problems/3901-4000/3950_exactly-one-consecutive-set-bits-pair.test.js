import { describe, expect, test } from 'bun:test';
import {
        consecutiveSetBits,
        consecutiveSetBits1,
} from '../../../src/problems/3901-4000/3950_exactly-one-consecutive-set-bits-pair.js';

const testcases = [
        { n: 6, expected: true },
        { n: 5, expected: false },
];

describe('consecutiveSetBits', () => {
        test.each(
                structuredClone(testcases),
        )('consecutiveSetBits($n) -> $expected', ({ n, expected }) => {
                expect(consecutiveSetBits(n)).toStrictEqual(expected);
        });
});

describe('consecutiveSetBits1', () => {
        test.each(
                structuredClone(testcases),
        )('consecutiveSetBits1($n) -> $expected', ({ n, expected }) => {
                expect(consecutiveSetBits1(n)).toStrictEqual(expected);
        });
});
