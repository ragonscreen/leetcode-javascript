import { describe, expect, test } from 'bun:test';

import { minimumOperationsToMakeEqual } from '../../../src/problems/2901-3000/2998_minimum-number-of-operations-to-make-x-and-y-equal.js';

const testcases = [
        { x: 26, y: 1, expected: 3 },
        { x: 54, y: 2, expected: 4 },
        { x: 25, y: 30, expected: 5 },
        { x: 89, y: 57, expected: 32 },
        { x: 97, y: 57, expected: 40 },
        { x: 13, y: 6, expected: 6 },
        { x: 23, y: 12, expected: 10 },
];

describe('minimumOperationsToMakeEqual', () => {
        test.each(structuredClone(testcases))(
                'minimumOperationsToMakeEqual($x, $y) -> $expected',
                ({ x, y, expected }) => {
                        expect(minimumOperationsToMakeEqual(x, y)).toStrictEqual(expected);
                },
        );
});
