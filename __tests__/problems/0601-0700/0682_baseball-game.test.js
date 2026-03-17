import { describe, expect, test } from 'bun:test';
import { calPoints } from '../../../src/problems/0601-0700/0682_baseball-game.js';

const testcases = [
        { operations: ['5', '2', 'C', 'D', '+'], expected: 30 },
        { operations: ['5', '-2', '4', 'C', 'D', '9', '+', '+'], expected: 27 },
        { operations: ['1', 'C'], expected: 0 },
];

describe('calPoints', () => {
        test.each(
                structuredClone(testcases),
        )('calPoints($operations) -> $expected', ({ operations, expected }) => {
                expect(calPoints(operations)).toStrictEqual(expected);
        });
});
