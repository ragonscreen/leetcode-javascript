import { describe, expect, test } from 'bun:test';
import {
        countAndSay,
        countAndSay1,
} from '../../../src/problems/0001-0100/0038_count-and-say.js';

const testcases = [
        { n: 1, expected: '1' },
        { n: 4, expected: '1211' },
        {
                n: 16,
                expected: '132113213221133112132113311211131221121321131211132221123113112221131112311332111213211322211312113211',
        },
];

describe('countAndSay', () => {
        test.each(structuredClone(testcases))('countAndSay($n) -> $expected', ({
                n,
                expected,
        }) => {
                expect(countAndSay(n)).toStrictEqual(expected);
        });
});

describe('countAndSay1', () => {
        test.each(
                structuredClone(testcases),
        )('countAndSay1($n) -> $expected', ({ n, expected }) => {
                expect(countAndSay1(n)).toStrictEqual(expected);
        });
});
