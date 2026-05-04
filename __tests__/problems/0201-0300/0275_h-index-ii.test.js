import { describe, expect, test } from 'bun:test';
import { hIndex } from '../../../src/problems/0201-0300/0275_h-index-ii.js';

const testcases = [
        { citations: [0, 1, 3, 5, 6], expected: 3 },
        { citations: [1, 2, 100], expected: 2 },
        { citations: [6, 7, 8, 9, 10], expected: 5 },
        { citations: [0], expected: 0 },
        { citations: [1], expected: 1 },
        { citations: [0, 1], expected: 1 },
        { citations: [0, 0, 4, 4], expected: 2 },
];

describe('hIndex', () => {
        test.each(
                structuredClone(testcases),
        )('hIndex($citations) -> $expected', ({ citations, expected }) => {
                expect(hIndex(citations)).toStrictEqual(expected);
        });
});
