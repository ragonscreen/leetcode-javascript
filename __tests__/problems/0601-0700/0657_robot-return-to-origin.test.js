import { describe, expect, test } from 'bun:test';
import { judgeCircle } from '../../../src/problems/0601-0700/0657_robot-return-to-origin.js';

const testcases = [
        { moves: 'UD', expected: true },
        { moves: 'LL', expected: false },
];

describe('judgeCircle', () => {
        test.each(
                structuredClone(testcases),
        )('judgeCircle($moves) -> $expected', ({ moves, expected }) => {
                expect(judgeCircle(moves)).toStrictEqual(expected);
        });
});
