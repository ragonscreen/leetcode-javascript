import { describe, expect, test } from 'bun:test';

import { maximumElementAfterDecrementingAndRearranging } from '../../../src/problems/1801-1900/1846_maximum-element-after-decreasing-and-rearranging.js';

const testcases = [
        { arr: [2, 2, 1, 2, 1], expected: 2 },
        { arr: [100, 1, 1000], expected: 3 },
        { arr: [1, 2, 3, 4, 5], expected: 5 },
        { arr: [73, 98, 9], expected: 3 },
];

describe('maximumElementAfterDecrementingAndRearranging', () => {
        test.each(structuredClone(testcases))(
                'maximumElementAfterDecrementingAndRearranging($arr) -> $expected',
                ({ arr, expected }) => {
                        expect(maximumElementAfterDecrementingAndRearranging(arr)).toStrictEqual(
                                expected,
                        );
                },
        );
});
