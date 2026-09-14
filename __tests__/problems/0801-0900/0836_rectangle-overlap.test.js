import { describe, expect, test } from 'bun:test';

import {
        isRectangleOverlap,
        isRectangleOverlap1,
} from '../../../src/problems/0801-0900/0836_rectangle-overlap.js';

const testcases = [
        { rec1: [0, 0, 2, 2], rec2: [1, 1, 3, 3], expected: true },
        { rec1: [0, 0, 1, 1], rec2: [1, 0, 2, 1], expected: false },
        { rec1: [0, 0, 1, 1], rec2: [2, 2, 3, 3], expected: false },
];

describe('isRectangleOverlap', () => {
        test.each(structuredClone(testcases))(
                'isRectangleOverlap($rec1, $rec2) -> $expected',
                ({ rec1, rec2, expected }) => {
                        expect(isRectangleOverlap(rec1, rec2)).toStrictEqual(expected);
                },
        );
});

describe('isRectangleOverlap1', () => {
        test.each(structuredClone(testcases))(
                'isRectangleOverlap1($rec1, $rec2) -> $expected',
                ({ rec1, rec2, expected }) => {
                        expect(isRectangleOverlap1(rec1, rec2)).toStrictEqual(expected);
                },
        );
});
