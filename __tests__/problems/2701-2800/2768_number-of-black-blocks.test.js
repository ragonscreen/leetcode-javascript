import { describe, expect, test } from 'bun:test';

import { countBlackBlocks } from '../../../src/problems/2701-2800/2768_number-of-black-blocks.js';

const testcases = [
        { m: 3, n: 3, coordinates: [[0, 0]], expected: [3, 1, 0, 0, 0] },
        {
                m: 3,
                n: 3,
                coordinates: [
                        [0, 0],
                        [1, 1],
                        [0, 2],
                ],
                expected: [0, 2, 2, 0, 0],
        },
];

describe('countBlackBlocks', () => {
        test.each(structuredClone(testcases))(
                'countBlackBlocks($m, $n, $coordinates) -> $expected',
                ({ m, n, coordinates, expected }) => {
                        expect([...countBlackBlocks(m, n, coordinates)]).toStrictEqual(expected);
                },
        );
});
