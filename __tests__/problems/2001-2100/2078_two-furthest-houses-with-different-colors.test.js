import { describe, expect, test } from 'bun:test';
import {
        maxDistance,
        maxDistance1,
} from '../../../src/problems/2001-2100/2078_two-furthest-houses-with-different-colors.js';

const testcases = [
        { colors: [1, 1, 1, 6, 1, 1, 1], expected: 3 },
        { colors: [1, 8, 3, 8, 3], expected: 4 },
        { colors: [0, 1], expected: 1 },
];

describe('maxDistance', () => {
        test.each(
                structuredClone(testcases),
        )('maxDistance($colors) -> $expected', ({ colors, expected }) => {
                expect(maxDistance(colors)).toStrictEqual(expected);
        });
});

describe('maxDistance1', () => {
        test.each(
                structuredClone(testcases),
        )('maxDistance1($colors) -> $expected', ({ colors, expected }) => {
                expect(maxDistance1(colors)).toStrictEqual(expected);
        });
});
