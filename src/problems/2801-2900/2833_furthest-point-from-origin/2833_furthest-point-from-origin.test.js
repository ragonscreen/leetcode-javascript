import { describe, expect, test } from 'bun:test';

import { furthestDistanceFromOrigin } from './2833_furthest-point-from-origin.js';

const testcases = [
        { moves: 'L_RL__R', expected: 3 },
        { moves: '_R__LL_', expected: 5 },
        { moves: '_______', expected: 7 },
];

describe('furthestDistanceFromOrigin', () => {
        test.each(structuredClone(testcases))(
                'furthestDistanceFromOrigin($moves) -> $expected',
                ({ moves, expected }) => {
                        expect(furthestDistanceFromOrigin(moves)).toStrictEqual(expected);
                },
        );
});
