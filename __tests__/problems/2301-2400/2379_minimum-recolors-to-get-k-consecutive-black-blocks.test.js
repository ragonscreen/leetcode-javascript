import { describe, expect, test } from 'bun:test';
import { minimumRecolors } from '../../../src/problems/2301-2400/2379_minimum-recolors-to-get-k-consecutive-black-blocks.js';

const testcases = [
        { blocks: 'WBBWWBBWBW', k: 7, expected: 3 },
        { blocks: 'WBWBBBW', k: 2, expected: 0 },
];

describe('minimumRecolors', () => {
        test.each(
                structuredClone(testcases),
        )('minimumRecolors($blocks, $k) -> $expected', ({
                blocks,
                k,
                expected,
        }) => {
                expect(minimumRecolors(blocks, k)).toStrictEqual(expected);
        });
});
