import { describe, expect, test } from 'bun:test';
import { countCollisions } from '../../../src/problems/2201-2300/2211_count-collisions-on-a-road.js';

const testcases = [
        { directions: 'RLRSLL', expected: 5 },
        { directions: 'LLRR', expected: 0 },
        { directions: 'SSRSSRLLRSLLRSRSSRLRRRRLLRRLSSRR', expected: 20 },
];

describe('countCollisions', () => {
        test.each(
                structuredClone(testcases),
        )('countCollisions($directions) -> $expected', ({
                directions,
                expected,
        }) => {
                expect(countCollisions(directions)).toStrictEqual(expected);
        });
});
