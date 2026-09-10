import { describe, expect, test } from 'bun:test';

import { kthLargestValue } from '../../../src/problems/1701-1800/1738_find-kth-largest-xor-coordinate-value.js';

const testcases = [
        {
                matrix: [
                        [5, 2],
                        [1, 6],
                ],
                k: 1,
                expected: 7,
        },
        {
                matrix: [
                        [5, 2],
                        [1, 6],
                ],
                k: 2,
                expected: 5,
        },
        {
                matrix: [
                        [5, 2],
                        [1, 6],
                ],
                k: 3,
                expected: 4,
        },
];

describe('kthLargestValue', () => {
        test.each(structuredClone(testcases))(
                'kthLargestValue($matrix, $k) -> $expected',
                ({ matrix, k, expected }) => {
                        expect(kthLargestValue(matrix, k)).toStrictEqual(expected);
                },
        );
});
