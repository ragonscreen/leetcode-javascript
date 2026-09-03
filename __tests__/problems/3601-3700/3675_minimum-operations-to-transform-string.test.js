import { describe, expect, test } from 'bun:test';

import { minOperations } from '../../../src/problems/3601-3700/3675_minimum-operations-to-transform-string.js';

const testcases = [
        { s: 'yz', expected: 2 },
        { s: 'a', expected: 0 },
        { s: 'sdgfuwierbaoehqehkadhqahsdzzzxyqetubxzzz', expected: 25 },
];

describe('minOperations', () => {
        test.each(structuredClone(testcases))(
                'minOperations($s) -> $expected',
                ({ s, expected }) => {
                        expect(minOperations(s)).toStrictEqual(expected);
                },
        );
});
