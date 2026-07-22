import { describe, expect, test } from 'bun:test';
import { largestAltitude } from '../../../src/problems/1701-1800/1732_find-the-highest-altitude.js';

const testcases = [
        { gain: [-5, 1, 5, 0, -7], expected: 1 },
        { gain: [-4, -3, -2, -1, 4, 3, 2], expected: 0 },
];

describe('largestAltitude', () => {
        test.each(
                structuredClone(testcases),
        )('largestAltitude($gain) -> $expected', ({ gain, expected }) => {
                expect(largestAltitude(gain)).toStrictEqual(expected);
        });
});
