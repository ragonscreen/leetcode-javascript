import { describe, expect, test } from 'bun:test';
import { missingRolls } from '../../../src/problems/2001-2100/2028_find-missing-observations.js';

const testcases = [
        { rolls: [3, 2, 4, 3], mean: 4, n: 2 },
        { rolls: [1, 5, 6], mean: 3, n: 4 },
        { rolls: [1, 2, 3, 4], mean: 6, n: 4 },
];

describe('missingRolls', () => {
        test.each(
                structuredClone(testcases),
        )('missingRolls($rolls, $mean, $n) -> $expected', ({
                rolls,
                mean,
                n,
        }) => {
                const m = rolls.length;
                const received = missingRolls(rolls, mean, n);
                const nsum = received.reduce((t, c) => t + c, 0);
                const msum = rolls.reduce((t, c) => t + c, 0);
                const rem = mean * (n + m) - msum;

                if (rem > 6 * n || rem < n) {
                        expect(received).toStrictEqual([]);
                } else {
                        expect((nsum + msum) / (n + m)).toStrictEqual(mean);
                }
        });
});
