import { describe, expect, test } from 'bun:test';
import { numTilePossibilities } from '../../../src/problems/1001-1100/1079_letter-tile-possibilities.js';

const testcases = [
        { tiles: 'AAB', expected: 8 },
        { tiles: 'AAABBC', expected: 188 },
        { tiles: 'V', expected: 1 },
];

describe('numTilePossibilities', () => {
        test.each(
                structuredClone(testcases),
        )('numTilePossibilities($tiles) -> $expected', ({
                tiles,
                expected,
        }) => {
                expect(numTilePossibilities(tiles)).toStrictEqual(expected);
        });
});
