import { describe, expect, test } from 'bun:test';

import {
        checkOverlap,
        checkOverlap1,
} from '../../../src/problems/1401-1500/1401_circle-and-rectangle-overlapping.js';

const testcases = [
        // { radius: 1, xCenter: 0, yCenter: 0, x1: 1, y1: -1, x2: 3, y2: 1, expected: true },
        // { radius: 1, xCenter: 1, yCenter: 1, x1: 1, y1: -3, x2: 2, y2: -1, expected: false },
        // { radius: 1, xCenter: 0, yCenter: 0, x1: -1, y1: 0, x2: 0, y2: 1, expected: true },
        // { radius: 1, xCenter: 1, yCenter: 1, x1: -31, y1: -3, x2: 3, y2: 3, expected: true },
        // {
        //         radius: 1415,
        //         xCenter: 807,
        //         yCenter: -784,
        //         x1: -733,
        //         y1: 623,
        //         x2: -533,
        //         y2: 1005,
        //         expected: false,
        // },
        {
                radius: 415,
                xCenter: 523,
                yCenter: 539,
                x1: 26,
                y1: 363,
                x2: 193,
                y2: 424,
                expected: true,
        },
];

describe('checkOverlap', () => {
        test.each(structuredClone(testcases))(
                'checkOverlap($radius, $xCenter, $yCenter, $x1, $y1, $x2, $y2) -> $expected',
                ({ radius, xCenter, yCenter, x1, y1, x2, y2, expected }) => {
                        expect(
                                checkOverlap(radius, xCenter, yCenter, x1, y1, x2, y2),
                        ).toStrictEqual(expected);
                },
        );
});

describe('checkOverlap1', () => {
        test.each(structuredClone(testcases))(
                'checkOverlap1($radius, $xCenter, $yCenter, $x1, $y1, $x2, $y2) -> $expected',
                ({ radius, xCenter, yCenter, x1, y1, x2, y2, expected }) => {
                        expect(
                                checkOverlap1(radius, xCenter, yCenter, x1, y1, x2, y2),
                        ).toStrictEqual(expected);
                },
        );
});
