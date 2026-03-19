import { describe, expect, test } from 'bun:test';
import { numberOfAlternatingGroups } from '../../../src/problems/3201-3300/3208_alternating-groups-ii.js';

const testcases = [
        { colors: [0, 1, 0, 1, 0], k: 3, expected: 3 },
        { colors: [0, 1, 0, 0, 1, 0, 1], k: 6, expected: 2 },
        { colors: [1, 1, 0, 1], k: 4, expected: 0 },
        { colors: [0, 0, 1], k: 3, expected: 1 },
        { colors: [0, 1, 0, 1], k: 3, expected: 4 },
        { colors: [0, 1], k: 1, expected: 2 },
        { colors: [0, 0, 0, 0, 0, 0], k: 3, expected: 0 },
];

describe('numberOfAlternatingGroups', () => {
        test.each(
                structuredClone(testcases),
        )('numberOfAlternatingGroups($colors, $k) -> $expected', ({
                colors,
                k,
                expected,
        }) => {
                expect(numberOfAlternatingGroups(colors, k)).toStrictEqual(
                        expected,
                );
        });
});
