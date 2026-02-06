import { describe, expect, test } from 'vitest';
import { maxSlidingWindow } from '../../../src/problems/shelved/0239_sliding-window-maximum.js';

describe('maxSlidingWindow', () => {
        test('basic test 1', () => {
                expect(
                        maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3),
                ).toStrictEqual([3, 3, 5, 5, 6, 7]);
        });

        // test('basic test 2', () => {
        //         expect(maxSlidingWindow([1], 1)).toStrictEqual([1]);
        // });
});
