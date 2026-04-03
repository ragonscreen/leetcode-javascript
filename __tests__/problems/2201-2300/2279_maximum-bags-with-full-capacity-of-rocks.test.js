import { describe, expect, test } from 'bun:test';
import { maximumBags } from '../../../src/problems/2201-2300/2279_maximum-bags-with-full-capacity-of-rocks.js';

const testcases = [
        {
                capacity: [2, 3, 4, 5],
                rocks: [1, 2, 4, 4],
                additionalRocks: 2,
                expected: 3,
        },
        {
                capacity: [10, 2, 2],
                rocks: [2, 2, 0],
                additionalRocks: 100,
                expected: 3,
        },
];

describe('maximumBags', () => {
        test.each(
                structuredClone(testcases),
        )('maximumBags($capacity, $rocks, $additionalRocks) -> $expected', ({
                capacity,
                rocks,
                additionalRocks,
                expected,
        }) => {
                expect(
                        maximumBags(capacity, rocks, additionalRocks),
                ).toStrictEqual(expected);
        });
});
