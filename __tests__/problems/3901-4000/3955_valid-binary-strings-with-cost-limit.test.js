import { describe, expect, test } from 'bun:test';
import { generateValidStrings } from '../../../src/problems/3901-4000/3955_valid-binary-strings-with-cost-limit.js';

const testcases = [
        { n: 3, k: 1, expected: ['000', '010', '100'] },
        { n: 1, k: 0, expected: ['0', '1'] },
];

describe('generateValidStrings', () => {
        test.each(
                structuredClone(testcases),
        )('generateValidStrings($n, $k) -> $expected', ({ n, k, expected }) => {
                expect(generateValidStrings(n, k)).toContainAllValues(expected);
        });
});
