import { describe, expect, test } from 'bun:test';
import { MedianFinder } from '../../../src/problems/0000_wip/0295_find-median-from-data-stream.js';

describe.skip('MedianFinder', () => {
        test('default test 1', () => {
                const medianFinder = new MedianFinder();

                expect(medianFinder.addNum(1)).toBeNil();
                expect(medianFinder.addNum(2)).toBeNil();
                expect(medianFinder.findMedian()).toStrictEqual(1.5);
                expect(medianFinder.addNum(3)).toBeNil();
                expect(medianFinder.findMedian()).toStrictEqual(2);
        });
});
