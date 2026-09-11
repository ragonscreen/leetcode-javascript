import { describe, expect, test } from 'bun:test';

import {
        totalNumbers,
        totalNumbers1,
} from '../../../src/problems/3401-3500/3483_unique-3-digit-even-numbers.js';

const testcases = [
        { digits: [1, 2, 3, 4], expected: 12 },
        { digits: [0, 2, 2], expected: 2 },
        { digits: [6, 6, 6], expected: 1 },
        { digits: [1, 3, 5], expected: 0 },
];

describe('totalNumbers', () => {
        test.each(structuredClone(testcases))(
                'totalNumbers($digits) -> $expected',
                ({ digits, expected }) => {
                        expect(totalNumbers(digits)).toStrictEqual(expected);
                },
        );
});

describe('totalNumbers1', () => {
        test.each(structuredClone(testcases))(
                'totalNumbers1($digits) -> $expected',
                ({ digits, expected }) => {
                        expect(totalNumbers1(digits)).toStrictEqual(expected);
                },
        );
});
