import { describe, expect, test } from 'bun:test';
import { categorizeBox } from '../../../src/problems/2501-2600/2525_categorize-box-according-to-criteria.js';

const testcases = [
        { length: 1000, width: 35, height: 700, mass: 300, expected: 'Heavy' },
        { length: 200, width: 50, height: 800, mass: 50, expected: 'Neither' },
        {
                length: 1000,
                width: 1000,
                height: 1000,
                mass: 100,
                expected: 'Both',
        },
        { length: 10_000, width: 1, height: 1, mass: 1, expected: 'Bulky' },
        { length: 1000, width: 1000, height: 1000, mass: 1, expected: 'Bulky' },
];

describe('categorizeBox', () => {
        test.each(
                structuredClone(testcases),
        )('categorizeBox($length, $width, $height, $mass) -> $expected', ({
                length,
                width,
                height,
                mass,
                expected,
        }) => {
                expect(
                        categorizeBox(length, width, height, mass),
                ).toStrictEqual(expected);
        });
});
