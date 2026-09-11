import { describe, expect, test } from 'bun:test';

import {
        findEvenNumbers,
        findEvenNumbers1,
} from '../../../src/problems/2001-2100/2094_finding-3-digit-even-numbers.js';

const testcases = [
        { digits: [2, 1, 3, 0], expected: [102, 120, 130, 132, 210, 230, 302, 310, 312, 320] },
        { digits: [2, 2, 8, 8, 2], expected: [222, 228, 282, 288, 822, 828, 882] },
        { digits: [3, 7, 5], expected: [] },
];

describe('findEvenNumbers', () => {
        test.each(structuredClone(testcases))(
                'findEvenNumbers($digits) -> $expected',
                ({ digits, expected }) => {
                        expect([...findEvenNumbers(digits)]).toStrictEqual(expected);
                },
        );
});

describe('findEvenNumbers1', () => {
        test.each(structuredClone(testcases))(
                'findEvenNumbers1($digits) -> $expected',
                ({ digits, expected }) => {
                        expect([...findEvenNumbers1(digits)]).toStrictEqual(expected);
                },
        );
});
