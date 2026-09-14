import { describe, expect, test } from 'bun:test';

import { computeArea } from '../../../src/problems/0201-0300/0223_rectangle-area.js';

const testcases = [
        { ax1: -3, ay1: 0, ax2: 3, ay2: 4, bx1: 0, by1: -1, bx2: 9, by2: 2, expected: 45 },
        { ax1: -2, ay1: -2, ax2: 2, ay2: 2, bx1: -2, by1: -2, bx2: 2, by2: 2, expected: 16 },
];

describe('computeArea', () => {
        test.each(structuredClone(testcases))(
                'computeArea($ax1, $ay1, $ax2, $ay2, $bx1, $by1, $bx2, $by2) -> $expected',
                ({ ax1, ay1, ax2, ay2, bx1, by1, bx2, by2, expected }) => {
                        expect(computeArea(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2)).toStrictEqual(
                                expected,
                        );
                },
        );
});
