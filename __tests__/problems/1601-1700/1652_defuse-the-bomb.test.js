import { describe, expect, test } from 'bun:test';
import { decrypt } from '../../../src/problems/1601-1700/1652_defuse-the-bomb.js';

const testcases = [
        { code: [5, 7, 1, 4], k: 3, expected: [12, 10, 16, 13] },
        { code: [1, 2, 3, 4], k: 0, expected: [0, 0, 0, 0] },
        { code: [2, 4, 9, 3], k: -2, expected: [12, 5, 6, 13] },
];

describe('decrypt', () => {
        test.each(
                structuredClone(testcases),
        )('decrypt($code, $k) -> $expected', ({ code, k, expected }) => {
                expect(Array.from(decrypt(code, k))).toStrictEqual(expected);
        });
});
