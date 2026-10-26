import { describe, expect, test } from 'bun:test';

import { waysToBuyPensPencils } from './2240_number-of-ways-to-buy-pens-and-pencils.js';

const testcases = [
        { total: 20, cost1: 10, cost2: 5, expected: 9 },
        { total: 5, cost1: 10, cost2: 10, expected: 1 },
];

describe('waysToBuyPensPencils', () => {
        test.each(structuredClone(testcases))(
                'waysToBuyPensPencils($total, $cost1, $cost2) -> $expected',
                ({ total, cost1, cost2, expected }) => {
                        expect(waysToBuyPensPencils(total, cost1, cost2)).toStrictEqual(expected);
                },
        );
});
