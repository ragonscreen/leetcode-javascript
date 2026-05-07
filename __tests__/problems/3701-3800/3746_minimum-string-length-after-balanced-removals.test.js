import { describe, expect, test } from 'bun:test';
import { minLengthAfterRemovals } from '../../../src/problems/3701-3800/3746_minimum-string-length-after-balanced-removals.js';

const testcases = [
        { s: 'aabbab', expected: 0 },
        { s: 'aaaa', expected: 4 },
        { s: 'aaabb', expected: 1 },
];

describe('minLengthAfterRemovals', () => {
        test.each(
                structuredClone(testcases),
        )('minLengthAfterRemovals($s) -> $expected', ({ s, expected }) => {
                expect(minLengthAfterRemovals(s)).toStrictEqual(expected);
        });
});
