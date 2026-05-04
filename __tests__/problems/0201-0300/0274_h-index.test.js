import { describe, expect, test } from 'bun:test';
import { hIndex } from '../../../src/problems/0201-0300/0274_h-index.js';

const testcases = [
        { citations: [3, 0, 6, 1, 5], expected: 3 },
        { citations: [1, 3, 1], expected: 1 },
        { citations: [100], expected: 1 },
        { citations: [0, 0, 2], expected: 1 },
];

describe('hIndex', () => {
        test.each(
                structuredClone(testcases),
        )('hIndex($citations) -> $expected', ({ citations, expected }) => {
                expect(hIndex(citations)).toStrictEqual(expected);
        });
});
