import { describe, expect, test } from 'bun:test';
import { sumGame } from '../../../src/problems/1901-2000/1927_sum-game.js';

const testcases = [
        { num: '5023', expected: false },
        { num: '25??', expected: true },
        { num: '?3295???', expected: false },
];

describe('sumGame', () => {
        test.each(structuredClone(testcases))('sumGame($num) -> $expected', ({
                num,
                expected,
        }) => {
                expect(sumGame(num)).toStrictEqual(expected);
        });
});
