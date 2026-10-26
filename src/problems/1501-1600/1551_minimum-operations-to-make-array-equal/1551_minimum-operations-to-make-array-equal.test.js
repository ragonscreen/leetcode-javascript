import { describe, expect, test } from 'bun:test';

import { minOperations } from './1551_minimum-operations-to-make-array-equal.js';

const testcases = [
        { n: 3, expected: 2 },
        { n: 6, expected: 9 },
];

describe('minOperations', () => {
        test.each(structuredClone(testcases))(
                'minOperations($n) -> $expected',
                ({ n, expected }) => {
                        expect(minOperations(n)).toStrictEqual(expected);
                },
        );
});
