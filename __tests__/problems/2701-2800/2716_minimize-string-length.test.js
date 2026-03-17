import { describe, expect, test } from 'bun:test';
import { minimizedStringLength } from '../../../src/problems/2701-2800/2716_minimize-string-length.js';

const testcases = [
        { s: 'aaabc', expected: 3 },
        { s: 'cbbd', expected: 3 },
        { s: 'baadccab', expected: 4 },
];

describe('minimizedStringLength', () => {
        test.each(
                structuredClone(testcases),
        )('minimizedStringLength($s) -> $expected', ({ s, expected }) => {
                expect(minimizedStringLength(s)).toStrictEqual(expected);
        });
});
