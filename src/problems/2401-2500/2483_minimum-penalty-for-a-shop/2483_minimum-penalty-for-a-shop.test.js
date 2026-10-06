import { describe, expect, test } from 'bun:test';

import { bestClosingTime } from './2483_minimum-penalty-for-a-shop.js';

const testcases = [
        { customers: 'YYNY', expected: 2 },
        { customers: 'NNNNN', expected: 0 },
        { customers: 'YYYY', expected: 4 },
];

describe('bestClosingTime', () => {
        test.each(structuredClone(testcases))(
                'bestClosingTime($customers) -> $expected',
                ({ customers, expected }) => {
                        expect(bestClosingTime(customers)).toStrictEqual(expected);
                },
        );
});
