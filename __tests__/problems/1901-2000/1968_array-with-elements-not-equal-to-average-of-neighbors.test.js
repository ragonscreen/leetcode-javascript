import { describe, expect, test } from 'bun:test';
import { rearrangeArray } from '../../../src/problems/1901-2000/1968_array-with-elements-not-equal-to-average-of-neighbors.js';

const testcases = [{ nums: [1, 2, 3, 4, 5] }, { nums: [6, 2, 0, 9, 7] }];

describe('rearrangeArray', () => {
        test.each(
                structuredClone(testcases),
        )('rearrangeArray($nums) -> $expected', ({ nums }) => {
                const received = Array.from(rearrangeArray(nums));

                for (let i = 1; i < received.length - 1; i++) {
                        const avg = (received[i - 1] + received[i + 1]) / 2;
                        expect(avg).not.toBeCloseTo(received[i]);
                }
        });
});
