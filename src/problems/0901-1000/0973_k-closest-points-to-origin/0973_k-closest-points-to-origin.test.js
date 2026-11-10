import { describe, expect, test } from 'bun:test';

import { kClosest } from './0973_k-closest-points-to-origin.js';

const testcases = [
        {
                points: [
                        [1, 3],
                        [-2, 2],
                ],
                k: 1,
                expected: [[-2, 2]],
        },
        {
                points: [
                        [3, 3],
                        [5, -1],
                        [-2, 4],
                ],
                k: 2,
                expected: [
                        [3, 3],
                        [-2, 4],
                ],
        },
];

describe('kClosest', () => {
        test.each(structuredClone(testcases))(
                'kClosest($points, $k) -> $expected',
                ({ points, k, expected }) => {
                        expect(kClosest(points, k)).toStrictEqual(expected);
                },
        );
});
