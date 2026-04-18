import { describe, expect, test } from 'bun:test';
import { mirrorDistance } from '../../../src/problems/3701-3800/3783_mirror-distance-of-an-integer.js';

const testcases = [
        { n: 25, expected: 27 },
        { n: 10, expected: 9 },
        { n: 7, expected: 0 },
];

describe('mirrorDistance', () => {
        test.each(
                structuredClone(testcases),
        )('mirrorDistance($n) -> $expected', ({ n, expected }) => {
                expect(mirrorDistance(n)).toStrictEqual(expected);
        });
});
