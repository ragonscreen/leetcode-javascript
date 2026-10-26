import { describe, expect, test } from 'bun:test';

import { minCost } from './3784_minimum-deletion-cost-to-make-all-characters-equal.js';

const testcases = [
        { s: 'aabaac', cost: [1, 2, 3, 4, 1, 10], expected: 11 },
        { s: 'abc', cost: [10, 5, 8], expected: 13 },
        { s: 'zzzzz', cost: [67, 67, 67, 67, 67], expected: 0 },
];

describe('minCost', () => {
        test.each(structuredClone(testcases))(
                'minCost($s, $cost) -> $expected',
                ({ s, cost, expected }) => {
                        expect(minCost(s, cost)).toStrictEqual(expected);
                },
        );
});
