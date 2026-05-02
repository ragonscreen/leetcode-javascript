import { describe, expect, test } from 'bun:test';
import { maxOperations } from '../../../src/problems/3201-3300/3228_maximum-number-of-operations-to-move-ones-to-the-end.js';

const testcases = [
        { s: '1001101', expected: 4 },
        { s: '00111', expected: 0 },
];

describe('maxOperations', () => {
        test.each(
                structuredClone(testcases),
        )('maxOperations($s) -> $expected', ({ s, expected }) => {
                expect(maxOperations(s)).toStrictEqual(expected);
        });
});
