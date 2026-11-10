import { describe, expect, test } from 'bun:test';

import { findTheDistanceValue } from './1385_find-the-distance-value-between-two-arrays.js';

const testcases = [
        { arr1: [4, 5, 8], arr2: [10, 9, 1, 8], d: 2, expected: 2 },
        { arr1: [1, 4, 2, 3], arr2: [-4, -3, 6, 10, 20, 30], d: 3, expected: 2 },
        { arr1: [2, 1, 100, 3], arr2: [-5, -2, 10, -3, 7], d: 6, expected: 1 },
];

describe('findTheDistanceValue', () => {
        test.each(structuredClone(testcases))(
                'findTheDistanceValue($arr1, $arr2, $d) -> $expected',
                ({ arr1, arr2, d, expected }) => {
                        expect(findTheDistanceValue(arr1, arr2, d)).toStrictEqual(expected);
                },
        );
});
