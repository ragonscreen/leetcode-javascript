import { describe, expect, test } from 'bun:test';

import { largestOverlap } from '../../../src/problems/0801-0900/0835_image-overlap.js';

const testcases = [
        {
                img1: [
                        [1, 1, 0],
                        [0, 1, 0],
                        [0, 1, 0],
                ],
                img2: [
                        [0, 0, 0],
                        [0, 1, 1],
                        [0, 0, 1],
                ],
                expected: 3,
        },
        // { img1: [[1]], img2: [[1]], expected: 1 },
        // { img1: [[0]], img2: [[0]], expected: 0 },
        // {
        //         img1: [
        //                 [1, 0],
        //                 [0, 0],
        //         ],
        //         img2: [
        //                 [0, 1],
        //                 [1, 0],
        //         ],
        //         expected: 1,
        // },
];

describe('largestOverlap', () => {
        test.each(structuredClone(testcases))(
                'largestOverlap($img1, $img2) -> $expected',
                ({ img1, img2, expected }) => {
                        expect(largestOverlap(img1, img2)).toStrictEqual(expected);
                },
        );
});
