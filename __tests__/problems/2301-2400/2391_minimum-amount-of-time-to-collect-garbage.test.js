import { describe, expect, test } from 'bun:test';
import { garbageCollection } from '../../../src/problems/2301-2400/2391_minimum-amount-of-time-to-collect-garbage.js';

const testcases = [
        { garbage: ['G', 'P', 'GP', 'GG'], travel: [2, 4, 3], expected: 21 },
        { garbage: ['MMM', 'PGM', 'GP'], travel: [3, 10], expected: 37 },
];

describe('garbageCollection', () => {
        test.each(
                structuredClone(testcases),
        )('garbageCollection($garbage, $travel) -> $expected', ({
                garbage,
                travel,
                expected,
        }) => {
                expect(garbageCollection(garbage, travel)).toStrictEqual(
                        expected,
                );
        });
});
