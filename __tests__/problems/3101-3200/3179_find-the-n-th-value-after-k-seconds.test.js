import { describe, expect, test } from 'bun:test';
import { valueAfterKSeconds } from '../../../src/problems/3101-3200/3179_find-the-n-th-value-after-k-seconds.js';

const testcases = [
        { n: 4, k: 5, expected: 56 },
        { n: 5, k: 3, expected: 35 },
        { n: 5, k: 1000, expected: 84_793_457 },
        { n: 36, k: 39, expected: 842_674_498 },
];

describe('valueAfterKSeconds', () => {
        test.each(
                structuredClone(testcases),
        )('valueAfterKSeconds($n, $k) -> $expected', ({ n, k, expected }) => {
                expect(valueAfterKSeconds(n, k)).toStrictEqual(expected);
        });
});
