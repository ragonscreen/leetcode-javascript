import { describe, expect, test } from 'bun:test';

import { maxSumOfSquares } from './3723_maximize-sum-of-squares-of-digits.js';

const testcases = [
        { num: 2, sum: 3, expected: '30' },
        { num: 2, sum: 17, expected: '98' },
        { num: 1, sum: 10, expected: '' },
];

describe('maxSumOfSquares', () => {
        test.each(structuredClone(testcases))(
                'maxSumOfSquares($num, $sum) -> $expected',
                ({ num, sum, expected }) => {
                        expect(maxSumOfSquares(num, sum)).toStrictEqual(expected);
                },
        );
});
