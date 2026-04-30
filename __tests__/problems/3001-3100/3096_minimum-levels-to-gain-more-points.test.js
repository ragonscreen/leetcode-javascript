import { describe, expect, test } from 'bun:test';
import {
        minimumLevels,
        minimumLevels1,
        minimumLevels2,
} from '../../../src/problems/3001-3100/3096_minimum-levels-to-gain-more-points.js';

const testcases = [
        { possible: [1, 0, 1, 0], expected: 1 },
        { possible: [1, 1, 1, 1, 1], expected: 3 },
        { possible: [0, 0], expected: -1 },
];

describe('minimumLevels', () => {
        test.each(
                structuredClone(testcases),
        )('minimumLevels($possible) -> $expected', ({ possible, expected }) => {
                expect(minimumLevels(possible)).toStrictEqual(expected);
        });
});

describe('minimumLevels1', () => {
        test.each(
                structuredClone(testcases),
        )('minimumLevels1($possible) -> $expected', ({
                possible,
                expected,
        }) => {
                expect(minimumLevels1(possible)).toStrictEqual(expected);
        });
});

describe('minimumLevels2', () => {
        test.each(
                structuredClone(testcases),
        )('minimumLevels2($possible) -> $expected', ({
                possible,
                expected,
        }) => {
                expect(minimumLevels2(possible)).toStrictEqual(expected);
        });
});
