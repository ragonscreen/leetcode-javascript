import { describe, expect, test } from 'bun:test';

import { mergeTriplets } from './1899_merge-triplets-to-form-target-triplet.js';

const testcases = [
        {
                triplets: [
                        [2, 5, 3],
                        [1, 8, 4],
                        [1, 7, 5],
                ],
                target: [2, 7, 5],
                expected: true,
        },
        {
                triplets: [
                        [3, 4, 5],
                        [4, 5, 6],
                ],
                target: [3, 2, 5],
                expected: false,
        },
        {
                triplets: [
                        [2, 5, 3],
                        [2, 3, 4],
                        [1, 2, 5],
                        [5, 2, 3],
                ],
                target: [5, 5, 5],
                expected: true,
        },
];

describe('mergeTriplets', () => {
        test.each(structuredClone(testcases))(
                'mergeTriplets($triplets, $target) -> $expected',
                ({ triplets, target, expected }) => {
                        expect(Boolean(mergeTriplets(triplets, target))).toStrictEqual(expected);
                },
        );
});
