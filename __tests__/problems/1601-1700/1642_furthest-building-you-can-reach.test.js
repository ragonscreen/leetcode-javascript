import { describe, expect, test } from 'bun:test';

import { furthestBuilding } from '../../../src/problems/1601-1700/1642_furthest-building-you-can-reach.js';

const testcases = [
        {
                heights: [4, 2, 7, 6, 9, 14, 12],
                bricks: 5,
                ladders: 1,
                expected: 4,
        },
        {
                heights: [4, 12, 2, 7, 3, 18, 20, 3, 19],
                bricks: 10,
                ladders: 2,
                expected: 7,
        },
        { heights: [14, 3, 19, 3], bricks: 17, ladders: 0, expected: 3 },
];

describe('furthestBuilding', () => {
        test.each(structuredClone(testcases))(
                'furthestBuilding($heights, $bricks, $ladders) -> $expected',
                ({ heights, bricks, ladders, expected }) => {
                        expect(furthestBuilding(heights, bricks, ladders)).toStrictEqual(expected);
                },
        );
});
