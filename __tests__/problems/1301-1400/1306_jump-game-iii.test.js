import { describe, expect, test } from 'bun:test';
import {
        canReach,
        canReach1,
} from '../../../src/problems/1301-1400/1306_jump-game-iii.js';

const testcases = [
        { arr: [4, 2, 3, 0, 3, 1, 2], start: 5, expected: true },
        { arr: [4, 2, 3, 0, 3, 1, 2], start: 0, expected: true },
        { arr: [3, 0, 2, 1, 2], start: 2, expected: false },
        { arr: [0], start: 0, expected: true },
];

describe('canReach', () => {
        test.each(
                structuredClone(testcases),
        )('canReach($arr, $start) -> $expected', ({ arr, start, expected }) => {
                expect(canReach(arr, start)).toStrictEqual(expected);
        });
});

describe('canReach1', () => {
        test.each(
                structuredClone(testcases),
        )('canReach1($arr, $start) -> $expected', ({
                arr,
                start,
                expected,
        }) => {
                expect(canReach1(arr, start)).toStrictEqual(expected);
        });
});
