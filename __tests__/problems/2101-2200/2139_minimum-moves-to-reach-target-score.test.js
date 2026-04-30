import { describe, expect, test } from 'bun:test';
import { minMoves } from '../../../src/problems/2101-2200/2139_minimum-moves-to-reach-target-score.js';

const testcases = [
        { target: 5, maxDoubles: 0, expected: 4 },
        { target: 19, maxDoubles: 2, expected: 7 },
        { target: 10, maxDoubles: 4, expected: 4 },
];

describe('minMoves', () => {
        test.each(
                structuredClone(testcases),
        )('minMoves($target, $maxDoubles) -> $expected', ({
                target,
                maxDoubles,
                expected,
        }) => {
                expect(minMoves(target, maxDoubles)).toStrictEqual(expected);
        });
});
