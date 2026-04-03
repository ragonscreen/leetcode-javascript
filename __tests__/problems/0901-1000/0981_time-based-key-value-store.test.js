import { describe, expect, test } from 'bun:test';
import { TimeMap } from '../../../src/problems/0901-1000/0981_time-based-key-value-store.js';

describe('TimeMap', () => {
        test('default test 1', () => {
                const timeMap = new TimeMap();

                expect(timeMap.set('foo', 'bar', 1)).toBeNil();
                expect(timeMap.get('foo', 1)).toStrictEqual('bar');
                expect(timeMap.get('foo', 3)).toStrictEqual('bar');
                expect(timeMap.set('foo', 'bar2', 4)).toBeNil();
                expect(timeMap.get('foo', 4)).toStrictEqual('bar2');
                expect(timeMap.get('foo', 5)).toStrictEqual('bar2');
        });

        test('default test 2', () => {
                const timeMap = new TimeMap();

                expect(timeMap.set('a', '1', 1)).toBeNil();
                expect(timeMap.set('a', '4', 4)).toBeNil();
                expect(timeMap.set('a', '9', 9)).toBeNil();
                expect(timeMap.set('a', '12', 12)).toBeNil();
                expect(timeMap.set('a', '15', 15)).toBeNil();
                expect(timeMap.set('a', '20', 20)).toBeNil();
                expect(timeMap.get('a', 10)).toStrictEqual('9');
        });
});
