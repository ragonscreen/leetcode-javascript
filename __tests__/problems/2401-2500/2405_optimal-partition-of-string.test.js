import { describe, expect, test } from 'bun:test';
import {
        partitionString,
        partitionString1,
} from '../../../src/problems/2401-2500/2405_optimal-partition-of-string.js';

const testcases = [
        { s: 'abacaba', expected: 4 },
        { s: 'ssssss', expected: 6 },
];

describe('partitionString', () => {
        test.each(
                structuredClone(testcases),
        )('partitionString($s) -> $expected', ({ s, expected }) => {
                expect(partitionString(s)).toStrictEqual(expected);
        });
});

describe('partitionString1', () => {
        test.each(
                structuredClone(testcases),
        )('partitionString1($s) -> $expected', ({ s, expected }) => {
                expect(partitionString1(s)).toStrictEqual(expected);
        });
});
